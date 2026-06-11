"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";

type Category = "All" | "SEO" | "Paid" | "Content" | "Social";

const categories: Category[] = ["All", "SEO", "Paid", "Content", "Social"];

const projects = [
  {
    title: "Lumora Skincare",
    category: "Paid" as const,
    result: "+312% ROAS in 90 days",
    description:
      "Full-funnel Meta & Google rebuild that scaled a DTC skincare brand past 7 figures.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nordvik SaaS",
    category: "SEO" as const,
    result: "+486% organic traffic",
    description:
      "Technical SEO overhaul and programmatic content engine for a B2B analytics platform.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Atlas Fintech",
    category: "Content" as const,
    result: "2.4M monthly readers",
    description:
      "Editorial flagship and thought-leadership program that became the category's go-to resource.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Velo Activewear",
    category: "Social" as const,
    result: "+890K followers in 1 year",
    description:
      "Creator-led social engine across TikTok and Instagram that turned community into revenue.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Haven Hospitality",
    category: "SEO" as const,
    result: "#1 for 240+ keywords",
    description:
      "Local and national SEO domination for a boutique hotel group across 12 markets.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pulse Esports",
    category: "Paid" as const,
    result: "$8.2M attributed revenue",
    description:
      "Performance creative and YouTube ads program that scaled merch and sponsorship revenue.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },
];

const badgeColors: Record<string, string> = {
  SEO: "bg-violet/20 text-violet border-violet/30",
  Paid: "bg-cyanx/20 text-cyanx border-cyanx/30",
  Content: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
  Social: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Work That"
          highlight="Speaks in Numbers"
          description="A selection of recent engagements. Every project below shipped with one mandate: measurable, attributable growth."
        />

        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-brand-gradient text-white shadow-glow"
                  : "glass text-white/60 hover:border-white/25 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="glass group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-violet/40 hover:shadow-glow"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${badgeColors[project.category]}`}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="gradient-text text-sm font-bold uppercase tracking-wider">
                    {project.result}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors duration-300 group-hover:text-cyanx">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
