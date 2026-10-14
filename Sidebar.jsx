import { Link } from 'react-router-dom';
import { formatDate, isToday } from '../utils/dateFormat';

const QUICK_ACTIONS = [
  { to: '/add', label: 'Add a new event', icon: 'plus' },
  { to: '/events?filter=Upcoming', label: 'View upcoming', icon: 'calendar' },
  { to: '/events?sort=latest', label: 'Latest additions', icon: 'clock' },
];

const ICONS = {
  plus: <path d="M12 5v14M5 12h14" />,
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

export default function Sidebar({ events }) {
  const todays = events.filter((e) => isToday(e.date));
  const recent = [...events]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <aside className="animate-slideUp space-y-5">
      <div className="surface rounded-2xl p-5">
        <h3 className="font-display text-sm font-semibold">Quick actions</h3>
        <div className="mt-3 space-y-1.5">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-soft transition-colors hover:bg-[var(--bg)] hover:text-[var(--color-primary)]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[action.icon]}
              </svg>
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="surface rounded-2xl p-5">
        <h3 className="font-display text-sm font-semibold">Today</h3>
        {todays.length === 0 ? (
          <p className="mt-2 text-sm text-faint">Nothing scheduled for today.</p>
        ) : (
          <ul className="mt-3 space-y-2.5">
            {todays.map((e) => (
              <li key={e.id}>
                <Link to={`/event/${e.id}`} className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-[var(--bg)]">
                  <span className="font-medium line-clamp-1">{e.name}</span>
                  <span className="block text-xs text-faint">{e.time}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="surface rounded-2xl p-5">
        <h3 className="font-display text-sm font-semibold">Recently added</h3>
        <ul className="mt-3 space-y-2.5">
          {recent.length === 0 && <p className="text-sm text-faint">No events yet.</p>}
          {recent.map((e) => (
            <li key={e.id}>
              <Link to={`/event/${e.id}`} className="flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-[var(--bg)]">
                <span className="line-clamp-1 font-medium">{e.name}</span>
                <span className="shrink-0 text-xs text-faint">{formatDate(e.date).split(',')[0]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
