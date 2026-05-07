type PlayStoreButtonProps = {
  className?: string;
};

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.app.android.notif';

export function PlayStoreButton({ className = '' }: PlayStoreButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-3 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 ${className}`}
      href={playStoreUrl}
      rel="noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.4 2.7c-.3.3-.5.8-.5 1.4v15.8c0 .6.2 1.1.5 1.4l8.9-9.3-8.9-9.3Zm10 8.1 2.5-2.6L6.8 2.5l7.6 8.3Zm2.5 5 2.8-1.6c1.1-.6 1.1-1.8 0-2.4l-2.8-1.6-2.8 2.8 2.8 2.8ZM6.8 21.5l10.1-5.7-2.5-2.6-7.6 8.3Z" />
      </svg>
      Get it on Google Play
    </a>
  );
}
