import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote: "TCPFast handled everything from my LLC registration to the CPUC filing. I had my TCP number in 45 days. I couldn't have done it this fast on my own.",
    name: "Carlos M.",
    role: "Owner, LAX Shuttle Services",
    location: "Los Angeles, CA",
  },
  {
    quote: "I tried to do this myself first and wasted two months going back and forth with the DMV. TCPFast got it done in six weeks. Worth every penny.",
    name: "Sandra T.",
    role: "Founder, Elite Black Car",
    location: "San Diego, CA",
  },
  {
    quote: "They knew exactly what documents were needed and in what order. Zero back and forth with the agencies. Smooth from start to finish.",
    name: "David K.",
    role: "Operations Manager, Bay Shuttle Co.",
    location: "San Francisco, CA",
  },
  {
    quote: "I needed a TCP transfer after buying an existing limo business. TCPFast handled the whole process — I didn't have to deal with CPUC once.",
    name: "Maria R.",
    role: "Owner, Prestige Limo Group",
    location: "Orange County, CA",
  },
  {
    quote: "Got my airport permit and TCP renewed at the same time. TCPFast coordinated both without me having to lift a finger.",
    name: "James W.",
    role: "Fleet Manager, Pacific Transport",
    location: "Sacramento, CA",
  },
  {
    quote: "As a first-time operator I had no idea where to start. TCPFast walked me through everything and I was legal and operating within 60 days.",
    name: "Amir N.",
    role: "Owner, Nouri Executive Cars",
    location: "Beverly Hills, CA",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#E8D5A3] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-[#F0EDE8] leading-tight tracking-tight"
          >
            What our Clients<br />
            <span className="text-[#A0A0A0] font-light">are saying.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col justify-between gap-6"
            >
              <div>
                <Stars />
                <p className="text-sm text-[#C0BAB4] leading-relaxed font-light">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1A1A1A]">
                <div className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#E8D5A3]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F0EDE8]">{t.name}</div>
                  <div className="text-[0.65rem] text-[#888888] font-light">{t.role}</div>
                  <div className="text-[0.62rem] font-mono text-[#888888]/50 tracking-wider">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}