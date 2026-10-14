const STYLES = {
  Upcoming: 'bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] text-[var(--color-primary)] border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]',
  Completed: 'bg-[color-mix(in_srgb,var(--color-success)_14%,transparent)] text-[var(--color-success)] border-[color-mix(in_srgb,var(--color-success)_30%,transparent)]',
};

export default function StatusBadge({ status, className = '' }) {
  const style = STYLES[status] || STYLES.Upcoming;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${style} ${className}`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: status === 'Completed' ? 'var(--color-success)' : 'var(--color-primary)', animation: status === 'Upcoming' ? 'pulseDot 1.8s ease-in-out infinite' : 'none' }}
      />
      {status}
    </span>
  );
}
