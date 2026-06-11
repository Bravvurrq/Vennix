"use client";

import {
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import {
  Search,
  PenTool,
  Megaphone,
  Share2,
  ArrowUpRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description:
      "Dominate search results with technical SEO, authority building, and content engineered to rank — and convert.",
    features: ["Technical audits", "Keyword strategy", "Link authority"],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Editorial-grade content that builds trust, fuels every channel, and compounds in value month after month.",
    features: ["Editorial strategy", "Long-form & video", "Conversion copy"],
  },
  {
    icon: Megaphone,
    title: "Paid Media",
    description:
      "Full-funnel paid acquisition across Google, Meta, and LinkedIn — managed against one metric: profitable ROAS.",
    features: ["PPC & PMax", "Creative testing", "Funnel optimization"],
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Scroll-stopping social programs that grow communities, build brand equity, and drive demand at scale.",
    features: ["Channel strategy", "Community growth", "Influencer ops"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built to"
          highlight="Scale Revenue"
          description="Four core disciplines, one integrated growth engine. Every service is engineered around pipeline, not vanity metrics."
        />

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="glass group relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet/40 hover:shadow-glow">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient p-3 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-white/60"
                    >
                      <Check className="h-4 w-4 shrink-0 text-cyanx" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors duration-300 hover:text-cyanx"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
