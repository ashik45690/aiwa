import berryBowl from "../assets/berry-bowl.webp";
import orangeSlice from "../assets/orange-slice.webp";
import { shop } from "../data/shop";
import { ButtonLink, Leaf, Reveal } from "./ui";

export function About() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-28 lg:pb-28 lg:pt-28">
      {/* Orange slice resting on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-8 w-24 sm:right-6 sm:top-12 sm:w-36 lg:right-[max(1.5rem,calc(50%_-_600px))] lg:top-10 lg:w-48"
      >
        <Reveal zoom>
          <div className="relative">
            <div className="absolute inset-[4%] rounded-full shadow-[0_26px_44px_4px_rgba(0,0,0,0.5)]" />
            <img
              src={orangeSlice}
              alt=""
              width={414}
              height={420}
              loading="lazy"
              decoding="async"
              className="spin-slow relative block h-auto w-full"
            />
          </div>
        </Reveal>
      </div>

      <div className="shell relative">
        {/* Intro */}
        <div id="about" className="scroll-mt-28 sm:mx-auto sm:max-w-[26rem]">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-tang">
              About {shop.name}
            </p>
            <h2 className="mt-4 text-2xl font-medium leading-snug text-white sm:text-[1.7rem]">
              Nature&rsquo;s Best, Handpicked
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-mist">
              We keep it simple: good fruit, chosen with care. Every piece on our shelves is picked
              for its freshness, colour and taste — so what you take home is always worth sharing.
            </p>
          </Reveal>
        </div>

        {/* Bowl + copy */}
        <div
          id="fruits"
          className="mt-20 grid scroll-mt-24 items-center gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8"
        >
          <div className="relative mx-auto w-[86%] max-w-[440px] lg:col-span-5 lg:mx-0 lg:w-full">
            <Reveal zoom>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-[5%] rounded-full shadow-[-18px_44px_70px_10px_rgba(0,0,0,0.55)]"
                />
                <img
                  src={berryBowl}
                  alt="Bowl of blueberries, strawberries and orange slices with mint leaves"
                  width={746}
                  height={760}
                  loading="lazy"
                  decoding="async"
                  className="relative block h-auto w-full"
                />
                <Leaf className="-right-[4%] bottom-[10%] w-[15%] rotate-[58deg]" delay={-3000} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <h2 className="text-2xl font-medium leading-snug text-white sm:text-[1.7rem]">
                Freshly Sourced Fruits
              </h2>
              <p className="mt-4 max-w-[30rem] text-[15px] leading-[1.85] text-mist">
                From bright citrus to sweet berries and everyday family favourites, our selection
                follows the seasons. Stop by, take your pick and enjoy fruit the way it should be —
                fresh, juicy and full of goodness.
              </p>
              <div className="mt-8">
                <ButtonLink href="#contact">Visit the Shop</ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
