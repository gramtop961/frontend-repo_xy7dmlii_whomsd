import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const reduce = useReducedMotion();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Respecting backend-first rule: no API calls until endpoint exists.
    // For now, simulate success feedback only.
    setStatus('success');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
          <p className="mt-3 text-slate-300">Have a project in mind or want to collaborate? Let's talk.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl bg-white/5 p-6 sm:p-8 ring-1 ring-white/10 backdrop-blur-md shadow-2xl"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300">Name</label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg bg-black/30 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg bg-black/30 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm text-slate-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg bg-black/30 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs text-slate-400">I typically respond within 24 hours.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 hover:brightness-110"
            >
              <Mail className="h-4 w-4" /> Send message
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-6 rounded-lg bg-emerald-500/10 p-4 text-emerald-300 ring-1 ring-emerald-500/20">
              Message ready to send. Backend endpoint will be connected next.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
