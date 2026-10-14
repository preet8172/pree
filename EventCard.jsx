import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import { formatDate, formatTime } from '../utils/dateFormat';
import { useEvents } from '../context/EventContext';

const FALLBACK_BANNER =
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=70';

export default function EventCard({ event, onDeleteRequest }) {
  const { favorites, toggleFavorite, duplicateEvent } = useEvents();
  const isFav = favorites.includes(event.id);

  return (
    <article className="hover-lift surface group flex flex-col overflow-hidden rounded-2xl">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={event.banner || FALLBACK_BANNER}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_BANNER;
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
        <div className="absolute left-3 top-3">
          <StatusBadge status={event.status} className="!bg-white/90 !border-white/60 backdrop-blur" />
        </div>
        <button
          onClick={() => toggleFavorite(event.id)}
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-transform hover:scale-110"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={isFav ? 'var(--color-warning)' : 'none'}
            stroke={isFav ? 'var(--color-warning)' : '#0F172A'}
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
            {event.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold leading-snug line-clamp-1">{event.name}</h3>
        <p className="mt-1 text-sm text-soft line-clamp-1">by {event.organizer}</p>

        <div className="mt-3 space-y-1.5 text-xs text-soft">
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
            {formatDate(event.date)} · {formatTime(event.time)}
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            <span className="line-clamp-1">{event.venue}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
          <Link
            to={`/event/${event.id}`}
            className="flex-1 rounded-lg py-2 text-center text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' }}
          >
            View
          </Link>
          <Link
            to={`/edit/${event.id}`}
            aria-label="Edit event"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-soft transition-colors hover:text-[var(--color-primary)]"
            style={{ border: '1px solid var(--border)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
          </Link>
          <button
            onClick={() => duplicateEvent(event.id)}
            aria-label="Duplicate event"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-soft transition-colors hover:text-[var(--color-secondary)]"
            style={{ border: '1px solid var(--border)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </button>
          <button
            onClick={() => onDeleteRequest(event)}
            aria-label="Delete event"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-soft transition-colors hover:text-[var(--color-danger)]"
            style={{ border: '1px solid var(--border)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /></svg>
          </button>
        </div>
      </div>
    </article>
  );
}
