import { site } from "../data.js";

// Background and cut-out share the same size and object-position, so they line up exactly.
// The headline sits between the two layers, so the athlete overlaps it.
const layer =
  "absolute inset-0 h-full w-full select-none object-cover object-end lg:object-center";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <img
        src={site.heroBg}
        // src="./assets/bg.webp"
        // src="https://plus.unsplash.com/premium_photo-1661700234501-56b4a5deec63?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt=""
        width="1365"
        height="768"
        fetchPriority="high"
        className={`${layer} transform -scale-x-100`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/25 to-transparent md:from-bg/70" />

      <div className="absolute inset-x-0 top-[19svh] z-10 hidden lg:block">
        <h1 className="rise container-x text-[clamp(4.5rem,15vw,15rem)] font-black uppercase leading-[.88] tracking-tight">
          <span className="block">Train</span>
          <span className="block text-accent">Hard.</span>
        </h1>
      </div>

      {/* <img
        src={site.heroWoman}
        alt="Athlete setting up for a heavy deadlift"
        width="1365"
        height="768"
        className="absolute inset-x-0 bottom-0 h-[90%] w-full select-none object-contain object-bottom pointer-events-none z-20"
      /> */}
      <div className="absolute inset-x-0 bottom-0 z-[25] h-44 bg-gradient-to-t from-[#101114] to-transparent" />

      <div className="container-x relative z-30 flex min-h-[100svh] flex-col justify-end pb-12 md:pb-16">
        <h1 className="rise container-x text-[clamp(4.5rem,15vw,15rem)] font-black uppercase leading-[.88] tracking-tight lg:hidden px-0 pb-4">
          <span className="block">Train</span>
          <span className="block text-accent">Hard.</span>
        </h1>
        <p
          className="rise max-w-md text-base text-white/85 md:text-lg"
          style={{ animationDelay: ".2s" }}
        >
          It doesn’t matter if your goal is to get stronger, burn fat, or to
          just stay fit our world class coaches will guide you every step of the
          way.
        </p>
        <div
          className="rise mt-6 flex flex-wrap gap-3"
          style={{ animationDelay: ".3s" }}
        >
          <a
            href="https://walink.me/aqte8o"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Join Now
          </a>
          <a
            href="#programs"
            rel="noopener noreferrer"
            className="btn btn-outline bg-bg/40 backdrop-blur-sm"
          >
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
}
