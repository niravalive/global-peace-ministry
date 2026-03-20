'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  
  // On home page before scrolling, text should be white to contrast with hero image.
  // Otherwise, text is dark.
  const isLightText = isHome && !scrolled && !isOpen;

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-700 ${
      scrolled || isOpen ? 'bg-white border-b border-gray-100 py-4' : 'bg-transparent py-6 md:py-10'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          <div className="flex z-50">
            <Link href="/" className={`font-black uppercase tracking-widest text-xl md:text-2xl transition-colors duration-500 ${
              isLightText ? 'text-white' : 'text-primary-900'
            }`}>
              GPC.
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                    isLightText
                      ? (isActive ? 'text-white' : 'text-white/70 hover:text-white')
                      : (isActive ? 'text-primary-900' : 'text-gray-500 hover:text-primary-900')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/donate"
              className={`text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 border transition-colors duration-500 ${
                isLightText 
                  ? 'border-white text-white hover:bg-white hover:text-primary-900'
                  : 'border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white'
              }`}
            >
              Give
            </Link>
          </div>
          
          <div className="flex items-center lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-500 ${
                 isLightText ? 'text-white' : 'text-primary-900'
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
          >
            <div className="space-y-8 text-center flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors ${
                      isActive ? 'text-primary-900' : 'text-gray-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-10">
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-lg font-bold uppercase tracking-widest text-primary-900 border-b-2 border-primary-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors"
                >
                  Give Online
                </Link>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-primary-900">
               <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
               <a href="#" className="hover:text-gray-400 transition-colors">YouTube</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
