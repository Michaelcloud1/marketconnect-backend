import React, { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call auth service
    console.log("login", { email, password });
    alert("Login submitted (stub)");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm block mb-1">Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label className="text-sm block mb-1">Password</label>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
