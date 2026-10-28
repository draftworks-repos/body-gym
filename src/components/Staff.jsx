import { staff } from "../data.js";

export default function Staff() {
  return (
    <section id="staff" className="section-y bg-[#101114]">
      <div className="container-x">
        <h2 className="h2">
          Meet our <span className="text-accent">coaches</span>
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((s) => (
            <li key={s.name} className="overflow-hidden rounded-3xl bg-card">
              <div className={`aspect-[4/5] w-full`}>
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className={`h-full w-full ${s.cutout ? "object-contain object-bottom" : "object-cover object-top"}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="mt-1 text-sm text-accent">{s.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
