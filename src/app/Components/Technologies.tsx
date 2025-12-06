'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { techGroups } from '../data/techs'

// ---- FIX #1: Strong typing for tabs ----
type TechGroupKey = keyof typeof techGroups

const tabs: { key: TechGroupKey; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'languages', label: 'Languages' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' }
]

export default function Technologies() {
  // ---- FIX #2: Strongly typed active key ----
  const [active, setActive] = useState<TechGroupKey>('frontend')

  // ---- FIX #3: Typed ref array ----
  const iconsRef = useRef<HTMLDivElement[]>([])

  //  GSAP Floating Animation
  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, {
        y: -8,
        duration: 2 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'ease.inOut'
      })
    })
  }, [active])

  return (
    <section id="tech" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold"
        >
          Technologies & Tools
        </motion.h3>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-2 rounded-full text-sm border transition cursor-pointer 
                ${active === t.key
                  ? 'bg-primary text-black border-primary'
                  : 'bg-white/5 border-white/10 hover:border-primary/50'
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {techGroups[active].map((t, i) => (
                <motion.div
                  key={t.name}

                  // ---- FIX #4: Correct ref assignment ----
                  ref={(el) => {
                    if (el) iconsRef.current[i] = el
                  }}

                  whileHover={{ scale: 1.08 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 
                             backdrop-blur-md hover:border-primary/60 
                             transition cursor-default"
                >
                  <Image
                    src={t.icon}
                    alt={t.name}
                    width={45}
                    height={45}
                    unoptimized
                    className="mx-auto"
                  />

                  <p className="mt-3 text-sm text-gray-300">{t.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
