const screenshots = [
  {
    src: '/assets/notif-settings.png',
    alt: 'Notif settings screen with master readout controls, headphone and speaker toggles, message length, and readout volume.',
    label: 'Settings'
  },
  {
    src: '/assets/notif-apps.png',
    alt: 'Notif apps screen showing per-app read and mute controls for Messages.',
    label: 'Per-app controls'
  }
];

type AppShowcaseProps = {
  basePath: string;
};

export function AppShowcase({ basePath }: AppShowcaseProps) {
  return (
    <div className="grid items-end gap-5 sm:grid-cols-2">
      {screenshots.map((screen, index) => (
        <figure
          className={`mx-auto w-full max-w-[300px] ${index === 1 ? 'sm:translate-y-10' : ''}`}
          key={screen.src}
        >
          <div className="rounded-[2.4rem] bg-slate-950 p-2.5 shadow-phone">
            <img
              alt={screen.alt}
              className="block h-auto w-full rounded-[2rem]"
              height="2570"
              loading={index === 0 ? 'eager' : 'lazy'}
              src={`${basePath}${screen.src.replace(/^\//, '')}`}
              width="1224"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm font-semibold text-slate-600">
            {screen.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
