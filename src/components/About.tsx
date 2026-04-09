import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, UtensilsCrossed, Clock } from "lucide-react"
import { SectionWrapper } from "@/components/SectionWrapper"
import { asset } from "@/lib/assets"

const stats = [
  { icon: Leaf, label: "Pure Vegetarian", value: "100%" },
  { icon: UtensilsCrossed, label: "Global Dishes", value: "70+" },
  { icon: Clock, label: "Est.", value: "2025" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <SectionWrapper id="about" className="bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <div>
            <motion.span
              className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.span>

            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Global Flavours,
            </motion.h2>
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-accent mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Vegetarian Soul
            </motion.h2>

            <motion.div
              className="w-16 h-1 bg-accent rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              What began as a spontaneous idea soon grew roots, fueled by a shared love for food
              and the joy of serving it with soul. The one thing they all craved but could never find,
              a place in the city that served scrumptious, pure vegetarian food from around the world.
              What began as simple conversations slowly grew into something much bigger.
            </motion.p>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Midori is a celebration of all things vibrant, fresh, and wholeheartedly vegetarian.
              A space where global cuisine meets under one roof, without compromise. Whether you're
              craving comfort or discovery, every dish here is crafted to nourish both palate and spirit.
            </motion.p>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              This is where families gather, friends reconnect, couples linger, and every generation
              finds something to love. Midori isn't just a place to eat, it's a place to belong.
            </motion.p>

            <motion.p
              className="text-accent font-heading text-lg font-semibold italic mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Where the greener side is always the brighter one.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={asset("/images/Day Light/_DSC0037.jpg")}
                alt="Midori Cafe Interior with MIDORI sign and green chairs"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-secondary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
