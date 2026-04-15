const items = [
  'Secretary of State', '✦', 'DMV Enrollment', '✦',
  'CHP Inspection', '✦', 'CPUC Filing', '✦',
  'Insurance Binding', '✦', 'CSAT Enrollment', '✦',
  'TCP Compliance', '✦', '30–60 Day Approval', '✦',
  'Secretary of State', '✦', 'DMV Enrollment', '✦',
  'CHP Inspection', '✦', 'CPUC Filing', '✦',
  'Insurance Binding', '✦', 'CSAT Enrollment', '✦',
  'TCP Compliance', '✦', '30–60 Day Approval', '✦',
];

export default function Marquee() {
  return (
    <div className="border-y border-[#1A1A1A] py-4 overflow-hidden bg-[#0C0C0C]">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className={`mx-5 text-xs font-medium tracking-widest uppercase ${
            item === '✦' ? 'text-[#E8D5A3]' : 'text-[#888888]'
          }`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}