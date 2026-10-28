import { site } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section-y bg-[#101114]">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-24">
          <img
            src={site.contactBg}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-bg/80" />
          <h2 className="h2 mx-auto max-w-2xl">
            Ready to get <span className="text-accent">stronger?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/75">
            Visit us, call us, or send a message. We will help you pick a plan
            and start your first session.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={site.phoneHref} className="btn btn-accent">
              Call {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline">
              {site.email}
            </a>
          </div>
          <address className="mt-10 space-y-1 text-sm not-italic text-white/65">
            <p>{site.address}</p>
            <p>{site.hours}</p>
          </address>
        </div>
      </div>
    </section>
  );
}
