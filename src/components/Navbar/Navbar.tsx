import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Design Lab', href: '#designer' },
    { label: 'Collection', href: '#collection' },
    { label: 'Bulk Orders', href: '#bulk' },
    { label: 'Lookbook', href: '#lookbook' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="#" className="flex flex-col tracking-tight group select-none">
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-widest text-zinc-950 uppercase transition-colors group-hover:text-zinc-700">
            Damawii Vestii
          </span>
          <span className="text-[10px] tracking-[0.3em] text-zinc-400 font-semibold uppercase -mt-1">
            Custom Atelier
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-800 active:scale-95 transition-all shadow-sm"
          >
            Customize
          </button>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 rounded-lg p-2 text-zinc-900 hover:bg-zinc-100 focus:outline-none md:hidden"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`h-0.5 w-6 bg-zinc-950 rounded-full transition-all duration-300 ease-in-out origin-center ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-zinc-950 rounded-full transition-all duration-200 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-zinc-950 rounded-full transition-all duration-300 ease-in-out origin-center ${
                isOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-zinc-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-down Panel */}
      <div
        className={`absolute top-full left-0 w-full z-40 bg-white border-b border-zinc-200 shadow-xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? 'max-h-[480px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          <nav className="flex flex-col space-y-3 pb-6 border-b border-zinc-100 text-lg font-medium text-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              className="w-full rounded-xl border border-zinc-300 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Start Customizing
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};