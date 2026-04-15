import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTAStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0C0C0C]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-glow relative bg-[#F0EDE8] rounded-3xl overflow-hidden p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, #0C0C0C 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10">
            <p className="text-[0.65rem] font-mono font-semibold tracking-widest uppercase text-[#0C0C0C]/40 mb-5">
              Ready to begin?
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[#0C0C0C] leading-tight tracking-tight mb-4">
              Get your TCP<br />permit today.
            </h2>
            <p className="text-sm text-[#0C0C0C]/50 max-w-sm mx-auto font-light leading-relaxed mb-10">
              Clear plan. Clear price. No commitment required to get started.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0C0C0C] hover:bg-[#1A1A1A] text-[#F0EDE8] font-bold text-sm px-8 py-4 rounded-full no-underline transition-all duration-200 hover:scale-105">
                Start Free Consultation →
              </a>
              <a href="tel:+3238415151"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0C0C0C]/60 hover:text-[#0C0C0C] font-medium text-sm px-8 py-4 rounded-full no-underline border-2 border-[#0C0C0C]/15 hover:border-[#0C0C0C]/40 transition-all duration-200">
                (323) 841-5151
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}