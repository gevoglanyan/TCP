import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Process', href: '/process' },
  { label: 'Requirements', href: '/requirements' },
  { label: 'Services & Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] px-6 py-10 bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-display text-lg font-bold text-[#F0EDE8] tracking-tight"
          >
            <Link to="/" className="no-underline text-[#F0EDE8]">
              TCP<span className="text-[#E8D5A3]">Fast</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            {links.map((l) => (
              <Link key={l.label} to={l.href}
                className="link-line text-xs text-[#888888] hover:text-[#F0EDE8] no-underline transition-colors duration-200 font-light">
                {l.label}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[0.58rem] font-mono text-[#888888]/25 tracking-widest text-center sm:text-right"
          >
            NOT AFFILIATED WITH CPUC · DMV · CHP
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-[#1A1A1A] flex items-center justify-center"
        >
        </motion.div>
      </div>
    </footer>
  );
}