import { motion, useReducedMotion } from 'framer-motion';

const skills = [
  { name: 'React', hue: 'from-cyan-500 to-teal-500' },
  { name: 'Angular', hue: 'from-red-500 to-pink-500' },
  { name: 'Node.js', hue: 'from-lime-500 to-green-500' },
  { name: 'Express', hue: 'from-emerald-500 to-teal-500' },
  { name: 'MongoDB', hue: 'from-green-500 to-emerald-500' },
  { name: 'Docker', hue: 'from-sky-500 to-indigo-500' },
  { name: 'TypeScript', hue: 'from-sky-500 to-blue-500' },
  { name: 'GSAP', hue: 'from-emerald-500 to-teal-500' },
];

export default function Skills3D() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="relative w-full py-24 bg-[#0b0c10] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="mt-3 text-slate-300">A floating cloud of tools I use to build modern applications.</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-teal-500/10 via-cyan-500/5 to-indigo-500/10 blur-2xl" />

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 [perspective:1000px]">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={reduce ? undefined : { opacity: 0, y: 20, rotateX: -10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={reduce ? undefined : { y: -6, rotateX: 6 }}
                className={`group relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-lg [transform-style:preserve-3d]`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${s.hue} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative">
                  <div className="text-lg font-semibold">{s.name}</div>
                  <div className="mt-2 text-sm text-slate-300">Proficient</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
