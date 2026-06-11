"use client";

import Image from "next/image";
import {
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import { Target, Lightbulb, BarChart3, Handshake, Linkedin } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Revenue Obsessed",
    description:
      "We don't chase impressions or likes. Every strategy is mapped directly to pipeline and revenue.",
  },
  {
    icon: BarChart3,
    title: "Radically Transparent",
    description:
      "Live dashboards, honest reporting, and zero vanity metrics. You see exactly what we see.",
  },
  {
    icon: Lightbulb,
    title: "Creatively Fearless",
    description:
      "Safe marketing is invisible marketing. We test bold ideas backed by rigorous data.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description:
      "We operate as an extension of your team — same goals, same urgency, same scoreboard.",
  },
];

const team = [
  {
    name: "Kelly Ray",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marcus Chen",
    role: "Head of Paid Media",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Amara Osei",
    role: "Director of SEO",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Diego Ramírez",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who We Are"
          title="The Team Behind"
          highlight="the Growth"
          description="Vennix was built on a simple belief: marketing should pay for itself, many times over. These are the values — and the people — that make it happen."
        />

        {/* Core values */}
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyanx/40 hover:shadow-glow-cyan">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-cyanx/40">
                  <value.icon className="h-5 w-5 text-cyanx" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Team */}
        <StaggerGroup className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="glass group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-violet/40 hover:shadow-glow">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-white/45">{member.role}</p>
                  </div>
                  <span className="glass flex h-9 w-9 items-center justify-center rounded-xl text-white/50 transition-colors duration-300 group-hover:text-cyanx">
                    <Linkedin className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
