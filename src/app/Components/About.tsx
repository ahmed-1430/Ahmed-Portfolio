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
          className="text-3xl font-semibold text-center"
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
          I’m <span className="text-primary font-medium">Omar Ahmed</span>, a dedicated 
          <span className="text-primary font-medium"> MERN Stack Developer</span> from Dhaka, Bangladesh.
          I specialize in building modern full-stack applications using technologies like 
          <span className="text-primary"> Next.js, React.js, Node.js, Express.js, and MongoDB</span>.
          <br /><br />
          My focus is on creating scalable backends, aesthetic and smooth UI interactions, 
          secure authentication systems, and high-performance applications with clean architecture.
        </motion.p>

        {/* Info Grid */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
        >
          <li className="p-4 border border-white/10 rounded-xl bg-bg/30 backdrop-blur-md">
            <strong className="text-white">Location:</strong>
            <p className="text-gray-400 mt-1">Dhaka, Bangladesh</p>
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
            <p className="text-gray-400 mt-1">Open to Work</p>
          </li>

          <li className="p-4 border border-white/10 rounded-xl bg-bg/30 backdrop-blur-md">
            <strong className="text-white">Resume:</strong>
            <p className="mt-1">
              <a
                href="/Omar_Ahmed_Resume.pdf"
                target="_blank"
                className="underline hover:text-primary transition"
              >
                Download
              </a>
            </p>
          </li>
        </motion.ul>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-xl border border-white/10 bg-bg/20 backdrop-blur-md"
        >
          <h4 className="text-lg font-semibold text-white">Education</h4>
          <p className="text-gray-300 mt-3 text-[15px]">
            <span className="font-medium text-primary">Diploma in Engineering (Computer Science)</span><br />
            Graphic Arts Institute, Dhaka, Bangladesh  
            <br />
            <span className="text-gray-400">2023 — 2027</span>
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-xl border border-white/10 bg-bg/20 backdrop-blur-md"
        >
          <h4 className="text-lg font-semibold text-white">What I Do</h4>
          <p className="text-gray-400 mt-3 text-[15px] leading-relaxed">
            • Build secure full-stack applications with custom authentication (JWT, Firebase Admin). <br />
            • Develop responsive UI using Next.js, React.js, Tailwind, GSAP, Framer Motion & Swiper. <br />
            • Create scalable backend APIs with Node.js, Express & MongoDB. <br />
            • Design modular architecture with reusable components and optimized state management. <br />
            • Implement real-time features, dashboards, charts & admin panels. <br />
            • Focus on performance, accessibility, and pixel-perfect design.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
