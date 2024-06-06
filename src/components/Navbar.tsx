import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 w-full py-10">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-bold">Meu Site</a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-white">Página Inicial</a>
          <a href="/sobre" className="text-white">Sobre</a>
          <a href="/contato" className="text-white">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
