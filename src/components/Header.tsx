import { useEffect, useState } from "react";
import { navLinks, shop } from "../data/shop";
import { cn } from "../utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        solid
          ? "bg-coal/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center gap-6">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-[19px] font-bold uppercase leading-none tracking-[0.02em] text-white"
          aria-label={`${shop.name} — home`}
        >
          Aiwa<span className="text-tang">.</span>Fruits
        </a>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-[13px] font-normal tracking-wide text-cream/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="ml-4 hidden h-10 items-center rounded-[5px] bg-tang px-5 text-[13px] font-medium text-[#1d1205] shadow-[0_10px_24px_-10px_rgba(246,146,30,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-tang-light lg:inline-flex"
        >
          Visit Us
        </a>

        <button
          type="button"
          className="-mr-2 ml-auto inline-flex h-12 w-12 items-center justify-center rounded-md text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M10 17h10" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/5 bg-coal/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Mobile" className="shell pb-6 pt-2">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/5">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-13 items-center text-[15px] font-normal text-cream/90 active:text-tang"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex h-12 items-center justify-center rounded-[5px] bg-tang text-sm font-medium text-[#1d1205]"
          >
            Visit Us
          </a>
        </nav>
      </div>
    </header>
  );
}
