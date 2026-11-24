import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";
import leafImg from "../assets/leaf.webp";

/* ---------- Scroll reveal ---------- */

export function Reveal({
  children,
  className,
  delay = 0,
  zoom = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  zoom?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", zoom && "reveal-zoom", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- Orange button (link) ---------- */

export function ButtonLink({
  href,
  children,
  size = "md",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-[5px] bg-tang font-medium text-[#1d1205]",
        "shadow-[0_14px_30px_-12px_rgba(246,146,30,0.65)] transition duration-300 ease-out",
        "hover:-translate-y-0.5 hover:bg-tang-light hover:shadow-[0_18px_34px_-12px_rgba(246,146,30,0.8)] active:translate-y-0",
        size === "md" ? "h-12 px-7 text-sm" : "h-11 px-5 text-[13px]",
        className,
      )}
    >
      {children}
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 10h12M11 5l5 5-5 5" />
      </svg>
    </a>
  );
}

/* ---------- Decorative floating leaf ---------- */

export function Leaf({
  className,
  delay = 0,
}: {
  /** Position, width and rotation utilities */
  className?: string;
  delay?: number;
}) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <img
        src={leafImg}
        alt=""
        width={176}
        height={300}
        decoding="async"
        className="drift block h-auto w-full drop-shadow-[0_14px_12px_rgba(0,0,0,0.55)]"
        style={{ "--d": `${delay}ms` } as CSSProperties}
      />
    </div>
  );
}

/* ---------- Brand mark (matches the orange emblem in the reference hero) ---------- */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h11M2 20h14M7 28h9" />
      <path d="M22 5h4a15 15 0 0 1 0 30h-4" />
      <path d="M25 13a7 7 0 0 1 0 14" />
    </svg>
  );
}
