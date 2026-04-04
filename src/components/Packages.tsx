import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, ChevronUp, Crown, Award, Medal, PartyPopper, Users } from "lucide-react"
import { SectionWrapper } from "@/components/SectionWrapper"
import { cn } from "@/lib/utils"
import {
  kittyPartyPackage,
  kittyPartyTerms,
  banquetPackages,
  banquetTerms,
  banquetMenu,
  type Package,
} from "@/data/packages"

// ── Tier colors ──────────────────────────────────────────────────────

const tierStyles = {
  silver: {
    badge: "bg-gray-200 text-gray-700",
    border: "border-gray-300",
    highlight: "text-gray-600",
    icon: Medal,
  },
  gold: {
    badge: "bg-yellow-100 text-yellow-700",
    border: "border-yellow-400",
    highlight: "text-yellow-600",
    icon: Award,
  },
  platinum: {
    badge: "bg-blue-50 text-blue-700",
    border: "border-blue-400",
    highlight: "text-blue-600",
    icon: Crown,
  },
}

// ── Kitty Party Card ─────────────────────────────────────────────────

function KittyPartyCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
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
          <div key={cat.name} className="border-b border-border/40 pb-4 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-heading text-lg font-semibold text-primary">
                {cat.name}
              </h4>
              <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
                {cat.selection}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <Check className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
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
  )
}

// ── Banquet Tier Card ────────────────────────────────────────────────

function BanquetTierCard({
  pkg,
  index,
  isPopular,
}: {
  pkg: Package
  index: number
  isPopular?: boolean
}) {
  const tier = pkg.tier ?? "silver"
  const style = tierStyles[tier]
  const TierIcon = style.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative bg-card rounded-2xl border shadow-sm overflow-hidden flex flex-col",
        isPopular ? `${style.border} border-2 shadow-md` : "border-border/50",
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
          Popular
        </div>
      )}

      {/* Header */}
      <div className="px-6 pt-7 pb-5 text-center">
        <div className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-3", style.badge)}>
          <TierIcon className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide">{pkg.name}</span>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className={cn("font-heading text-3xl font-bold", style.highlight)}>
            ₹{pkg.price.toLocaleString("en-IN")}
          </span>
          <span className="text-muted-foreground text-sm">+ tax / head</span>
        </div>
      </div>

      {/* Inclusions */}
      <div className="flex-1 px-6 pb-4">
        <ul className="space-y-3">
          {pkg.categories.map((cat) => (
            <li key={cat.name} className="flex items-start gap-2.5 text-sm">
              <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">
                <span className="font-medium">{cat.name}</span>
                {cat.selection && (
                  <span className="text-muted-foreground ml-1">({cat.selection})</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 mt-auto">
        <a
          href={`https://wa.me/916309051237?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20${pkg.name}%20Banquet%20Package.`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "block w-full text-center font-medium py-3 rounded-xl transition-colors",
            isPopular
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-muted hover:bg-muted/80 text-foreground",
          )}
        >
          Enquire Now
        </a>
      </div>
    </motion.div>
  )
}

// ── Banquet Menu Drawer ──────────────────────────────────────────────

function BanquetMenuDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="mx-auto flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {open ? "Hide Full Banquet Menu" : "View Full Banquet Menu"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(banquetMenu).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-card rounded-xl border border-border/50 p-5"
                >
                  <h4 className="font-heading text-base font-semibold text-primary mb-3 border-b border-border/40 pb-2">
                    {category}
                  </h4>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-secondary mt-1">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Banquet Terms */}
            <div className="mt-8 bg-muted/50 rounded-xl p-5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-3">Terms & Conditions</p>
              <ol className="space-y-1.5 list-decimal list-inside">
                {banquetTerms.items.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────────────

export function Packages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState<"kitty" | "banquet">("banquet")

  return (
    <SectionWrapper id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Event Packages
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Celebrate with Midori — curated vegetarian menus for kitty parties,
            birthdays, corporate events, and private gatherings.
          </motion.p>
          <motion.div
            className="w-16 h-1 bg-accent rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("banquet")}
            className={cn(
              "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2",
              activeTab === "banquet"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {activeTab === "banquet" && (
              <motion.div
                layoutId="packageTab"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Users className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Banquet Packages</span>
          </button>
          <button
            onClick={() => setActiveTab("kitty")}
            className={cn(
              "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2",
              activeTab === "kitty"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {activeTab === "kitty" && (
              <motion.div
                layoutId="packageTab"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <PartyPopper className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Kitty Party</span>
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "kitty" ? (
            <motion.div
              key="kitty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <KittyPartyCard />
            </motion.div>
          ) : (
            <motion.div
              key="banquet"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {banquetPackages.map((pkg, i) => (
                  <BanquetTierCard
                    key={pkg.id}
                    pkg={pkg}
                    index={i}
                    isPopular={pkg.tier === "gold"}
                  />
                ))}
              </div>
              <BanquetMenuDrawer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
