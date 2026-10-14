import { FILTER_OPTIONS } from '../utils/constants';

export default function FilterBar({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events">
      {FILTER_OPTIONS.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={active}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
              active
                ? 'border-transparent text-white shadow-sm'
                : 'surface text-soft hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
            }`}
            style={active ? { background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' } : undefined}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
