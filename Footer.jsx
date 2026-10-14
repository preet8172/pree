import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Dashboard' },
  { to: '/events', label: 'Events' },
  { to: '/add', label: 'Add Event' },
  { to: '/about', label: 'About' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ) },
  { label: 'Twitter', href: 'https://twitter.com', icon: (
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
  ) },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <>
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
      <path d="M10 21v-7a4 4 0 0 1 8 0v7M10 9v12" />
    </>
  ) },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
              Event<span className="gradient-text">Hub</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-soft">
              Create, manage, organize, and celebrate every event from one calm, premium dashboard.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-faint">Navigate</h4>
              <ul className="mt-3 space-y-2">
                {LINKS.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-soft transition-colors hover:text-[var(--color-primary)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-faint">Connect</h4>
              <div className="mt-3 flex gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg surface text-soft transition-colors hover:text-[var(--color-primary)]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-faint sm:flex-row"
          style={{ borderColor: 'var(--border)' }}
        >
          <span>© {new Date().getFullYear()} EventHub. All rights reserved.</span>
          <span>Made with ❤️ using React</span>
        </div>
      </div>
    </footer>
  );
}
