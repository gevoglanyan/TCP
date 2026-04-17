import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { val: '10+', label: 'Years of experience' },
  { val: '500+', label: 'Permits filed' },
  { val: '100%', label: 'California coverage' },
  { val: '4', label: 'State agencies handled' },
];

export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <br /> <br />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#F0EDE8] leading-tight tracking-tight mb-6"
            >
              We know<br />
              <span className="text-[#A0A0A0] font-light">the process<br />inside out.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 text-sm text-[#B0AAA4] leading-relaxed font-light"
            >
              <p>
                TCPFast was built by transportation industry insiders who got tired of watching operators lose weeks — sometimes months — to avoidable paperwork mistakes. We've been through the CPUC process hundreds of times and know exactly what each agency needs, in what order, and why.
              </p>
              <p>
                We work exclusively with California transportation operators — limo companies, shuttle services, private buses, tour operators, and corporate fleets — guiding them through every step of the TCP process from day one.
              </p>
              <p>
                Our job is simple: get your permit approved as fast as possible, with no surprises.
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-5"
                >
                  <div className="font-display text-3xl font-bold text-[#E8D5A3] leading-none mb-1">{s.val}</div>
                  <div className="text-xs text-[#888888] font-light">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-glow bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                <p className="text-[0.65rem] font-mono font-semibold text-[#4ADE80] tracking-widest uppercase">Service Area</p>
              </div>
              <h3 className="font-display text-xl font-bold text-[#F0EDE8] mb-2 tracking-tight">All of California</h3>
              <p className="text-sm text-[#B0AAA4] leading-relaxed font-light mb-4">
                We serve transportation operators across the entire state of California — from Los Angeles and San Diego to San Francisco, Sacramento, and everywhere in between.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento', 'Orange County', 'Riverside', 'San Jose', 'Fresno'].map((city) => (
                  <span key={city}
                    className="text-[0.62rem] font-mono font-medium text-[#888888] border border-[#2A2A2A] px-2.5 py-1 rounded-full tracking-wider">
                    {city}
                  </span>
                ))}
                <span className="text-[0.62rem] font-mono font-medium text-[#E8D5A3] border border-[#E8D5A3]/20 bg-[#E8D5A3]/5 px-2.5 py-1 rounded-full tracking-wider">
                  + all of CA
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}