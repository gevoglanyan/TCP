import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] flex flex-col justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#F5F2ED 1px, transparent 1px), linear-gradient(90deg, #F5F2ED 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,213,163,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-20 items-center">
          <div>
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 border border-[#2A2A2A] bg-[#141414] rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse inline-block" />
              <span className="text-xs font-medium text-[#C0BAB4] tracking-widest uppercase">California CPUC Specialists</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-[#F5F2ED] mb-6">
              Your TCP<br />
              Permit,{' '}
              <span className="text-gradient">Handled.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)}
              className="text-base md:text-lg text-[#B0AAA4] leading-relaxed max-w-md mb-10 font-light">
              We navigate every step of the California Transportation Charter Permit — from business registration through CPUC approval — in 30 to 60 days.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3">
              <a href="contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E8D5A3] hover:bg-[#F0E4B8] text-[#0C0C0C] font-bold text-sm px-8 py-4 rounded-full no-underline transition-all duration-200 hover:scale-105">
                Start Your Application
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="process"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#C0BAB4] hover:text-[#F5F2ED] font-medium text-sm px-8 py-4 rounded-full no-underline border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-200">
                How it Works
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden md:flex flex-col gap-3"
          >
            {[
              { val: '30 – 60', unit: 'days', label: 'Average approval time', color: '#E8D5A3' },
              { val: '500+', unit: '', label: 'Permits successfully filed', color: '#E8D5A3' },
              { val: '5', unit: 'Agencies', label: 'Coordinated on your behalf', color: '#C0BAB4' },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-5 flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-display text-3xl font-bold leading-none" style={{ color: s.color }}>
                    {s.val}<span className="text-lg ml-1 font-medium opacity-60">{s.unit}</span>
                  </div>
                  <div className="text-xs text-[#A0A0A0] mt-1.5 font-light">{s.label}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-2 mt-1"
            >
              {['SOS', 'DMV', 'CHP', 'CPUC', 'CSAT'].map((tag) => (
                <span key={tag}
                  className="text-[0.65rem] font-mono font-medium text-[#A0A0A0] border border-[#2A2A2A] px-3 py-1.5 rounded-full tracking-widest">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:hidden grid grid-cols-3 gap-3 mt-12 pt-8 border-t border-[#1A1A1A]"
        >
          {[
            { val: '30–60d', label: 'Approval' },
            { val: '500+', label: 'Permits' },
            { val: '5', label: 'Agencies' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-xl font-bold text-[#E8D5A3]">{s.val}</div>
              <div className="text-xs text-[#A0A0A0] mt-0.5 font-light">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}