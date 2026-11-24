import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hours } from "./components/Hours";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-tang focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#1d1205]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />

        {/* Blue-grey band shared by the About, Fruits and Hours blocks */}
        <div className="relative bg-[linear-gradient(180deg,var(--color-basalt)_0%,#2b363c_45%,var(--color-basalt-deep)_100%)]">
          <div aria-hidden="true" className="grain pointer-events-none absolute inset-0" />
          <About />
          <Hours />
        </div>

        <Contact />
      </main>
    </>
  );
}
