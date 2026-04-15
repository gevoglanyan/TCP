const stats = [
  { value: '30–60', label: 'Days to CPUC approval', sub: 'From first contact' },
  { value: '500+', label: 'Permits successfully filed', sub: 'Across California' },
  { value: '4', label: 'State agencies coordinated', sub: 'SOS, DMV, CHP, CPUC' },
  { value: '100%', label: 'Compliance verified', sub: 'Before we submit' },
];

export default function Stats() {
  return (
    <section className="bg-surface-alt border-b border-ink/8">
      <div className="max-w-5xl mx-auto px-6 md:px-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink/8">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <div className="text-display text-3xl font-semibold text-ink tracking-tight leading-none">{s.value}</div>
              <div className="text-xs font-semibold text-ink mt-2 leading-snug">{s.label}</div>
              <div className="text-xs text-ink-faint mt-0.5 font-light">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}