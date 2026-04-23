import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "@/data/navigation"
import { cn } from "@/lib/utils"
import { asset } from "@/lib/assets"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const isSubPage = location.pathname !== "/"

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const showDark = isScrolled || isSubPage

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          showDark
            ? "bg-[#D8D1C6] shadow-sm"
            : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                "items-center",
                !showDark ? "hidden md:flex" : "flex",
              )}
              onClick={() => {
                if (!isSubPage) {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <img src={asset("/images/logo.png")} alt="Midori" className={cn("h-14 w-auto transition-all duration-500", !showDark && "brightness-0 invert")} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const className = cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-accent/15",
                  showDark
                    ? "text-foreground hover:text-accent"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )
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
              <a
                href="https://wa.me/916309051237"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
              >
                Enquire / Reserve
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-auto p-2 rounded-lg"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={cn("w-6 h-6", showDark ? "text-foreground" : "text-white")} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-card"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between h-20 px-4">
              <img src={asset("/images/logo.png")} alt="Midori" className="h-14 w-auto" />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-8">
              {navLinks.map((link, i) => {
                const itemClass = "block py-4 text-2xl font-heading font-medium text-foreground border-b border-border/50 hover:text-accent transition-colors"
                const anim = {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.1 + i * 0.06 },
                }
                if (link.isRoute) {
                  return (
                    <motion.div key={link.href} {...anim}>
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={itemClass}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                }
                if (isSubPage) {
                  return (
                    <motion.div key={link.href} {...anim}>
                      <Link
                        to={`/${link.href}`}
                        onClick={() => setIsMobileOpen(false)}
                        className={itemClass}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                }
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={itemClass}
                    {...anim}
                  >
                    {link.label}
                  </motion.a>
                )
              })}
              <motion.a
                href="https://wa.me/916309051237"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="mt-8 inline-flex items-center justify-center py-4 text-lg font-medium rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Enquire / Reserve
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
