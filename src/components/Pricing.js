import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const plans = [
  {
    name: 'Standard TCP',
    tag: 'Most common',
    fee: '$1,000',
    feeLabel: 'state filing fee',
    desc: 'General charter-party transportation — airport runs, events, corporate transport, private hire.',
    items: ['Business registration filing', 'DMV EPN enrollment', 'Insurance coordination', 'CPUC packet prep & filing', 'Application tracking'],
    featured: false,
  },
  {
    name: 'Class A Certificate',
    tag: 'Includes sightseeing',
    fee: '$1,500',
    feeLabel: 'state filing fee',
    desc: 'Everything in Standard, plus full authorization for sightseeing tour operations in California.',
    items: ['Everything in Standard', 'Sightseeing tour authorization', 'CSAT enrollment support', 'Full compliance review', 'Post-approval walkthrough'],
    featured: true,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <br /> <br /> 
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[0.65rem] font-mono font-medium text-[#E8D5A3] tracking-widest uppercase mb-3">/ Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F2ED] tracking-tight mb-3">Two Permit Types</h2>
          <p className="text-sm text-[#B0AAA4] max-w-sm mx-auto font-light leading-relaxed">
            State fees paid directly to the CPUC. Our service fee is quoted separately — clearly — before you commit.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`card-glow relative rounded-3xl p-8 border flex flex-col ${
                p.featured
                  ? 'bg-[#F5F2ED] border-[#F5F2ED] text-[#0C0C0C]'
                  : 'bg-[#141414] border-[#2A2A2A] text-[#F5F2ED]'
              }`}
            >
              <span className={`text-[0.6rem] font-mono font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border self-start mb-6 ${
                p.featured
                  ? 'border-[#0C0C0C]/15 bg-[#0C0C0C]/8 text-[#0C0C0C]'
                  : 'border-[#E8D5A3]/20 bg-[#E8D5A3]/5 text-[#E8D5A3]'
              }`}>
                {p.tag}
              </span>
              <h3 className={`font-display text-2xl font-bold tracking-tight mb-2 ${p.featured ? 'text-[#0C0C0C]' : 'text-[#F5F2ED]'}`}>
                {p.name}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 font-light ${p.featured ? 'text-[#1A1A1A]' : 'text-[#B0AAA4]'}`}>
                {p.desc}
              </p>
              <div className="mb-6">
                <span className={`font-display text-5xl font-bold tracking-tight ${p.featured ? 'text-[#0C0C0C]' : 'text-[#E8D5A3]'}`}>
                  {p.fee}
                </span>
                <span className={`text-xs ml-2 font-light ${p.featured ? 'text-[#0C0C0C]/50' : 'text-[#A0A0A0]'}`}>
                  {p.feeLabel}
                </span>
                <p className={`text-[0.65rem] mt-1 font-mono tracking-wider ${p.featured ? 'text-[#0C0C0C]/30' : 'text-[#A0A0A0]/60'}`}>
                  Nonrefundable · paid to CPUC
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {p.items.map((item) => (
                  <li key={item} className={`flex items-center gap-2.5 text-sm ${p.featured ? 'text-[#1A1A1A]' : 'text-[#C0BAB4]'}`}>
                    <span className={`text-xs flex-shrink-0 ${p.featured ? 'text-[#0C0C0C]' : 'text-[#E8D5A3]'}`}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block text-center text-sm font-bold py-4 rounded-2xl no-underline transition-all duration-200 hover:scale-105 ${
                  p.featured
                    ? 'bg-[#0C0C0C] text-[#F5F2ED] hover:bg-[#1A1A1A]'
                    : 'bg-[#E8D5A3] text-[#0C0C0C] hover:bg-[#F0E4B8]'
                }`}>
                Get started →
              </a>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs text-[#A0A0A0]/70 mt-6 font-light font-mono"
        >
          Our service fee is separate and explained in full before you commit to anything.
        </motion.p>
      </div>
    </section>
  );
}