import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/events', label: 'Events' },
  { to: '/add', label: 'Add Event' },
  { to: '/about', label: 'About' },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive ? 'text-[var(--color-primary)]' : 'text-soft hover:text-[var(--ink)]'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow ${scrolled ? 'shadow-[0_8px_24px_-16px_rgba(15,23,42,0.35)]' : ''}`}
    >
      <div className="glass border-b" style={{ borderColor: 'var(--border)' }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="3" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="m9 16 2 2 4-4" />
              </svg>
            </span>
            Event<span className="gradient-text">Hub</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg surface transition-transform hover:scale-105"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" /></svg>
              )}
            </button>
            <Link
              to="/add"
              className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
              style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' }}
            >
              + Add Event
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg surface md:hidden"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="animate-slideUp flex flex-col gap-1 border-t px-5 py-3 md:hidden" style={{ borderColor: 'var(--border)' }}>
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? 'text-[var(--color-primary)] bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]' : 'text-soft'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
