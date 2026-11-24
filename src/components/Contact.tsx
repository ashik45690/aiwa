import type { ReactNode } from "react";
import ctaBowl from "../assets/cta-bowl.webp";
import { shop } from "../data/shop";
import { cn } from "../utils/cn";
import { ButtonLink, Leaf, Reveal } from "./ui";

function Detail({
  icon,
  label,
  children,
  className,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tang/10 text-tang ring-1 ring-tang/20">
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </span>
      <div className="min-w-0">
        <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-mist/80">{label}</dt>
        <dd className="mt-1 break-words text-[15px] font-normal text-cream">{children}</dd>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-36 bg-ink lg:scroll-mt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="tex-slate absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,21,23,0.55),rgba(18,21,23,0.8))]" />
      </div>

      <div className="shell relative grid items-center gap-10 pb-20 pt-16 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-24">
        {/* Bowl overlapping the section above */}
        <div className="relative z-10 order-first mx-auto -mt-36 w-[80%] max-w-[420px] lg:order-last lg:mx-0 lg:-mt-60 lg:w-full lg:max-w-[580px] lg:justify-self-end">
          <Reveal zoom>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-[10%] bottom-[-3%] h-[16%] rounded-[50%] bg-black/80 blur-2xl"
              />
              <img
                src={ctaBowl}
                alt="Wooden bowl of grapefruit, orange wedges, blackberries, raspberries and strawberries with mint"
                width={980}
                height={890}
                loading="lazy"
                decoding="async"
                className="relative block h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        {/* Copy + details */}
        <div className="relative">
          <Reveal>
            <h2 className="text-2xl font-medium leading-snug text-white sm:text-[1.7rem]">
              Visit {shop.name} Today
            </h2>
            <p className="mt-4 max-w-[27rem] text-[15px] leading-[1.85] text-mist">
              Have a question or looking for something in particular? Reach out or drop by the shop
              — we&rsquo;re always happy to help.
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <Detail
                label="Location"
                icon={
                  <>
                    <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" />
                    <circle cx="12" cy="10.5" r="2.3" />
                  </>
                }
              >
                {shop.location}
              </Detail>

              <Detail
                label="Phone"
                icon={
                  <path d="M6.5 4h3l1.5 4-2 1.3a11 11 0 0 0 5.7 5.7L16 13l4 1.5v3A2.5 2.5 0 0 1 17.5 20 13.5 13.5 0 0 1 4 6.5 2.5 2.5 0 0 1 6.5 4z" />
                }
              >
                <span className="tracking-[0.12em]">{shop.phone}</span>
              </Detail>

              <Detail
                className="sm:col-span-2"
                label="Hours"
                icon={
                  <>
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </>
                }
              >
                All 7 days · {shop.opensLabel} – {shop.closesLabel}
              </Detail>

              <Detail
                className="sm:col-span-2"
                label="Email"
                icon={
                  <>
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                    <path d="M4 7l8 6 8-6" />
                  </>
                }
              >
                <a
                  href={`mailto:${shop.email}`}
                  className="underline decoration-tang/50 underline-offset-4 transition-colors hover:text-tang-light hover:decoration-tang"
                >
                  {shop.email}
                </a>
              </Detail>
            </dl>

            <div className="mt-9">
              <ButtonLink href={`mailto:${shop.email}`} size="sm">
                Email Us
              </ButtonLink>
            </div>
          </Reveal>

          <Leaf className="-bottom-14 left-[38%] hidden w-14 rotate-[104deg] lg:block" delay={-1800} />
        </div>
      </div>

      {/* Footer strip */}
      <footer className="relative border-t border-white/[0.06]">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-mist/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {shop.name} · {shop.location}
          </p>
          <p>
            Open all 7 days · {shop.opensLabel} – {shop.closesLabel}
          </p>
        </div>
      </footer>
    </section>
  );
}
