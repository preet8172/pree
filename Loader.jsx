export default function Loader({ label = 'Loading', full = false }) {
  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-10 w-10">
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: 'var(--color-primary)',
            borderRightColor: 'var(--color-accent)',
            animation: 'spinSoft 0.8s linear infinite',
          }}
        />
        <div
          className="absolute inset-2 rounded-full"
          style={{ background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)' }}
        />
      </div>
      <span className="text-sm font-medium text-soft">{label}…</span>
    </div>
  );

  if (!full) return spinner;

  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">{spinner}</div>
  );
}

export function CardSkeleton() {
  return (
    <div className="surface rounded-2xl overflow-hidden">
      <div className="skeleton h-40 w-full" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="flex gap-2 pt-2">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
