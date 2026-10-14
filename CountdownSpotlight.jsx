import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountdown, formatDate, formatTime } from '../utils/dateFormat';

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hrs' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Sec' },
];

export default function CountdownSpotlight({ event }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!event) {
    return (
      <div className="relative overflow-hidden rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent) 60%, var(--color-secondary))' }}>
        <p className="font-display text-xl font-semibold">No upcoming events — yet.</p>
        <p className="mt-1 text-white/80 text-sm">Add your next event and it'll take the spotlight here.</p>
        <Link to="/add" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/25">
          + Add an event
        </Link>
      </div>
    );
  }

  const countdown = getCountdown(event.date, event.time);

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6 text-white sm:p-8"
      style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent) 60%, var(--color-secondary))' }}
    >
      <div key={tick} className="float-slow pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="float-slower pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" style={{ animation: 'pulseDot 1.6s ease-in-out infinite' }} />
            Up next
          </span>
          <h2 className="font-display mt-3 text-2xl font-bold leading-tight sm:text-3xl">{event.name}</h2>
          <p className="mt-2 text-sm text-white/85">
            {formatDate(event.date)} · {formatTime(event.time)} · {event.venue}
          </p>
          <Link
            to={`/event/${event.id}`}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ color: 'var(--color-primary)' }}
          >
            View details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>

        <div className="flex gap-3">
          {UNITS.map((u) => (
            <div key={u.key} className="flex w-16 flex-col items-center rounded-2xl bg-white/15 py-3 backdrop-blur">
              <span className="font-display text-2xl font-bold tabular-nums">
                {String(countdown[u.key]).padStart(2, '0')}
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-wide text-white/75">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
