import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqs = [
  { q: 'What is a TCP and who needs one?', a: 'A Transportation Charter Permit is required for any California company transporting passengers for compensation under a prearranged agreement — limos, shuttles, private buses, party buses, corporate transport, and tour vehicles all typically need one.' },
  { q: 'Can I apply without a vehicle yet?', a: 'Technically yes, but insurance premiums are significantly higher without a vehicle attached. We strongly advise having at least one vehicle registered and bound to your policy before filing — it saves real money ongoing.' },
  { q: "Standard TCP vs. Class A — what's the difference?", a: "Standard TCP ($1,000) covers general private charter — airport runs, events, corporate. Class A ($1,500) adds sightseeing tours where passengers board at a fixed location. If you're not running tours, standard is all you need." },
  { q: 'Does the $1,000 filing fee go to you?', a: "No. The $1,000 or $1,500 fee goes directly to the CPUC and is nonrefundable. Our service fee is separate and covers all preparation and filing work. You'll see a complete breakdown before you commit to anything." },
  { q: 'How long does the whole process take?', a: 'CPUC review alone is 30–60 days from receipt of a complete packet. Pre-submission work adds 2–4 weeks. Total: 6–10 weeks from first contact to permit in hand.' },
  { q: 'What happens if my application is rejected?', a: "Rejections almost always come from incomplete or incorrect documentation. Because we prepare and verify every item before submission, this is rare. If an issue arises during CPUC review, we handle follow-up communication on your behalf." },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-[#1A1A1A] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full text-left bg-transparent border-none cursor-pointer py-5 px-0 flex items-start justify-between gap-4 group"
      >
        <span className={`text-sm font-semibold leading-snug tracking-tight transition-colors duration-200 ${
          isOpen ? 'text-[#E8D5A3]' : 'text-[#F5F2ED] group-hover:text-[#E8D5A3]'
        }`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mt-0.5 transition-colors duration-200 ${
            isOpen ? 'border-[#E8D5A3] bg-[#E8D5A3]/10' : 'border-[#2A2A2A]'
          }`}
        >
          <span className={`text-sm leading-none transition-colors duration-200 ${isOpen ? 'text-[#E8D5A3]' : 'text-[#A0A0A0]'}`}>+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#C0BAB4] leading-relaxed font-light pb-5 pr-8">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24 md:py-32 px-6">
      <br /> <br /> <br />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-[300px_1fr] gap-12 md:gap-20 items-start">
          <div className="md:sticky md:top-28">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-[#F5F2ED] leading-tight tracking-tight mb-4"
            >
              Questions<br />
              <span className="text-[#A0A0A0] font-light">Answered.</span>
            </motion.h2>
            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contact"
              className="link-line inline-flex items-center gap-2 text-sm font-medium text-[#A0A0A0] hover:text-[#E8D5A3] no-underline transition-colors"
            >
              Still have Questions? →
            </motion.a>
          </div>
          {inView && (
            <div className="flex flex-col">
              {faqs.map((f, i) => (
                <FAQItem
                  key={i}
                  faq={f}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}