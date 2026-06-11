"use client";

import {
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/mo",
    description:
      "For early-stage brands that need a focused channel done right.",
    cta: "Get Started",
    popular: false,
    features: [
      "1 core channel (SEO or Paid)",
      "Monthly strategy roadmap",
      "Campaign setup & management",
      "Conversion tracking setup",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/mo",
    description:
      "Our most popular plan — a full multi-channel growth engine.",
    cta: "Start Growing",
    popular: true,
    features: [
      "Up to 3 channels (SEO, Paid, Social)",
      "Dedicated growth strategist",
      "Creative production & A/B testing",
      "Landing page CRO",
      "Live reporting dashboard",
      "Bi-weekly strategy calls",
      "Priority Slack support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For brands spending $50k+/mo that need a fully embedded team.",
    cta: "Book a Call",
    popular: false,
    features: [
      "Unlimited channels & campaigns",
      "Embedded senior team",
      "Full-funnel attribution modeling",
      "Custom creative studio access",
      "Quarterly executive reviews",
      "24/7 dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans That"
          highlight="Pay for Themselves"
          description="Transparent pricing, no lock-in contracts. Every plan is built to return multiples of what it costs."
        />

        <StaggerGroup className="grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  tier.popular
                    ? "glass-strong border-violet/50 shadow-glow lg:scale-[1.04]"
                    : "glass hover:border-white/25"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <h3
                  className={`text-lg font-bold tracking-tight ${
                    tier.popular ? "gradient-text" : "text-white"
                  }`}
                >
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm font-medium text-white/40">
                      {tier.period}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {tier.description}
                </p>

                <ul className="mt-7 flex-1 space-y-3.5 border-t border-white/10 pt-7">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.popular
                            ? "bg-brand-gradient"
                            : "border border-white/15 bg-white/5"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            tier.popular ? "text-white" : "text-cyanx"
                          }`}
                          strokeWidth={3}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-brand-gradient text-white shadow-glow hover:shadow-glow-cyan hover:brightness-110"
                      : "glass text-white hover:border-violet/40 hover:bg-white/[0.08]"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-10 text-center text-sm text-white/35">
          All plans are month-to-month. Cancel anytime — though with 95%
          retention, most clients don&apos;t.
        </p>
      </div>
    </section>
  );
}
