import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Craft } from "@/components/craft";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Tech } from "@/components/tech";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Craft />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
