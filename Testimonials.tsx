"use client";

import Image from "next/image";
import {
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vennix rebuilt our entire paid funnel in six weeks. We went from burning cash on Meta to a consistent 5.2x ROAS. They're the first agency that actually talks in revenue, not impressions.",
    name: "Sarah Mitchell",
    role: "CMO, Lumora Skincare",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Our organic pipeline grew 4x in under a year. The technical SEO work alone paid for the engagement, but the content engine they built is what keeps compounding. Worth every dollar.",
    name: "James Okafor",
    role: "VP Growth, Nordvik SaaS",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "I've worked with five agencies in ten years. Vennix is the only one that felt like an in-house team — same urgency, same scoreboard. Our social channels now drive 30% of total revenue.",
    name: "Elena Vasquez",
    role: "Founder, Velo Activewear",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our"
          highlight="Clients Say"
          description="Don't take our word for it. Here's what the people who sign the invoices have to say."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="glass group relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet/40 hover:shadow-glow">
                <Quote
                  aria-hidden
                  className="absolute right-6 top-6 h-10 w-10 text-white/[0.06] transition-colors duration-500 group-hover:text-violet/20"
                />

                {/* Stars */}
                <div
                  className="flex gap-1"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/65">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-violet/40">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-bold tracking-tight text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-white/45">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
