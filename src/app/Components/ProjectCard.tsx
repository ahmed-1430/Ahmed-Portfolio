/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }: any) {
  const link = project.live || project.repoClient

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35 }}
      onClick={() => window.open(link, "_blank")}
      className="
        relative rounded-2xl overflow-hidden cursor-pointer 
        group bg-[#0f0f0f]/70 backdrop-blur-xl border border-white/10 
        shadow-[0_0_25px_-5px_rgba(139,92,246,0.3)]
      "
    >
      {/* Animated Gradient Border */}
      <div className="
        absolute inset-0 rounded-2xl p-[1px]  
        bg-gradient-to-br from-purple-500/30 via-fuchsia-500/20 to-transparent
        opacity-0 group-hover:opacity-100 transition duration-300
      " />

      {/* Live Website Preview */}
      <div className="relative w-full h-72 overflow-hidden rounded-t-2xl">
        <div className="w-full h-full origin-top-left scale-[1.20] opacity-90 group-hover:opacity-100 transition">
          <iframe
            src={project.live}
            sandbox="allow-same-origin allow-scripts allow-forms"
            loading="lazy"
            className="w-full h-full pointer-events-none"
          />
        </div>

        {/* Top Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h4 className="font-semibold text-xl">{project.title}</h4>
        <p className="text-sm text-gray-300 mt-2 line-clamp-2">
          {project.summary}
        </p>

        {/* Tech Stack (Fade In on Hover) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t: string, i: number) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md 
                         group-hover:border-purple-400/40 transition"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Buttons: Live Demo + GitHub */}
        <div className="mt-6 flex items-center gap-3">

          {/* LIVE DEMO BUTTON */}
          {project.live && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.live, "_blank")
              }}
              className="
                flex items-center gap-2 px-4 py-2 text-xs font-medium 
                rounded-md bg-primary text-black 
                hover:scale-105 transition cursor-pointer"
            >
              Live Demo <FiExternalLink size={14} />
            </button>
          )}

          {/* CLIENT REPO */}
          {project.repoClient && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.repoClient, "_blank")
              }}
              className="
                flex items-center gap-2 px-4 py-2 text-xs font-medium
                rounded-md bg-white/5 border border-white/10 
                hover:border-purple-400/40 hover:bg-white/10 transition cursor-pointer"
            >
              Client <FiGithub size={14} />
            </button>
          )}

          {/* SERVER REPO */}
          {project.repoServer && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.repoServer, "_blank")
              }}
              className="
                flex items-center gap-2 px-4 py-2 text-xs font-medium
                rounded-md bg-white/5 border border-white/10 
                hover:border-purple-400/40 hover:bg-white/10 transition cursor-pointer"
            >
              Server <FiGithub size={14} />
            </button>
          )}

        </div>
      </div>
    </motion.div>
  )
}
