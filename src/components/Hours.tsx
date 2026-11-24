import fruitSpread from "../assets/fruit-spread.webp";
import { shop } from "../data/shop";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";
import { ButtonLink, Reveal } from "./ui";

export function Hours() {
  const isOpen = useOpenStatus();

  return (
    <section id="hours" className="relative scroll-mt-20 pb-36 pt-6 lg:pb-48 lg:pt-10">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-medium leading-tight tracking-[-0.01em] text-white sm:text-[2.6rem]">
            Open Every Day of the Week
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.85] text-mist">
            Morning errands or a late-evening craving — we&rsquo;re here all seven days, from{" "}
            {shop.opensLabel} to {shop.closesLabel}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:mt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-9">
          {/* Photo card */}
          <Reveal className="h-full">
            <div className="group h-full overflow-hidden rounded-lg bg-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]">
              <img
                src={fruitSpread}
                alt="Fruit salad bowl beside a platter of grapefruit, oranges, strawberries and pomegranate on white marble"
                width={1100}
                height={688}
                loading="lazy"
                decoding="async"
                className="block aspect-[16/11] h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] lg:aspect-auto lg:min-h-[380px]"
              />
            </div>
          </Reveal>

          {/* Dark info card */}
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-lg bg-panel px-7 py-10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.04] sm:px-12 sm:py-12">
              <p
                className="inline-flex items-center gap-2.5 self-start rounded-full bg-white/[0.05] py-1.5 pl-3 pr-4 text-xs font-normal text-cream/90"
                role="status"
              >
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    isOpen ? "pulse-dot bg-green-400" : "bg-tang",
                  )}
                />
                {isOpen
                  ? `Open now · until ${shop.closesLabel}`
                  : `Closed now · opens ${shop.opensLabel}`}
              </p>

              <h3 className="mt-6 text-2xl font-medium text-white">Opening Hours</h3>

              <dl className="mt-5 border-y border-white/[0.07] py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <dt className="text-[15px] text-mist">{shop.days}</dt>
                  <dd className="text-[17px] font-medium text-white">
                    {shop.opensLabel} – {shop.closesLabel}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-[15px] leading-[1.85] text-mist">
                Find us at {shop.location}. No closing days — just walk in whenever fresh fruit is
                on your mind.
              </p>

              <div className="mt-8">
                <ButtonLink href={shop.mapsUrl} size="sm" external>
                  Get Directions
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
