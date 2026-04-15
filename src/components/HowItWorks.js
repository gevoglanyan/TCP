import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { num: '01', title: 'Business Registration', desc: 'We file your LLC or Corporation with the CA Secretary of State, including Articles of Incorporation or Organization.', agency: 'CA Secretary of State', time: '1–3 days' },
  { num: '02', title: 'DMV Pull Notice', desc: "We enroll you in the EPN program and obtain your Requester Code — a mandatory item in your CPUC packet.", agency: 'CA DMV', time: '5–7 days' },
  { num: '03', title: 'Vehicle & CA# Registration', desc: 'Commercial registration for your fleet. For 11+ seat vehicles, we coordinate the CHP safety inspection and CA# number.', agency: 'DMV · CHP', time: '5–14 days' },
  { num: '04', title: 'Insurance Binding', desc: 'Public liability and property damage coverage coordinated and bound to specific vehicles — significantly reducing your premiums.', agency: 'Insurance', time: '3–7 days' },
  { num: '05', title: 'CPUC Application', desc: 'Complete packet compiled and submitted to the CPUC License Section with the $1,000 standard TCP or $1,500 Class A filing fee.', agency: 'CPUC', time: '7–14 days' },
  { num: '06', title: 'Post-Approval Setup', desc: 'CSAT program enrollment (16+ passengers), TCP number display compliance, and final review across all vehicles and marketing.', agency: 'CSAT · Fleet', time: '3–5 days' },
];

function Step({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex gap-6 pb-10 ${isLast ? '' : 'step-connector'}`}
    >
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center z-10 relative">
          <span className="font-mono text-[0.65rem] font-medium text-[#E8D5A3]">{step.num}</span>
        </div>
      </div>
      <div className="flex-1 pt-2">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-base md:text-lg font-bold text-[#F5F2ED] tracking-tight">{step.title}</h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[0.6rem] font-mono font-medium text-[#A0A0A0] border border-[#2A2A2A] px-2.5 py-1 rounded-full tracking-wider">
              {step.agency}
            </span>
            <span className="text-[0.6rem] font-medium text-[#A0A0A0] bg-[#141414] border border-[#1A1A1A] px-2.5 py-1 rounded-full">
              {step.time}
            </span>
          </div>
        </div>
        <p className="text-sm text-[#B0AAA4] leading-relaxed font-light">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="how" className="py-24 md:py-32 px-6">
      <br /> <br />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[340px_1fr] gap-12 md:gap-20">
          <div className="md:sticky md:top-28 md:self-start" ref={headerRef}>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#F5F2ED] leading-tight tracking-tight mb-4"
            >
              Six Steps.<br />
              <span className="text-[#A0A0A0] font-light">We do<br />all of them.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-[#B0AAA4] leading-relaxed font-light mb-6"
            >
              A TCP application touches four state agencies. One wrong document can delay you weeks. We know exactly what each agency needs.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contact"
              className="link-line inline-flex items-center gap-2 text-sm font-medium text-[#E8D5A3] no-underline"
            >
              Start Today →
            </motion.a>
          </div>
          <div className="pt-2">
            {steps.map((step, i) => (
              <Step key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}