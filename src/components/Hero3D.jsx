import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Respect prefers-reduced-motion: no side effects needed here, but
    // keeping hook ensures motion props below respond correctly
  }, [shouldReduceMotion]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0b0c10] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="px-6 text-center max-w-4xl">
          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Full‑Stack Developer
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">
              MERN & MEAN Specialist
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-300 max-w-2xl mx-auto"
          >
            Building performant web experiences with React, Angular, Node, and MongoDB —
            blending clean design, immersive 3D, and robust engineering.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-transform hover:scale-[1.02]"
            >
              View Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/15"
            >
              About
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
