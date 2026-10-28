import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "../data.js";

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const closeRef = useRef(null);
  const touchX = useRef(0);
  const open = index !== null;
  const n = gallery.length;

  const go = useCallback(
    (d) => setIndex((v) => (v === null ? v : (v + d + n) % n)),
    [n],
  );

  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (trigger && trigger.focus) trigger.focus();
    };
  }, [open, go]);

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <section id="gallery" className="section-y bg-[#0a0b0b]">
      <div className="container-x">
        <h2 className="h2">
          Inside <span className="text-accent">the gym</span>
        </h2>
        <ul className="mt-10 columns-2 gap-4 lg:columns-3">
          {gallery.map((g, i) => (
            <li key={i} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${g.alt}`}
                className="block w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full transition duration-500 hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4"
          onClick={() => setIndex(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={gallery[index].src}
            alt={gallery[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85svh] max-w-full rounded-2xl object-contain"
          />
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="round-btn absolute right-4 top-[max(1rem,env(safe-area-inset-top))] bg-bg/70"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="round-btn absolute left-3 top-1/2 -translate-y-1/2 bg-bg/70"
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
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="round-btn absolute right-3 top-1/2 -translate-y-1/2 bg-bg/70"
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
      )}
    </section>
  );
}
