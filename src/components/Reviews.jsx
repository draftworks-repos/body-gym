import { reviews, site } from "../data.js";

function Stars() {
  return (
    <div
      className="flex gap-0.5 text-accent"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.1L12 17.6 5.7 21.3l1.7-7.1L2 9.5l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-y bg-[#0a0b0b]">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="h2">
            What members say on <span className="text-accent">Google</span>
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold">{reviews.rating}</span>
            <div>
              <Stars />
              <p className="mt-1 text-sm text-white/60">
                {reviews.count} Google reviews
              </p>
            </div>
          </div>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.items.map((r) => (
            <li key={r.name} className="flex flex-col rounded-3xl bg-card p-7">
              <Stars />
              <p className="mt-5 flex-1 leading-relaxed text-white/80">
                {r.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full bg-accent font-bold"
                  aria-hidden="true"
                >
                  {r.name[0]}
                </span>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-white/50">{r.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <a
            href={site.reviewsUrl}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
