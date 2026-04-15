import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { day: 'Day 1–3', title: 'Consultation & checklist', desc: 'We review your situation and build a custom document checklist. No surprises.' },
  { day: 'Day 3–10', title: 'Business reg & DMV EPN', desc: 'Secretary of State filing and EPN enrollment. Requester Code arrives in 5–7 days.' },
  { day: 'Day 5–14', title: 'Vehicle reg & CHP inspection', desc: 'Commercial registration confirmed. CHP inspection and CA# for 11+ seat vehicles.' },
  { day: 'Day 7–14', title: 'Insurance binding', desc: 'Coverage coordinated and bound to specific vehicles — reducing your premiums.' },
  { day: 'Day 14–21', title: 'CPUC submission', desc: 'Complete packet filed. We handle all agency communication from this point.' },
  { day: 'Day 45–75', title: 'TCP issued ✓', desc: "CSAT enrollment (if needed). Full compliance review. You're cleared to operate." },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-20 items-start">
          <div className="md:sticky md:top-28">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#F5F2ED] leading-tight tracking-tight mb-4"
            >
              30 – 60 days,<br />
              <span className="text-[#A0A0A0] font-light">start<br />to finish.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-[#B0AAA4] leading-relaxed font-light mb-6"
            >
              Delays almost always come from incomplete packets. That's exactly what we prevent.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-5"
            >
              <p className="text-[0.6rem] font-mono font-bold text-[#E8D5A3] tracking-widest uppercase mb-2">Insurance Tip</p>
              <p className="text-xs text-[#B0AAA4] leading-relaxed font-light">
                Applying without a vehicle bound to your policy significantly increases premiums. We advise on this strategy before any policy is signed.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#E8D5A3]/20 via-[#2A2A2A] to-transparent" />
            <div className="flex flex-col gap-0">
              {steps.map((s, i) => {
                const isLast = i === steps.length - 1;
                return (
                  <motion.div
                    key={s.day}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex gap-6 pl-12 py-5 ${!isLast ? 'border-b border-[#1A1A1A]' : ''}`}
                  >
                    <div className={`absolute left-0 top-[22px] w-8 h-8 rounded-full border flex items-center justify-center z-10 ${
                      isLast ? 'bg-[#E8D5A3] border-[#E8D5A3]' : 'bg-[#0C0C0C] border-[#2A2A2A]'
                    }`}>
                      {isLast
                        ? <span className="text-xs text-[#0C0C0C] font-bold">✓</span>
                        : <span className="text-[0.55rem] font-mono text-[#A0A0A0]">{String(i + 1).padStart(2, '0')}</span>
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[0.6rem] font-mono font-semibold text-[#E8D5A3] tracking-wider block mb-1">{s.day}</span>
                      <h4 className="text-sm font-semibold text-[#F5F2ED] mb-1 tracking-tight">{s.title}</h4>
                      <p className="text-xs text-[#B0AAA4] leading-relaxed font-light">{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}