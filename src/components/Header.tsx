
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-4 md:px-16 transition-all duration-500",
      isScrolled ? "bg-black/90" : "bg-gradient-to-b from-black to-transparent"
    )}>
      <div className="flex items-center">
        <div 
          onClick={() => navigate('/')} 
          className="text-2xl md:text-3xl font-bold text-primary cursor-pointer"
        >
          NERVFLIX
        </div>
      </div>
    </header>
  );
};

export default Header;
