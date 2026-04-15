import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const filingServices = [
  { name: 'Quarterly Filing', desc: 'Stay compliant with quarterly CPUC filing requirements.' },
  { name: 'Yearly Filing', desc: 'Annual filing to keep your TCP active and in good standing.' },
];

const additionalServices = [
  { name: 'TCP Renewal', desc: 'Renew your existing Transportation Charter Permit before it expires.' },
  { name: 'TCP Transfer', desc: 'Transfer your TCP to a new owner or business entity.' },
  { name: 'Corporation Formation', desc: 'We handle the full CA Secretary of State registration for your LLC or Corporation.' },
  { name: 'EIN Number', desc: 'Obtain your Employer Identification Number (EIN) directly from the IRS.' },
  { name: 'City Permit', desc: 'City-level operating permits required by certain municipalities in California.' },
  { name: 'Airport Permit', desc: 'Authorization to pick up and drop off passengers at California airports.' },
  { name: 'Airport Permit Renewal', desc: 'Renew your existing airport operating permit before expiration.' },
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
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EDE8] tracking-tight mb-3">Everything You Need</h2>
          <p className="text-sm text-[#B0AAA4] max-w-sm font-light leading-relaxed">
            From getting your first TCP to staying compliant year after year — we handle it all.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[0.65rem] font-mono font-medium text-[#E8D5A3] tracking-widest uppercase mb-5"
        >
          TCP Permits
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-16">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`card-glow relative rounded-3xl p-8 border flex flex-col ${
                p.featured
                  ? 'bg-[#F0EDE8] border-[#F0EDE8] text-[#0C0C0C]'
                  : 'bg-[#141414] border-[#2A2A2A] text-[#F0EDE8]'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[0.6rem] font-mono font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border ${
                  p.featured
                    ? 'border-[#0C0C0C]/15 bg-[#0C0C0C]/8 text-[#0C0C0C]'
                    : 'border-[#E8D5A3]/20 bg-[#E8D5A3]/5 text-[#E8D5A3]'
                }`}>
                  {p.tag}
                </span>
              </div>
              <h3 className={`font-display text-2xl font-bold tracking-tight mb-2 ${p.featured ? 'text-[#0C0C0C]' : 'text-[#F0EDE8]'}`}>
                {p.name}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 font-light ${p.featured ? 'text-[#0C0C0C]/60' : 'text-[#B0AAA4]'}`}>
                {p.desc}
              </p>
              <div className="mb-6">
                <span className={`font-display text-5xl font-bold tracking-tight ${p.featured ? 'text-[#0C0C0C]' : 'text-[#E8D5A3]'}`}>
                  {p.fee}
                </span>
                <span className={`text-xs ml-2 font-light ${p.featured ? 'text-[#0C0C0C]/40' : 'text-[#888888]'}`}>
                  {p.feeLabel}
                </span>
                <p className={`text-[0.65rem] mt-1 font-mono tracking-wider ${p.featured ? 'text-[#0C0C0C]/30' : 'text-[#888888]/60'}`}>
                  Nonrefundable · paid to CPUC
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {p.items.map((item) => (
                  <li key={item} className={`flex items-center gap-2.5 text-sm ${p.featured ? 'text-[#0C0C0C]/70' : 'text-[#C0BAB4]'}`}>
                    <span className={`text-xs flex-shrink-0 ${p.featured ? 'text-[#0C0C0C]' : 'text-[#E8D5A3]'}`}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className={`block text-center text-sm font-bold py-4 rounded-2xl no-underline transition-all duration-200 hover:scale-105 ${
                  p.featured
                    ? 'bg-[#0C0C0C] text-[#F0EDE8] hover:bg-[#1A1A1A]'
                    : 'bg-[#E8D5A3] text-[#0C0C0C] hover:bg-[#F0E4B8]'
                }`}>
                Get started →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Filing Services */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[0.65rem] font-mono font-medium text-[#E8D5A3] tracking-widest uppercase mb-5"
        >
          Filing Services
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
          {filingServices.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6 flex items-start justify-between gap-4"
            >
              <div>
                <h4 className="text-sm font-semibold text-[#F0EDE8] mb-1 tracking-tight">{s.name}</h4>
                <p className="text-xs text-[#B0AAA4] leading-relaxed font-light">{s.desc}</p>
              </div>
              <Link to="/contact"
                className="flex-shrink-0 text-[0.65rem] font-mono font-semibold text-[#E8D5A3] border border-[#E8D5A3]/20 bg-[#E8D5A3]/5 px-3 py-1.5 rounded-full no-underline hover:bg-[#E8D5A3]/10 transition-colors whitespace-nowrap">
                Inquire →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[0.65rem] font-mono font-medium text-[#E8D5A3] tracking-widest uppercase mb-5"
        >
          Additional Services
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {additionalServices.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
              className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col justify-between gap-4"
            >
              <div>
                <h4 className="text-sm font-semibold text-[#F0EDE8] mb-1.5 tracking-tight">{s.name}</h4>
                <p className="text-xs text-[#B0AAA4] leading-relaxed font-light">{s.desc}</p>
              </div>
              <Link to="/contact"
                className="self-start text-[0.65rem] font-mono font-semibold text-[#E8D5A3] border border-[#E8D5A3]/20 bg-[#E8D5A3]/5 px-3 py-1.5 rounded-full no-underline hover:bg-[#E8D5A3]/10 transition-colors">
                Inquire →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-xs text-[#888888]/50 mt-10 font-light font-mono"
        >
          All service fees are quoted clearly before you commit to anything.
        </motion.p>
      </div>
    </section>
  );
}