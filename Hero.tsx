"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-20"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanx opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyanx" />
            </span>
            Accepting Q3 2026 Clients
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-8 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Marketing That
          <br />
          <span className="gradient-text">Drives Revenue</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.24,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-white/50 md:text-xl"
        >
          Vennix is the growth partner behind ambitious brands. We blend
          data-driven strategy, world-class creative, and relentless
          optimization to turn attention into measurable revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.36,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-8 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-cyan hover:brightness-110 sm:w-auto"
          >
            <Sparkles className="h-5 w-5" />
            Start Your Growth
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="glass group inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
          >
            <Play className="h-5 w-5 text-cyanx" />
            View Our Work
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-xs font-medium uppercase tracking-[0.25em] text-white/30"
        >
          Trusted by 120+ venture-backed &amp; enterprise brands
        </motion.p>
      </div>
    </section>
  );
}
