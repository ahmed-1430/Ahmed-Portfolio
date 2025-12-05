/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any;

    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // IMAGE PARALLAX
        gsap.to(imgRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // FLOATING IMAGE ANIMATION
        gsap.to(imgRef.current, {
          y: 18,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
        });

        // MOVING GLOW ANIMATION
        gsap.to(glowRef.current, {
          x: 40,
          y: -30,
          scale: 1.15,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
        });
      }, heroRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black" />

      {/* Animated Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[150px]"
      />

      <div className="w-11/12  md:w-10/12 mx-auto md:px-6 grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="text-sm text-gray-300"
          >
            Hello there 
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="text-5xl font-extrabold mt-3 leading-tight"
          >
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              I am Omar Ahmed
            </span>
          </motion.h1>

          <motion.h2
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="text-xl text-gray-400 mt-2"
          >
            MERN Stack Developer • UI & Interaction Engineer
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-5 text-gray-400 max-w-lg leading-relaxed"
          >
            I craft smooth, modern, and interactive digital experiences.
            Specialized in frontend dynamics, GSAP animations, elegant UI
            systems, and full MERN stack applications.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-primary text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              Send Inquiry
            </a>

            <a
              href="/resume.pdf"
              className="px-7 py-3 rounded-full border border-gray-700 text-gray-300 font-semibold hover:bg-white/5 transition"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end items-center relative"
        >
          {/* Decorative Glow Outline */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-purple-500/20 rounded-full blur-xl" />

          <div
            ref={imgRef}
            className="w-80 h-80 md:w-100 md:h-100 rounded-2xl overflow-hidden shadow-[0_0_60px_-15px_#8b5cf6] border border-white/10 bg-[#111]"
          >
            <Image
              src="/omar_dark.png"
              alt="Omar Ahmed"
              width={800}
              height={800}
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
