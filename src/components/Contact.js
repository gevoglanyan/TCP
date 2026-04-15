import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const inputClass = "bg-[#0C0C0C] border border-[#2A2A2A] focus:border-[#E8D5A3] rounded-xl px-4 py-3 text-sm text-[#F5F2ED] outline-none transition-colors duration-200 placeholder-[#3A3A3A] w-full appearance-none";
const labelClass = "text-[0.65rem] font-mono font-semibold uppercase tracking-widest text-[#A0A0A0] mb-1.5 block";

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('done'), 900);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <br /> <br /> <br />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
          <div className="md:sticky md:top-28">
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#F5F2ED] leading-tight tracking-tight mb-4">
              Let's get<br />
              <span className="text-[#A0A0A0] font-light">your permit<br />moving.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-[#B0AAA4] leading-relaxed font-light mb-8">
              We'll respond within one business day with a full consultation and clear quote. No commitment required.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4">
              {[
                { label: 'Email', val: 'permits@tcpfast.com' },
                { label: 'Phone', val: '(323) 841-5151' },
                { label: 'Hours', val: 'Mon – Fri, 9am – 6pm PST' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8D5A3]" />
                  </div>
                  <div>
                    <div className="text-[0.58rem] font-mono font-semibold uppercase tracking-widest text-[#A0A0A0]/70">{c.label}</div>
                    <div className="text-sm font-medium text-[#F5F2ED]">{c.val}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>First Name</label><input type="text" placeholder="John" required className={inputClass} /></div>
              <div><label className={labelClass}>Last Name</label><input type="text" placeholder="Smith" required className={inputClass} /></div>
            </div>
            <div><label className={labelClass}>Email</label><input type="email" placeholder="you@company.com" required className={inputClass} /></div>
            <div><label className={labelClass}>Phone</label><input type="tel" placeholder="(555) 000-0000" className={inputClass} /></div>
            <div>
              <label className={labelClass}>Permit Type</label>
              <select className={inputClass} style={{ paddingRight: '2.2rem' }}>
                <option value="">Select...</option>
                <option>Standard TCP ($1,000 Filing Fee)</option>
                <option>Class A Certificate ($1,500 Filing Fee)</option>
                <option>Not Sure — Need Guidance</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Vehicle Type</label>
              <select className={inputClass} style={{ paddingRight: '2.2rem' }}>
                <option value="">Select...</option>
                <option>Sedan / SUV (Under 11 Passengers)</option>
                <option>Van / Sprinter (11 – 15 Passengers)</option>
                <option>Minibus (16 – 24 Passengers)</option>
                <option>Full-Size Bus (25+ Passengers)</option>
                <option>Multiple Types</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Tell Us About Your Operation</label>
              <textarea rows={4} placeholder="Describe your planned service, number of vehicles, existing registrations..."
                className={`${inputClass} resize-y leading-relaxed`} />
            </div>
            <button type="submit" disabled={status !== 'idle'}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-sm border-none cursor-pointer transition-all duration-300 ${
                status === 'done' ? 'bg-[#4ADE80]/15 text-[#4ADE80] cursor-default'
                : status === 'loading' ? 'bg-[#E8D5A3]/50 text-[#0C0C0C] cursor-wait'
                : 'bg-[#E8D5A3] hover:bg-[#F0E4B8] text-[#0C0C0C] hover:scale-[1.02]'
              }`}>
              {status === 'idle' && 'Submit & Get a Quote →'}
              {status === 'loading' && 'Sending...'}
              {status === 'done' && "✓ Submitted — we'll be in touch within 1 business day."}
            </button>
            <p className="text-[0.65rem] font-mono text-[#A0A0A0]/60 text-center tracking-wide">
              No commitment required · Response within 1 business day
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}