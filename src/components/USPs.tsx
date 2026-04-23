import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Leaf,
  Sparkles,
  Sun,
  PartyPopper,
  Users,
  Music,
  Wheat,
  Cake,
  ShieldCheck,
  CalendarDays,
  Tv,
  Briefcase,
} from "lucide-react"
import { SectionWrapper } from "@/components/SectionWrapper"

const usps = [
  { icon: Leaf, title: "Pure Vegetarian Menu" },
  { icon: Sparkles, title: "Pure Jain Food" },
  { icon: Sun, title: "Outdoor Cafe" },
  { icon: PartyPopper, title: "Kitty Party Packages" },
  { icon: Users, title: "Banquet Space for up to 150 Pax" },
  { icon: Music, title: "Live Music on Weekends" },
  { icon: Wheat, title: "Breads Made In-House" },
  { icon: Cake, title: "Cakes Made In-House, Ready in 30 Minutes" },
  { icon: ShieldCheck, title: "No Ajinomoto or Artificial Colours" },
  { icon: CalendarDays, title: "Seasonal Dishes & Drinks Every 2 Months" },
  { icon: Tv, title: "Live Match Screening" },
  { icon: Briefcase, title: "Open to Events & Workshops" },
]

export function USPs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <SectionWrapper id="usps" className="bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.span
            className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            What Sets Us Apart
          </motion.span>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The Midori Experience
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              className="flex flex-col items-center text-center bg-card rounded-2xl border border-border/50 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-3">
                <usp.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-primary leading-snug">
                {usp.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
