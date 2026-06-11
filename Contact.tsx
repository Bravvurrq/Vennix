"use client";

import { useState, type FormEvent } from "react";
import { FadeUp } from "@/components/motion";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  CalendarClock,
} from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyanx">
            Get In Touch
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Build Your <span className="gradient-text">Growth Engine</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
            Tell us about your goals. We&apos;ll come back within one business
            day with an honest assessment and a clear next step.
          </p>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <FadeUp className="lg:col-span-2">
            <div className="glass flex h-full flex-col gap-6 rounded-3xl p-8">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                Prefer to reach out directly? We answer every message — usually
                within hours, not days.
              </p>

              <a
                href="mailto:Kellyray.dev@gmail.com"
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:border-violet/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Email Us
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    Kellyray.dev@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+12025716325"
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:border-cyanx/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/40">
                    Call Us
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    +1 (202) 571-6325
                  </span>
                </span>
              </a>

              <div className="glass mt-auto flex items-start gap-4 rounded-2xl border-violet/20 p-4">
                <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-cyanx" />
                <p className="text-sm leading-relaxed text-white/60">
                  <span className="font-semibold text-white">
                    Limited availability:
                  </span>{" "}
                  we&apos;re currently onboarding a small number of Q3 2026
                  clients to keep quality uncompromised.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.15} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Web3Forms access key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="12686031-a205-4687-95c7-e5c367f01faf"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New inquiry from the Vennix website"
                />
                <input type="hidden" name="from_name" value="Vennix Website" />

                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-white/70"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="input-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-white/70"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="input-base"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-white/70"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="input-base appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238b5cf6%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10"
                  >
                    <option value="" disabled className="bg-[#13131a]">
                      Select a service…
                    </option>
                    <option value="SEO & Organic Growth" className="bg-[#13131a]">
                      SEO &amp; Organic Growth
                    </option>
                    <option value="Content Marketing" className="bg-[#13131a]">
                      Content Marketing
                    </option>
                    <option value="Paid Media" className="bg-[#13131a]">
                      Paid Media
                    </option>
                    <option value="Social Media" className="bg-[#13131a]">
                      Social Media
                    </option>
                    <option
                      value="Full-Service Partnership"
                      className="bg-[#13131a]"
                    >
                      Full-Service Partnership
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-white/70"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals, timeline, and budget…"
                    className="input-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-8 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-cyan hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Message sent! We&apos;ll get back to you within one business
                    day.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
                    <XCircle className="h-5 w-5 shrink-0" />
                    Something went wrong. Please try again or email us directly
                    at Kellyray.dev@gmail.com.
                  </p>
                )}
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
