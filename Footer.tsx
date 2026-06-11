"use client";

import { Zap, Github, Mail, Phone, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { label: "SEO & Organic Growth", href: "#services" },
  { label: "Content Marketing", href: "#services" },
  { label: "Paid Media", href: "#services" },
  { label: "Social Media", href: "#services" },
];

const companyLinks = [
  { label: "Our Work", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Call", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Vennix
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              The premium digital marketing agency for brands that measure
              success in revenue, not impressions.
            </p>
            <a
              href="https://github.com/Kellyraydev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — Kellyraydev"
              className="glass mt-6 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/60 transition-all duration-300 hover:border-violet/40 hover:text-white hover:shadow-glow"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/45 transition-colors duration-300 hover:text-cyanx"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/45 transition-colors duration-300 hover:text-cyanx"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:Kellyray.dev@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-cyanx"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Kellyray.dev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12025716325"
                  className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-cyanx"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +1 (202) 571-6325
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kellyraydev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-cyanx"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  github.com/Kellyraydev
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/35">
            © 2026 Vennix. All rights reserved.
          </p>
          <p className="text-sm text-white/35">
            Crafted with precision by{" "}
            <a
              href="https://github.com/Kellyraydev"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text font-semibold"
            >
              Kellyraydev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
