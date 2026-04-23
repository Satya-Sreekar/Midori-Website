import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { USPs } from "@/components/USPs"
import { MenuSection } from "@/components/Menu"
import { Packages } from "@/components/Packages"
import { Gallery } from "@/components/Gallery"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { BanquetPage } from "@/pages/BanquetPage"
import { KittyPartyPage } from "@/pages/KittyPartyPage"

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <USPs />
      <Gallery />
      <MenuSection />
      <Packages />
      <Testimonials />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/banquet" element={<BanquetPage />} />
          <Route path="/kitty-party" element={<KittyPartyPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
