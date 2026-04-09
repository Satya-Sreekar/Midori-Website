import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, ChevronUp, Crown, Award, Medal, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  banquetPackages,
  banquetTerms,
  banquetMenu,
  type Package,
} from "@/data/packages"

const tierStyles = {
  silver: {
    badge: "bg-[#D8D1C6] text-[#413029]",
    border: "border-[#D8D1C6]",
    highlight: "text-[#5D381E]",
    icon: Medal,
  },
  gold: {
    badge: "bg-[#CE995F]/20 text-[#5D381E]",
    border: "border-[#CE995F]",
    highlight: "text-[#CE995F]",
    icon: Award,
  },
  platinum: {
    badge: "bg-[#516857]/15 text-[#436831]",
    border: "border-[#516857]",
    highlight: "text-[#516857]",
    icon: Crown,
  },
}

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative bg-card rounded-2xl border shadow-sm overflow-hidden flex flex-col",
        isPopular ? `${style.border} border-2 shadow-md` : "border-border/50",
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
          Popular
        </div>
      )}

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

function BanquetTermsDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        Terms & Conditions
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ol className="mt-3 space-y-1.5 text-sm text-muted-foreground list-decimal list-inside bg-muted/50 rounded-xl p-5">
              {banquetTerms.items.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function BanquetPage() {
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
            Banquet Packages
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Celebrate with Midori — curated vegetarian menus for birthdays, corporate events, and private gatherings. Minimum 50 guests.
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </div>

        {/* Tier Cards */}
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

        {/* Full Menu */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">
              Full Banquet Menu
            </h2>
            <div className="w-12 h-0.5 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(banquetMenu).map(([category, items]) => (
              <div
                key={category}
                className="bg-card rounded-xl border border-border/50 p-5 hover:border-accent/30 transition-colors"
              >
                <h4 className="font-heading text-base font-semibold text-primary mb-3 border-b border-accent/20 pb-2">
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

          <BanquetTermsDropdown />
        </div>
      </div>
    </div>
  )
}
