import { CATEGORIES } from '../utils/constants';

const COLORS = [
  'var(--color-primary)',
  'var(--color-accent)',
  'var(--color-secondary)',
  'var(--color-success)',
  'var(--color-warning)',
];

export default function ActivityPulse({ events }) {
  const counts = CATEGORIES.map((cat) => events.filter((e) => e.category === cat).length);
  const max = Math.max(1, ...counts);

  return (
    <div className="surface rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold">Events by category</h3>
        <span className="text-xs text-faint">{events.length} total</span>
      </div>
      <div className="mt-6 flex h-36 items-end gap-3">
        {CATEGORIES.map((cat, i) => {
          const value = counts[i];
          const heightPct = (value / max) * 100;
          return (
            <div key={cat} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-xs font-semibold text-soft">{value}</span>
              <div className="flex h-24 w-full items-end overflow-hidden rounded-md" style={{ background: 'var(--bg)' }}>
                <div
                  className="w-full origin-bottom rounded-md"
                  style={{
                    height: `${Math.max(heightPct, value > 0 ? 8 : 0)}%`,
                    background: COLORS[i % COLORS.length],
                    animation: 'barGrow 0.6s cubic-bezier(0.16,1,0.3,1) both',
                    animationDelay: `${i * 60}ms`,
                  }}
                />
              </div>
              <span className="text-center text-[10px] leading-tight text-faint">{cat}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
