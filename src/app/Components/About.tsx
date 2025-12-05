'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="w-11/12 md:w-10/12 mx-auto md:px-6">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          About Me
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed mt-4 text-[15px]"
        >
          I am <span className="text-primary font-medium">Omar Ahmed</span>, a passionate{" "}
          <span className="text-primary font-medium">MERN Stack Developer</span> focused on building
          high-performance, scalable, and user-friendly web applications.
          I love turning ideas into real digital products with clean code and modern technologies.
        </motion.p>

        {/* Info Grid */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
        >
          {/* Card Item */}
          <li className="p-4 border border-white/10 rounded-xl bg-bg/30 backdrop-blur-md">
            <strong className="text-white">Location:</strong>
            <p className="text-gray-400 mt-1">Bangladesh</p>
          </li>

          <li className="p-4 border border-white/10 rounded-xl bg-bg/30 backdrop-blur-md">
            <strong className="text-white">Email:</strong>
            <p className="text-gray-400 mt-1">
              <a href="mailto:ahmedtexting@gmail.com" className="hover:text-primary transition">
                ahmedtexting@gmail.com
              </a>
            </p>
          </li>

          <li className="p-4 border border-white/10 rounded-xl bg-bg/30 backdrop-blur-md">
            <strong className="text-white">Availability:</strong>
            <p className="text-gray-400 mt-1">Open to work</p>
          </li>

          <li className="p-4 border border-white/10 rounded-xl bg-bg/30 backdrop-blur-md">
            <strong className="text-white">Resume:</strong>
            <p className="mt-1">
              <a
                href="https://your-demo-resume-url.vercel.app/resume.pdf"
                className="underline hover:text-primary transition"
                target="_blank"
              >
                Download
              </a>
            </p>
          </li>
        </motion.ul>
      </div>
    </section>
  )
}
