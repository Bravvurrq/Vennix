"use client";

import { StaggerGroup, StaggerItem } from "@/components/motion";
import { Rocket, TrendingUp, HeartHandshake, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "200+",
    label: "Campaigns Launched",
  },
  {
    icon: TrendingUp,
    value: "4.8x",
    label: "Average ROAS",
  },
  {
    icon: HeartHandshake,
    value: "95%",
    label: "Client Retention",
  },
  {
    icon: DollarSign,
    value: "$47M",
    label: "Revenue Generated",
  },
];

export default function StatsBar() {
  return (
    <section className="relative px-4 pb-8">
      <StaggerGroup className="glass-strong mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem
            key={stat.label}
            className="group flex flex-col items-center gap-3 px-6 py-10 text-center transition-colors duration-300 hover:bg-white/[0.04]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient/20 border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110">
              <stat.icon className="h-5 w-5 text-cyanx" />
            </span>
            <span className="gradient-text text-4xl font-bold tracking-tight md:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-white/45">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
