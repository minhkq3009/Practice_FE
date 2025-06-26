import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);

  const isActive = (href) => path === href ? 'text-black font-semibold' : 'text-gray-500 hover:text-black';

  return (
    <header className="flex justify-between items-center py-6 px-5 md:py-10 md:px-[60px] border-b relative">
      <a href="/">
        <img src="/logo.svg" alt="Logo" className="w-56 h-auto cursor-pointer" />
      </a>
      <nav className="hidden md:flex gap-6 text-[20px] uppercase">
        <a href="/" className={isActive('/')}>Blog</a>
        <a href="/about" className={isActive('/about')}>About</a>
        <a href="/projects" className={isActive('/projects')}>Projects</a>
        <a href="/readme" className={isActive('/readme')}>Read me</a>
      </nav>
      {/* Mobile nav */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <FaBars size={20} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col items-center gap-3 text-sm uppercase z-10 text-center">
            <a href="/" className={isActive('/')}>Blog</a>
            <a href="/about" className={isActive('/about')}>About</a>
            <a href="/projects" className={isActive('/projects')}>Projects</a>
            <a href="/readme" className={isActive('/readme')}>Read me</a>
          </div>
        )}
      </div>
    </header>
  );
}
