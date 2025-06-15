
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-16 text-gray-400 text-sm border-t border-gray-800 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
        <p>
          Desarrollado por{' '}
          <a
            href="https://linktr.ee/mario.conf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white hover:underline"
          >
            mario.conf
          </a>
        </p>
        <p className="max-w-2xl">
          'Neon Genesis Evangelion', una obra de Hideaki Anno y Studio Gainax. La propiedad intelectual y todos los derechos relacionados pertenecen a ©khara, inc. Este sitio es un proyecto de fans sin fines de lucro.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Nervflix. Creado con fines educativos y de portafolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
