import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-2 fixed top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 flex justify-between">
        <div className="flex items-center">
          <a href="/" className="text-black text-xl font-bold">Meu Site</a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-black">Página Inicial</a>
          <a href="/sobre" className="text-black">Sobre</a>
          <a href="/contato" className="text-black">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
