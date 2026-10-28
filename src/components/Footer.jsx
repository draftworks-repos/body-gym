import { site } from "../data.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-gradient-to-b from-bg via-[#2b1915] to-[#a8340f] pt-16 text-center">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between relative z-10">
        <Link
          to="/#home"
          aria-label="Draftworks home"
          className="cursor-pointer transition-opacity duration-200 hover:opacity-75 mx-auto sm:mx-0"
        >
          <img
            src={site.logo}
            alt="Draftworks"
            className="h-14 w-auto"
            width="121"
            height="56"
            loading="lazy"
          />
        </Link>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-8 gap-y-3 text-sm justify-center"
        >
          <p>
            <Link
              to="/#home"
              className="cursor-pointer text-white/80 transition-colors duration-200 hover:text-[#ff6b35]"
            >
              Home
            </Link>
          </p>
          <p>
            <Link
              to="/#about"
              className="cursor-pointer text-white/80 transition-colors duration-200 hover:text-[#ff6b35]"
            >
              About Us
            </Link>
          </p>
          <p>
            <Link
              to="/#programs"
              className="cursor-pointer text-white/80 transition-colors duration-200 hover:text-[#ff6b35]"
            >
              Programs
            </Link>
          </p>
          <p>
            <Link
              to="/#gallery"
              className="cursor-pointer text-white/80 transition-colors duration-200 hover:text-[#ff6b35]"
            >
              Gallery
            </Link>
          </p>
          <p>
            <Link
              to="/contact"
              className="cursor-pointer text-white/80 transition-colors duration-200 hover:text-[#ff6b35]"
            >
              Contact Us
            </Link>
          </p>
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="mt-14 select-none text-center font-display text-[clamp(5.5rem,27vw,26rem)] leading-[.82] text-white"
      >
        YOUR GYM
      </div>
      <div className="container-x flex flex-col gap-2 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 text-xs text-white/80 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Draftworks. All rights reserved.
        </p>
        <p>
          Design & Developed by{" "}
          <a
            href="https://draftworks.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            draftworks.in
          </a>
        </p>
      </div>
    </footer>
  );
}
