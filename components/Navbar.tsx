'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-[1200px] mx-auto">
        <Link href="/" className="font-[var(--font-playfair-display)] text-2xl text-accent-gold uppercase tracking-widest hover:opacity-80 transition-opacity">
          The Golden Fork
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-semibold text-xs tracking-[0.1em] uppercase ${isActive('/') ? 'text-accent-gold border-b-2 border-accent-gold pb-1' : 'text-on-surface hover:text-accent-gold'} transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`font-semibold text-xs tracking-[0.1em] uppercase ${isActive('/menu') ? 'text-accent-gold border-b-2 border-accent-gold pb-1' : 'text-on-surface hover:text-accent-gold'} transition-colors duration-300`}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className={`font-semibold text-xs tracking-[0.1em] uppercase ${isActive('/about') ? 'text-accent-gold border-b-2 border-accent-gold pb-1' : 'text-on-surface hover:text-accent-gold'} transition-colors duration-300`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`font-semibold text-xs tracking-[0.1em] uppercase ${isActive('/contact') ? 'text-accent-gold border-b-2 border-accent-gold pb-1' : 'text-on-surface hover:text-accent-gold'} transition-colors duration-300`}
          >
            Contact
          </Link>
        </div>
        <Link href="/contact" className="hidden md:block bg-cta-burgundy text-surface-cream font-semibold text-xs tracking-[0.1em] uppercase px-6 py-3 rounded hover:brightness-90 transition-all duration-200 shadow-sm active:scale-95">
          Reserve a Table
        </Link>
        <button className="md:hidden text-accent-gold p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
