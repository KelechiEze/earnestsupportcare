'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, HeartHandshake } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <HeartHandshake className="navbar-logo-icon" />
          <span className="navbar-logo-text">Earnest Domiciliary Care</span>
        </Link>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          <Link 
            href="/" 
            className={`navbar-link ${isActive('/') ? 'navbar-link-active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`navbar-link ${isActive('/about') ? 'navbar-link-active' : ''}`}
          >
            About Us
          </Link>
          <Link 
            href="/services" 
            className={`navbar-link ${isActive('/services') ? 'navbar-link-active' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/our-care" 
            className={`navbar-link ${isActive('/our-care') ? 'navbar-link-active' : ''}`}
          >
            Our Care
          </Link>
          <Link 
            href="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'navbar-link-active' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;