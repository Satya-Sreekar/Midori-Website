import { motion } from "framer-motion"
import { ExternalLink, ArrowUp } from "lucide-react"
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

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/midori.dining/" },
  { icon: ExternalLink, label: "Zomato", href: "https://www.zomato.com/hyderabad/midori-cafe-and-restaurant-himayath-nagar" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src={asset("/images/logo.jpg")} alt="Midori" className="h-12 w-24 rounded-lg object-cover" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Where Global Cuisine Meets Vegetarian Flavours! Pure veg, no-onion-no-garlic,
              Jain-friendly dining in Himayath Nagar, Hyderabad.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>5th Floor, Hari Om Arjuna Tower</p>
              <p>Ashok Nagar Road, Himayath Nagar</p>
              <p>Hyderabad, Telangana 500020</p>
              <p className="pt-2">+91 63090 51237</p>
              <div className="pt-2">
                <p className="font-medium text-primary-foreground mb-1">Opening Hours</p>
                <p>Monday - Sunday</p>
                <p>12:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Midori Cafe & Restaurant. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
