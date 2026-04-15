import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Process', href: '/process' },
    { label: 'Requirements', href: '/requirements' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-[#2A2A2A]' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-bold text-[#F0EDE8] no-underline tracking-tight">
            TCP<span className="text-[#E8D5A3]">Fast</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.label} to={l.href}
                className="link-line text-sm font-medium text-[#888888] hover:text-[#F0EDE8] no-underline transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+3238415151"
              className="text-sm font-medium text-[#888888] hover:text-[#F0EDE8] no-underline transition-colors">
              (323) 841-5151
            </a>
            <Link to="/contact"
              className="text-sm font-bold bg-[#E8D5A3] hover:bg-[#F0E4B8] text-[#0C0C0C] px-5 py-2.5 rounded-full no-underline transition-all duration-200 hover:scale-105">
              Get Started
            </Link>
          </div>

          <button onClick={() => setOpen(!open)}
            className="flex md:hidden w-10 h-10 items-center justify-center bg-transparent cursor-pointer border-none">
            <div className="flex flex-col gap-1.5 w-4">
              <span className={`block h-px bg-[#F0EDE8] transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-[#F0EDE8] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-[#F0EDE8] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#141414] border-b border-[#2A2A2A] px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link key={l.label} to={l.href} onClick={() => setOpen(false)}
              className="py-3.5 text-base font-medium text-[#F0EDE8] no-underline border-b border-[#1A1A1A] last:border-0">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}