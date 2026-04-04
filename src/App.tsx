import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { MenuSection } from "@/components/Menu"
import { Packages } from "@/components/Packages"
import { Gallery } from "@/components/Gallery"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Packages />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
