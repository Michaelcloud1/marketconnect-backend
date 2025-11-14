import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">
        <span>© {new Date().getFullYear()} MarketConnect</span>
        <span>Built with ❤️ — v1.0</span>
      </div>
    </footer>
  );
};

export default Footer;
