import { useState } from "react";
import { reasons, site } from "../data.js";

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="why" className="section-y bg-[#101114]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <img
          src={site.why}
          alt="Athlete mid-deadlift with chalk dust in the air"
          loading="lazy"
          className="aspect-[4/5] max-h-[640px] w-full rounded-3xl object-cover object-top"
        />

        <div>
          <h2 className="h2">
            Why train at <span className="text-accent">Draftworks</span>
          </h2>

          <div className="mt-8 space-y-3">
            {reasons.map((r, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={r.title}
                  className="overflow-hidden rounded-2xl border border-[#303137] bg-[#1A1B20] transition-colors duration-300 hover:bg-[#222329]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base font-bold md:text-lg">
                      {r.title}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[#45464D] text-[#FF5722] text-xl text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#A6A7AE] md:text-base">
                        {r.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
