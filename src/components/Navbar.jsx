import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site, navLinks } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const homeLinks = navLinks.filter(
    (link) => link.label !== "Contact" && link.label !== "Contact Us",
  );

  const renderNavLinks = (mobile = false) =>
    homeLinks.map((link) => {
      const href = `/${link.href}`;

      return (
        <li key={link.href}>
          <Link
            to={href}
            onClick={() => setOpen(false)}
            className={
              mobile
                ? "block rounded-2xl px-4 py-3.5 text-base font-medium hover:bg-white/5 hover:text-accent"
                : "transition hover:text-accent"
            }
          >
            {link.label}
          </Link>
        </li>
      );
    });

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[max(1rem,env(safe-area-inset-top))]">
      <div className="container-x">
        <nav
          aria-label="Main"
          className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-card/50 pl-5 pr-2 backdrop-blur-md"
        >
          <Link
            to="/"
            aria-label="Draftworks home"
            onClick={() => setOpen(false)}
          >
            <img
              src={site.logo}
              alt="Draftworks"
              className="h-11 w-auto"
              width="95"
              height="44"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-9 text-sm font-medium text-white/75 md:flex">
            {renderNavLinks()}

            <li>
              <Link to="/contact" className="transition hover:text-accent">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://walink.me/aqte8o"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent min-h-[44px] px-6"
            >
              Join Now
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {open && (
          <ul
            id="mobile-menu"
            className="mt-2 rounded-3xl border border-white/10 bg-card/95 p-3 backdrop-blur-md md:hidden"
          >
            {renderNavLinks(true)}

            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-base font-medium hover:bg-white/5 hover:text-accent"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
