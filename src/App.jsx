import Hero3D from './components/Hero3D';
import ProjectCard from './components/ProjectCard';
import Skills3D from './components/Skills3D';
import ContactForm from './components/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description: 'A performant portfolio with Spline backgrounds, smooth motion, and responsive 3D interactions.',
      tags: ['React', 'Vite', 'Spline', 'Framer Motion'],
      repoUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'E‑commerce Dashboard',
      description: 'Admin analytics, product management, and real-time insights with modern UI.',
      tags: ['React', 'Tailwind', 'MongoDB', 'Charts'],
      repoUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'API Starter (Node + Mongo)',
      description: 'Production-ready API boilerplate with auth, validation, and Docker support.',
      tags: ['Node', 'Express', 'Mongoose', 'Docker'],
      repoUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-white">
      {/* Hero */}
      <Hero3D />

      {/* About */}
      <section id="about" className="relative bg-[#0b0c10] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl text-slate-300"
          >
            I craft modern, scalable web apps across MERN and MEAN stacks, focusing on performance,
            accessibility, and a refined developer experience. My work blends elegant, dark aesthetics
            with subtle neon glows, depth, and smooth interactions.
          </motion.p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'MERN Focus',
                text: 'React + Next.js frontends, Node/Express APIs, and MongoDB with Mongoose for robust data layers.',
              },
              {
                title: 'MEAN Expertise',
                text: 'Angular micro-frontends with NestJS services, sharing models and clean, typed contracts.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-xl"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative bg-[#0b0c10] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="mt-3 text-slate-300">Selected work across product and platform engineering.</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <Skills3D />

      {/* Contact */}
      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0c10] py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-slate-400">© {new Date().getFullYear()} Full‑Stack Developer</p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
