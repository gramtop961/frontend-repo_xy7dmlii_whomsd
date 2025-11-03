import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, tags = [], imageUrl, repoUrl, liveUrl, onOpen }) {
  const cardRef = useRef(null);
  const reduce = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!cardRef.current || reduce) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = -((y / rect.height) - 0.5) * 12;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTransform = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className="relative rounded-xl bg-gradient-to-b from-white/10 to-white/5 p-3 ring-1 ring-white/10 shadow-xl backdrop-blur-sm transition-transform will-change-transform"
        style={{ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' }}
      >
        <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="h-full w-full object-cover opacity-90" />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-slate-300">
              <span className="text-sm">Preview</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-cyan-500/10 to-indigo-500/20 mix-blend-overlay" />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">{description}</p>
        </div>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/15 ring-1 ring-white/10"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-2 text-xs font-semibold text-white shadow-md"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}
          {onOpen && (
            <button
              onClick={onOpen}
              className="ml-auto text-xs text-slate-300 hover:text-white underline-offset-4 hover:underline"
            >
              Details
            </button>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-indigo-500/10 opacity-0 blur group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
