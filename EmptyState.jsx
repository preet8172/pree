import { Link } from 'react-router-dom';

export default function EmptyState({
  title = 'No events found',
  message = 'Try a different search, or clear your filters.',
  actionLabel,
  actionTo,
  onAction,
}) {
  return (
    <div className="animate-zoomIn flex flex-col items-center justify-center rounded-3xl surface px-6 py-16 text-center">
      <svg width="120" height="96" viewBox="0 0 120 96" fill="none" className="mb-6">
        <rect x="14" y="20" width="92" height="66" rx="10" fill="var(--bg)" stroke="var(--border)" strokeWidth="2" />
        <rect x="14" y="20" width="92" height="20" rx="10" fill="color-mix(in srgb, var(--color-primary) 16%, transparent)" />
        <circle cx="30" cy="30" r="3" fill="var(--color-primary)" />
        <circle cx="42" cy="30" r="3" fill="var(--color-accent)" />
        <line x1="30" y1="52" x2="90" y2="52" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="64" x2="70" y2="64" stroke="var(--border)" strokeWidth="3" strokeLinecap="round" />
        <g className="float-slow">
          <circle cx="96" cy="14" r="6" fill="color-mix(in srgb, var(--color-secondary) 45%, transparent)" />
        </g>
        <g className="float-slower">
          <circle cx="8" cy="70" r="5" fill="color-mix(in srgb, var(--color-accent) 45%, transparent)" />
        </g>
      </svg>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-soft">{message}</p>
      {(actionTo || onAction) && actionLabel && (
        actionTo ? (
          <Link
            to={actionTo}
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' }}
          >
            {actionLabel}
          </Link>
        ) : (
          <button
            onClick={onAction}
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' }}
          >
            {actionLabel}
          </button>
        )
      )}
    </div>
  );
}
