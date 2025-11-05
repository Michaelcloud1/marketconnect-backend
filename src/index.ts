import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, MONGO_URL } from './config';

import healthRouter from './routes/health';
import productsRouter from './routes/products';
import authRouter from './routes/auth';

const app = express();
app.use(cors());
app.use(express.json());

// Auth routes (no auth middleware needed)
app.use('/api/auth', authRouter);

app.use('/', healthRouter);
app.use('/api/products', productsRouter);

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  socket.on('join', ({ room }) => {
    socket.join(room);
  });
  socket.on('message', (msg) => {
    if (msg && msg.room) io.to(msg.room).emit('message', msg);
  });
  socket.on('disconnect', () => console.log('socket disconnected', socket.id));
});

async function start() {
  try {
    const skipDb = process.env.SKIP_DB === 'true';
    if (!skipDb) {
      await mongoose.connect(MONGO_URL);
      console.log('MongoDB connected');
    } else {
      console.log('SKIP_DB is set, skipping MongoDB connection');
    }

    server.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
