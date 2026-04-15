import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reqs = [
  { title: 'Business Registration', desc: 'CA LLC or Corporation. Articles of Incorporation or Organization required before anything else.', tag: 'All applicants', accent: true },
  { title: 'DMV Pull Notice (EPN)', desc: 'Requester Code is mandatory in the CPUC packet. Missing it = automatic rejection.', tag: 'All applicants', accent: true },
  { title: 'Commercial Vehicle Registration', desc: 'Every fleet vehicle must carry commercial DMV registration before the application is filed.', tag: 'All applicants', accent: true },
  { title: 'CA Carrier ID (CA#)', desc: 'Vehicles seating 11 or more need a CHP safety inspection and CA# before filing.', tag: '11+ passengers', accent: false },
  { title: 'Public Liability Insurance', desc: 'Required pre-submission. Binding to a vehicle before filing significantly reduces premiums.', tag: 'All applicants', accent: true },
  { title: "Workers' Compensation", desc: "Required if you have employees. Must be documented in the CPUC filing packet.", tag: 'With employees', accent: false },
  { title: 'CPUC Application + Fee', desc: '$1,000 standard TCP or $1,500 Class A. Nonrefundable. Must be complete and accurate.', tag: 'All applicants', accent: true },
  { title: 'CSAT Enrollment', desc: 'Post-approval mandatory enrollment in drug/alcohol testing for vehicles carrying 16+ passengers.', tag: '16+ passengers', accent: false },
  { title: 'TCP Number Display', desc: 'TCP number must appear on all vehicles, business cards, and advertising materials after approval.', tag: 'Post-approval', accent: true },
];

export default function Requirements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="requirements" className="py-24 md:py-32 px-6 bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[0.65rem] font-mono font-medium text-[#E8D5A3] tracking-widest uppercase mb-3"
            >
              / Requirements
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#F5F2ED] leading-tight tracking-tight"
            >
              What the<br />State Requires
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-[#B0AAA4] max-w-xs leading-relaxed font-light md:text-right"
          >
            Every item is a rejection point. We ensure your packet arrives at the CPUC with nothing missing.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#1A1A1A]">
          {reqs.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-glow group bg-[#0C0C0C] hover:bg-[#141414] transition-colors duration-300 p-6 border border-transparent"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="text-sm font-semibold text-[#F5F2ED] leading-snug tracking-tight">{r.title}</h4>
                <span className={`flex-shrink-0 text-[0.58rem] font-mono font-medium px-2 py-1 rounded-full border tracking-wider whitespace-nowrap ${
                  r.accent
                    ? 'text-[#E8D5A3] border-[#E8D5A3]/20 bg-[#E8D5A3]/5'
                    : 'text-[#4ADE80] border-[#4ADE80]/20 bg-[#4ADE80]/5'
                }`}>
                  {r.tag}
                </span>
              </div>
              <p className="text-xs text-[#B0AAA4] leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}