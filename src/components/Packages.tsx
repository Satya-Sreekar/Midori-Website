import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, PartyPopper, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { SectionWrapper } from "@/components/SectionWrapper"

export function Packages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Banquet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/banquet"
              className="group block bg-card rounded-2xl border border-border/50 shadow-sm p-8 hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Banquet Packages
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Silver, Gold & Platinum tiers for 50+ guests. Corporate events, birthdays, and private gatherings.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                View Packages <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          {/* Kitty Party */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/kitty-party"
              className="group block bg-card rounded-2xl border border-border/50 shadow-sm p-8 hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <PartyPopper className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                Kitty Party
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                ₹699 + taxes per head. Perfect for groups of 10+. Full course vegetarian feast.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                View Package <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
