'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#project', label: 'Project' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact', special: true },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-bg/60 backdrop-blur-xl border-b border-white/10"
    >
      <div className=" w-11/12 md:w-10/12 mx-auto md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        >
          OmarAhmed
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10 items-center text-sm font-medium">
          {navLinks.map(({ href, label, special }) => (
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              key={href}
              href={href}
              className={`relative group ${special
                  ? 'px-4 py-2 rounded-full bg-primary text-black hover:bg-primary/90 transition'
                  : 'hover:text-primary transition'
                }`}
            >
              {!special && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              )}
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary p-1 rounded-md"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg/90 backdrop-blur-lg border-b border-white/10"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="px-6 py-6 flex flex-col gap-4 text-lg font-medium"
            >
              {navLinks.map(({ href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="py-1 transition hover:text-primary"
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
