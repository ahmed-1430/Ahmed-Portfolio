/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let ctx: any;

    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      const TextPlugin = (await import("gsap/TextPlugin")).default;

      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      ctx = gsap.context(() => {
        // ----------------------------------------------------------
        // IMAGE FLOAT + PARALLAX + PREMIUM TILT EFFECT
        // ----------------------------------------------------------
        gsap.to(imgRef.current, {
          y: 15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
        });

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

        // 3D TILT
        const img = imgRef.current;
        if (img) {
          img.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(img, {
              rotateY: x / 40,
              rotateX: -y / 40,
              ease: "power3.out",
              duration: 0.3,
            });
          });

          img.addEventListener("mouseleave", () => {
            gsap.to(img, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          });
        }

        // ----------------------------------------------------------
        // MOUSE FOLLOW GLOW (fixed + smooth)
        // ----------------------------------------------------------
        const glow = glowRef.current;
        const hero = heroRef.current;

        if (hero && glow) {
          const glowSize = 500;

          const moveX = gsap.quickTo(glow, "x", {
            duration: 0.4,
            ease: "power3.out",
          });

          const moveY = gsap.quickTo(glow, "y", {
            duration: 0.4,
            ease: "power3.out",
          });

          hero.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left - glowSize / 2;
            const y = e.clientY - rect.top - glowSize / 2;
            moveX(x);
            moveY(y);
          });
        }

        // ----------------------------------------------------------
        // FLOATING ICON ORBITS
        // ----------------------------------------------------------
        iconRefs.current.forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -20 : 20,
            duration: 3 + i,
            repeat: -1,
            yoyo: true,
            ease: "easeInOut",
          });
        });

        // ----------------------------------------------------------
        // TYPING ROLE ANIMATION
        // ----------------------------------------------------------
        if (textRef.current) {
          gsap.to(textRef.current, {
            text: "MERN Stack Developer · UI Engineer · Interaction Specialist",
            duration: 3,
            ease: "none",
          });
        }
      }, heroRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#070707] to-black opacity-80" />

      {/* Magical Cursor Glow */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[200px] rounded-full pointer-events-none"
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          "/react-original.svg",
          "/Next_icons.svg",
          "/Node_icons.svg",
          "/Mongo_icons.svg",
          "/greensock.svg",
        ].map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) iconRefs.current[i] = el;
            }}

            className="absolute w-12 h-12 opacity-40"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
          >
            <Image src={src} alt="icon" fill className="object-contain" />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-gray-400">Hello there</p>

          <h1 className="text-5xl font-extrabold mt-3 leading-tight">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              I’m Omar Ahmed
            </span>
          </h1>

          <h2 className="text-xl text-primary mt-1 font-medium">
            <span ref={textRef}></span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-lg leading-relaxed text-[15px]">
            I build high-performance, modern and visually rich applications with
            <span className="text-primary"> Next.js, React, Node, Express, MongoDB</span>
            — crafted with stunning animations, UX-focused interactions and clean architecture.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-primary text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="/Omar_Ahmed__Resume.pdf"
              target="_blank"
              className="px-7 py-3 rounded-full border border-gray-700 text-gray-300 font-semibold hover:bg-white/5 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end items-center relative"
        >
          <div
            ref={imgRef}
            className="w-80 h-80 md:w-[360px] md:h-[360px] rounded-3xl overflow-hidden shadow-[0_0_80px_-10px_#8b5cf6] border border-white/10 bg-[#111] transform-gpu"
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
