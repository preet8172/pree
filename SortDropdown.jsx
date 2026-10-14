import { SORT_OPTIONS } from '../utils/constants';

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort events"
        className="surface cursor-pointer appearance-none rounded-xl py-2.5 pl-4 pr-9 text-sm font-medium outline-none transition-shadow focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-faint"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
