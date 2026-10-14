import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, STATUSES } from '../utils/constants';
import { validateField, validateEventForm, DESCRIPTION_LIMITS } from '../utils/validation';
import { formatDate, formatTime } from '../utils/dateFormat';

const EMPTY = {
  name: '',
  organizer: '',
  category: '',
  date: '',
  time: '',
  venue: '',
  banner: '',
  description: '',
  status: 'Upcoming',
};

export default function EventForm({ initialValues, existingEvents, onSubmit, submitLabel = 'Publish event' }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({ ...EMPTY, ...initialValues });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleChange = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, next[field], next, existingEvents) }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field], values, existingEvents) }));
  };

  const handleReset = () => {
    setValues({ ...EMPTY, ...initialValues });
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateEventForm(values, existingEvents);
    setErrors(formErrors);
    setTouched(Object.fromEntries(Object.keys(EMPTY).map((k) => [k, true])));
    if (Object.keys(formErrors).length > 0) return;

    setSaving(true);
    await new Promise((r) => setTimeout(r, 350)); // let the "saving" state read as real
    onSubmit(values);
    setSaving(false);
  };

  const inputClass = (field) =>
    `surface w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-shadow placeholder:text-faint focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-primary)_18%,transparent)] ${
      errors[field] && touched[field] ? 'border-[var(--color-danger)]!' : ''
    }`;

  const descLength = values.description.trim().length;

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="animate-slideUp space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Event name" error={touched.name && errors.name} required>
            <input
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Frontend Systems Summit"
              className={inputClass('name')}
            />
          </Field>
          <Field label="Organizer" error={touched.organizer && errors.organizer} required>
            <input
              type="text"
              value={values.organizer}
              onChange={handleChange('organizer')}
              onBlur={handleBlur('organizer')}
              placeholder="Codentrixa Labs"
              className={inputClass('organizer')}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Category" error={touched.category && errors.category} required>
            <select value={values.category} onChange={handleChange('category')} onBlur={handleBlur('category')} className={inputClass('category')}>
              <option value="">Choose one</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Date" error={touched.date && errors.date} required>
            <input type="date" value={values.date} onChange={handleChange('date')} onBlur={handleBlur('date')} className={inputClass('date')} />
          </Field>
          <Field label="Time" error={touched.time && errors.time} required>
            <input type="time" value={values.time} onChange={handleChange('time')} onBlur={handleBlur('time')} className={inputClass('time')} />
          </Field>
        </div>

        <Field label="Venue" error={touched.venue && errors.venue} required>
          <input
            type="text"
            value={values.venue}
            onChange={handleChange('venue')}
            onBlur={handleBlur('venue')}
            placeholder="Grand Convention Centre, Rajkot"
            className={inputClass('venue')}
          />
        </Field>

        <Field label="Banner image URL" error={touched.banner && errors.banner} hint="Optional — leave blank to use a default image.">
          <input
            type="url"
            value={values.banner}
            onChange={handleChange('banner')}
            onBlur={handleBlur('banner')}
            placeholder="https://images.unsplash.com/…"
            className={inputClass('banner')}
          />
        </Field>

        <Field
          label="Description"
          error={touched.description && errors.description}
          required
          hint={`${descLength}/${DESCRIPTION_LIMITS.max} characters (min ${DESCRIPTION_LIMITS.min})`}
        >
          <textarea
            value={values.description}
            onChange={handleChange('description')}
            onBlur={handleBlur('description')}
            rows={5}
            maxLength={DESCRIPTION_LIMITS.max}
            placeholder="What should people know before they show up?"
            className={`${inputClass('description')} resize-none`}
          />
        </Field>

        <Field label="Status" error={touched.status && errors.status} required>
          <div className="flex gap-2">
            {STATUSES.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setValues((v) => ({ ...v, status: s }))}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                  values.status === s ? 'border-transparent text-white' : 'surface text-soft'
                }`}
                style={values.status === s ? { background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' } : undefined}
              >
                {s}
              </button>
            ))}
          </div>
        </Field>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="btn-ripple inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            style={{ background: 'linear-gradient(120deg, var(--color-primary), var(--color-accent))' }}
          >
            {saving ? 'Saving…' : submitLabel}
          </button>
          <button
            type="button"
            onClick={() => setShowPreview((v) => !v)}
            className="rounded-xl surface px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--bg)]"
          >
            {showPreview ? 'Hide preview' : 'Preview'}
          </button>
          <button type="button" onClick={handleReset} className="rounded-xl px-5 py-2.5 text-sm font-semibold text-soft transition-colors hover:text-[var(--color-danger)]">
            Reset
          </button>
          <button type="button" onClick={() => navigate(-1)} className="ml-auto rounded-xl px-5 py-2.5 text-sm font-semibold text-soft transition-colors hover:text-[var(--ink)]">
            Cancel
          </button>
        </div>
      </div>

      {showPreview && (
        <aside className="animate-zoomIn h-fit lg:sticky lg:top-24">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-faint">Live preview</p>
          <div className="surface overflow-hidden rounded-2xl">
            <div className="h-32 w-full overflow-hidden bg-[var(--bg)]">
              {values.banner ? (
                <img src={values.banner} alt="" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-faint">No banner set</div>
              )}
            </div>
            <div className="p-4">
              <p className="font-display text-sm font-semibold line-clamp-1">{values.name || 'Untitled event'}</p>
              <p className="mt-0.5 text-xs text-soft line-clamp-1">by {values.organizer || 'Unknown organizer'}</p>
              <p className="mt-2 text-xs text-faint">
                {values.date ? formatDate(values.date) : 'No date'} {values.time ? `· ${formatTime(values.time)}` : ''}
              </p>
              <p className="mt-2 text-xs text-soft line-clamp-3">{values.description || 'No description yet.'}</p>
            </div>
          </div>
        </aside>
      )}
    </form>
  );
}

function Field({ label, error, hint, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-sm font-medium">
        {label}
        {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
      </span>
      {children}
      {error ? (
        <span className="mt-1 flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--color-danger)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="12" cy="12" r="10" /><path d="M12 8v5M12 16h.01" /></svg>
          {error}
        </span>
      ) : hint ? (
        <span className="mt-1 block text-xs text-faint">{hint}</span>
      ) : null}
    </label>
  );
}
