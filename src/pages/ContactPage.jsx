import { useState } from "react";
import { site } from "../data.js";

const EMAIL = "hello@draftworks.in";
const PHONE = "+918959690529";
const PHONE_DISPLAY = "+91 89596 90529";

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6b35] focus:bg-white/[0.06]";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = form.subject.trim() || `Website enquiry from ${form.name}`;

    const body = [
      "Hello Draftworks,",
      "",
      "I would like to get in touch with you.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      form.message,
      "",
      "Regards,",
      form.name,
    ].join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const mapQuery = site.address || "Draftworks Gym";

  return (
    <main className="min-h-screen bg-[#101114] pt-28 text-white md:pt-32">
      {/* Contact Hero */}
      <section className="container-x pb-14 md:pb-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b35]">
            Get in touch
          </p>

          <h1 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] tracking-tight md:whitespace-nowrap">
            Let's start
            <br />
            <span className="text-[#ff6b35]">something strong.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Have questions about our training programs, coaching, or facilities?
            Reach out to us. We would love to hear from you and help you take
            the next step in your fitness journey.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-x pb-20 md:pb-28">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 order-2 lg:order-none">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 md:p-8">
              <h2 className="text-2xl font-bold">
                Contact <span className="text-[#ff6b35]">information</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Choose whichever way works best for you. We're happy to help
                with your questions.
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-start gap-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ff6b35]/10 text-[#ff6b35] transition-colors group-hover:bg-[#ff6b35]/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  <span className="min-w-0 pt-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-white/40">
                      Email us
                    </span>
                    <span className="mt-1 block break-all text-base font-semibold transition-colors group-hover:text-[#ff6b35]">
                      {EMAIL}
                    </span>
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PHONE}`}
                  className="group flex items-start gap-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ff6b35]/10 text-[#ff6b35] transition-colors group-hover:bg-[#ff6b35]/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M5 3h4l2 5-2.5 1.5a15 15 0 0 0 6 6L16 13l5 2v4c0 1.1-.9 2-2 2C10 21 3 14 3 5c0-1.1.9-2 2-2Z" />
                    </svg>
                  </span>

                  <span className="pt-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-white/40">
                      Call us
                    </span>
                    <span className="mt-1 block text-base font-semibold transition-colors group-hover:text-[#ff6b35]">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                {/* Location */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ff6b35]/10 text-[#ff6b35] transition-colors group-hover:bg-[#ff6b35]/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <span className="min-w-0 pt-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-white/40">
                      Visit us
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed transition-colors group-hover:text-[#ff6b35]">
                      {site.address}
                    </span>
                    <span className="mt-2 block text-xs text-white/40">
                      Get directions →
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                  Opening hours
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {site.hours}
                </p>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="rounded-3xl bg-[#ff6b35] p-6 text-[#101114] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Prefer a quick conversation?
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                Let's talk about your goals.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black/70">
                Call us directly and we'll help you figure out your next step.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#101114] px-6 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b35]">
                Send an enquiry
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">
                Tell us what you need.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Fill in the details below. Your default email application will
                open with your message ready to send.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-white/80"
                  >
                    Full name <span className="text-[#ff6b35]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-white/80"
                  >
                    Email address <span className="text-[#ff6b35]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-white/80"
                  >
                    Phone number <span className="text-[#ff6b35]">*</span>
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-white/80"
                  >
                    Subject <span className="text-[#ff6b35]">*</span>
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-white/80"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about what you're looking for..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="btn btn-accent flex min-h-14 w-full items-center justify-center gap-3"
              >
                Open Email to Send
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </button>

              <p className="text-center text-xs leading-relaxed text-white/35">
                Your email application must be configured to send email. Nothing
                is sent automatically by this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="container-x pb-20 md:pb-28">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b35]">
              Find us
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">
              Come visit <span className="text-[#ff6b35]">us.</span>
            </h2>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white/65 transition-colors hover:text-[#ff6b35]"
          >
            Open in Google Maps →
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <iframe
            title="Draftworks Gym location on Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <p className="mt-4 text-sm text-white/45">{site.address}</p>
      </section>
    </main>
  );
}
