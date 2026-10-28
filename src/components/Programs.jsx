import { useCallback, useEffect, useRef, useState } from "react";
import { programs } from "../data.js";

export default function Programs() {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.offsetWidth + 16 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="programs" className="section-y bg-[#0a0b0b]">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <h2 className="h2">
            Our <span className="text-accent">Programs</span>
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              className="round-btn"
              aria-label="Previous programs"
              disabled={edge.start}
              onClick={() => scroll(-1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className="round-btn"
              aria-label="Next programs"
              disabled={edge.end}
              onClick={() => scroll(1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <ul
          ref={ref}
          onScroll={update}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {programs.map((p) => (
            <li
              key={p.title}
              className="relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[46%] lg:w-[calc((100%-3rem)/4)]"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-6 text-xl font-bold">
                {p.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
