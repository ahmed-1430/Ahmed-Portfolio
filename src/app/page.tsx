import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProjectsGrid from "./Components/ProjectsGrid";
import Technologies from "./Components/Technologies";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <ProjectsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
