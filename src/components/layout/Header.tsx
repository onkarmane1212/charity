'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  delay: number;
}

const navigation: NavItem[] = [
  { name: 'मुख्यपृष्ठ', href: '/', delay: 100 },
  { name: 'आमच्याबद्दल', href: '/about', delay: 200 },
  { name: 'आमचे कार्य', href: '/work', delay: 300 },
  { name: 'गॅलरी', href: '/gallery', delay: 400 },
  { name: 'वृत्तपत्रे', href: '/newspaper', delay: 500 },
  { name: 'सहभागी व्हा', href: '/involve', delay: 600 },
  { name: 'देणगी द्या', href: '/donate', delay: 700 },
  { name: 'संपर्क', href: '/contact', delay: 800 },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      // Update scrolled state for styling
      setScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener with passive for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route changes
  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  // Header styles with smooth transitions
  const headerStyles = {
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease, padding 0.3s ease',
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-white/90 py-3'
      }`}
      style={{
        ...headerStyles,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" style={{ transition: 'opacity 0.3s ease' }}>
              <span className="text-lg font-bold text-emerald-600">पार्श्वनाथ अल्पसंख्यांक बहुउद्देशीय सेवाभावी संस्था
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `opacity 0.3s ${item.delay}ms ease, transform 0.3s ${item.delay}ms ease`,
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.3s 900ms ease, transform 0.3s 900ms ease',
              }}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              aria-expanded="false"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <span className="sr-only">मेनू उघडा</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="md:hidden bg-white shadow-lg"
            style={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0,
              overflow: 'hidden',
              transition: 'opacity 0.3s ease, height 0.3s ease',
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link
                  href="/donate"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => setIsOpen(false)}
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
