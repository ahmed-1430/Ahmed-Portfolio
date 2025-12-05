/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: any) {
  const link = project.live || project.repoClient;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block rounded-xl overflow-hidden bg-surface/80 backdrop-blur-md border border-white/10 shadow-lg"
    >
      {/* Live Website Preview */}
      <div className="relative w-full h-80 bg-black/20 overflow-hidden">
        <div className="w-full h-full origin-top-left scale-[1.20]">
          <iframe
            src={project.live}
            sandbox="allow-same-origin allow-scripts allow-forms"
            loading="lazy"
            className="w-full h-full pointer-events-none"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-semibold text-lg">{project.title}</h4>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
