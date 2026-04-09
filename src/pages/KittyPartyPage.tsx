import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, ChevronUp, PartyPopper, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import {
  kittyPartyPackage,
  kittyPartyTerms,
} from "@/data/packages"

export function KittyPartyPage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-14">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Kitty Party Package
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Perfect for groups — a curated vegetarian feast for your kitty party gatherings.
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </div>

        {/* Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="bg-primary px-6 py-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
              <PartyPopper className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground tracking-wide">
                Perfect for Groups
              </span>
            </div>
            <h3 className="font-heading text-3xl font-bold text-primary-foreground mb-2">
              Kitty Party Package
            </h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-heading text-4xl font-bold text-accent">₹699</span>
              <span className="text-primary-foreground/70 text-sm">+ taxes per head</span>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-2">Minimum 10 guests</p>
          </div>

          {/* Categories */}
          <div className="p-6 space-y-4">
            {kittyPartyPackage.categories.map((cat) => (
              <div key={cat.name} className="border-b border-accent/15 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading text-lg font-semibold text-primary">
                    {cat.name}
                  </h4>
                  <span className="text-xs font-medium text-[#5D381E] bg-[#CE995F]/15 rounded-full px-3 py-1">
                    {cat.selection}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-[#516857] flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Terms toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              Terms & Conditions
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden space-y-1.5 text-sm text-muted-foreground"
                >
                  {kittyPartyTerms.items.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent font-medium">{i + 1}.</span>
                      {t}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="px-6 pb-6">
            <a
              href="https://wa.me/916309051237?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20Kitty%20Party%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-secondary hover:bg-secondary/90 text-white font-medium py-3 rounded-xl transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
