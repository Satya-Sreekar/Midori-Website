import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { navLinks } from "@/data/navigation"
import { asset } from "@/lib/assets"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const zomatoLink = {
  label: "Zomato",
  href: "https://www.zomato.com/hyderabad/midori-cafe-and-restaurant-himayath-nagar",
}

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/midori.dining/" },
]

export function Footer() {
  const location = useLocation()
  const isSubPage = location.pathname !== "/"

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand + Socials */}
          <div className="flex items-center gap-5">
            <img src={asset("/images/logo.png")} alt="Midori" className="h-14 w-auto" style={{ filter: 'brightness(0) invert(1) brightness(0.88) sepia(0.2)' }} />
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href={zomatoLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={zomatoLink.label}
                className="h-9 px-3 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <img
                  src={asset("/images/zomato-2.svg")}
                  alt="Zomato"
                  className="h-3.5 w-auto brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Quick Links - inline */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => {
              const className = "text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              if (link.isRoute) {
                return (
                  <Link key={link.href} to={link.href} className={className}>
                    {link.label}
                  </Link>
                )
              }
              if (isSubPage) {
                return (
                  <Link key={link.href} to={`/${link.href}`} className={className}>
                    {link.label}
                  </Link>
                )
              }
              return (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        <Separator className="my-6 bg-primary-foreground/15" />

        <div className="flex flex-col items-center gap-2 text-xs text-primary-foreground/50 text-center">
          <p>&copy; {new Date().getFullYear()} Midori Cafe & Restaurant. All rights reserved.</p>
          <p>5th Floor, Hari Om Arjuna Tower, Above Max Showroom, Opposite McDonald&apos;s, Himayath Nagar, Hyderabad</p>
          <p>+91 63090 51237</p>
        </div>
      </div>
    </footer>
  )
}
