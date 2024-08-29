import HomePage from "@/components/HomePage";
import Image from "next/image";
import { Macbook } from "@/components/MacBook";
import ProjectsPage from "@/components/ProjectsPage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import { Footer } from "@/components/Footer";
import Profiles from "@/components/Profiles";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen antialiased text-white dark:bg-grid-white/[0.08]  bg-grid-white/[0.02]"
        id="home"
      >
        <HomePage />

        <Macbook />

        <div id="projects">
          <ProjectsPage />
        </div>
        <Profiles />

        <AboutPage />
        <ContactPage />

        <Footer />
      </main>
    </>
  );
}
