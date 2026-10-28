import { site, stats } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section-y bg-[#101114]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ">
        <div>
          <h2 className="h2">
            Built for people who <span className="text-accent">show up</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-white/70">
            Draftworks is a training floor for lifters, athletes and
            first-timers. We keep the equipment serious, the coaching honest and
            the space clean, so you can focus on getting stronger every week.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-white/70">
            Whether you want to lift heavier, lose fat or just build a habit,
            our coaches write a plan around you and stay with you until it
            works.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-4xl font-bold text-accent md:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-1 text-sm text-white/60">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <img
          src={site.about}
          alt="Athlete deadlifting in front of the rack wall"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
