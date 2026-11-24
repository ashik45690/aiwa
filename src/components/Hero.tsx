import type { CSSProperties } from "react";
import heroBowl from "../assets/hero-bowl.webp";
import blueberryBowl from "../assets/blueberry-bowl.webp";
import { shop } from "../data/shop";
import { ButtonLink, Leaf, LogoMark } from "./ui";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-coal">
      {/* Slate stone backdrop */}
      <div aria-hidden="true" className="tex-slate absolute inset-0 -z-10 brightness-[1.35] contrast-[0.95]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(24,28,31,0.78)_0%,rgba(27,32,36,0.45)_50%,rgba(30,37,42,0.3)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/35 to-transparent"
      />

      {/* Small blueberry bowl peeking in from the top-right corner */}
      <div
        aria-hidden="true"
        className="hero-rise pointer-events-none absolute -right-10 -top-14 z-10 hidden w-40 xl:block 2xl:w-48"
        style={delay(700)}
      >
        <div className="absolute inset-[5%] rounded-full shadow-[0_24px_40px_6px_rgba(0,0,0,0.6)]" />
        <img src={blueberryBowl} alt="" width={414} height={420} className="relative block h-auto w-full" />
      </div>

      {/* Copy */}
      <div className="shell relative z-10 flex flex-col justify-center pt-32 lg:min-h-[max(700px,min(100svh,880px))] lg:pb-24 lg:pt-28">
        <div className="max-w-[34rem]">
          <LogoMark className="hero-rise h-10 w-12 text-tang" />

          <h1
            className="hero-rise mt-8 text-[2.35rem] font-medium leading-[1.14] tracking-[-0.01em] text-white sm:text-5xl sm:leading-[1.12] lg:text-[2.85rem] xl:text-[3.3rem]"
            style={delay(100)}
          >
            Fresh &amp; Flavourful
            <br />
            Fruits, Every Day
          </h1>

          <p
            className="hero-rise mt-6 max-w-[26rem] text-[15px] leading-[1.85] text-mist"
            style={delay(220)}
          >
            Welcome to {shop.name} — your neighbourhood fruit shop in {shop.location}. Handpicked,
            colourful and full of flavour, ready for you seven days a week.
          </p>

          <div className="hero-rise mt-9" style={delay(340)}>
            <ButtonLink href="#fruits">Explore Our Fruits</ButtonLink>
          </div>
        </div>
      </div>

      {/* Loose leaves on the slate (desktop) */}
      <Leaf className="bottom-[10%] left-[27%] z-10 hidden w-16 rotate-[72deg] lg:block" />
      <Leaf className="bottom-[5%] left-[45%] z-10 hidden w-11 rotate-[128deg] lg:block" delay={-2500} />

      {/* Signature fruit bowl */}
      <div className="relative ml-auto mt-12 w-[96%] max-w-[540px] translate-x-[14%] pb-12 sm:translate-x-[8%] lg:absolute lg:left-[calc(50%_+_1.5rem)] lg:top-[54%] lg:m-0 lg:w-[min(54vw,760px,80svh)] lg:max-w-none lg:-translate-y-1/2 lg:translate-x-0 lg:pb-0">
        <div className="relative">
          <div
            aria-hidden="true"
            className="hero-rise absolute left-[3%] top-[4%] aspect-square w-[87%] rounded-full shadow-[0_50px_90px_14px_rgba(0,0,0,0.7)]"
            style={delay(500)}
          />
          <img
            src={heroBowl}
            alt="Stoneware bowl filled with oranges, strawberries, blueberries, blackberries and fresh mint"
            width={1100}
            height={1049}
            fetchPriority="high"
            className="bowl-in relative block h-auto w-full"
            style={delay(150)}
          />
          <Leaf className="-left-[8%] top-[10%] w-[8.5%] -rotate-[38deg]" delay={-1200} />
        </div>
      </div>
    </section>
  );
}
