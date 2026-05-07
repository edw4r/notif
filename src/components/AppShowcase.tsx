const screens = [
  {
    title: 'Readout queue',
    subtitle: 'Notifications become private spoken updates.',
    accent: 'bg-signal'
  },
  {
    title: 'Per-app controls',
    subtitle: 'Choose which apps can read or stay muted.',
    accent: 'bg-leaf'
  },
  {
    title: 'Quiet settings',
    subtitle: 'Tune volume, limits, and readout behavior.',
    accent: 'bg-ember'
  }
];

export function AppShowcase() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {screens.map((screen) => (
        <div
          className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-phone"
          key={screen.title}
        >
          <div className="screen-grid min-h-[440px] rounded-[1.5rem] bg-white p-5">
            <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-slate-300" />
            <div className={`mb-8 h-12 w-12 rounded-2xl ${screen.accent}`} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Notif
            </p>
            <h3 className="mt-3 text-2xl font-bold text-ink">{screen.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{screen.subtitle}</p>
            <div className="mt-8 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="h-3 w-24 rounded-full bg-slate-300" />
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-200" />
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-lg ${screen.accent}`} />
                  <div className="flex-1">
                    <div className="h-3 w-28 rounded-full bg-slate-300" />
                    <div className="mt-2 h-2 w-20 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-slate-900 p-4 text-white">
                <div className="h-2 w-full rounded-full bg-white/30" />
                <div className="mt-3 h-2 w-3/4 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
