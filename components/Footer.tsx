import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-background-charcoal border-t border-outline-variant flex flex-col items-center gap-6 max-w-[1200px] mx-auto px-8">
      <Link href="/" className="font-[var(--font-playfair-display)] text-2xl text-accent-gold uppercase tracking-widest">
        The Golden Fork
      </Link>
      <nav className="flex flex-wrap justify-center gap-8 my-4">
        <Link href="/" className="font-semibold text-xs tracking-[0.1em] uppercase text-accent-gold">
          Home
        </Link>
        <Link href="/menu" className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-accent-gold transition-colors">
          Menu
        </Link>
        <Link href="/about" className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-accent-gold transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-accent-gold transition-colors">
          Contact
        </Link>
      </nav>
      <p className="font-[var(--font-inter)] text-sm text-on-surface-variant/60 mt-4">
        © 2024 The Golden Fork. All rights reserved.
      </p>
    </footer>
  );
}
