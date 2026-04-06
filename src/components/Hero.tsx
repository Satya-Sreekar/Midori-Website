import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/assets"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={asset("/images/Night Light/_DSC0070.jpg")}
          alt="Midori Cafe Terrace at Night"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ opacity }}>
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8"
        >
          <span className="text-sm font-medium text-white tracking-widest uppercase">
            Pure Vegetarian
          </span>
        </motion.div>

        {/* Logo / Title */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight"
        >
          MIDOR<span className="inline-flex flex-col items-center leading-none text-[0.75em] align-top relative top-[0.075em]"><span>I</span><span className="w-[0.15em] h-[0.15em] bg-current rounded-full -mt-[0.05em]"></span></span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-xl sm:text-2xl md:text-3xl text-white/90 italic mb-3"
        >
          Where Global Cuisine Meets Vegetarian Flavours!
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base text-white/70 mb-10 font-body"
        >
          Korean &middot; Thai &middot; Mediterranean &middot; Italian &middot; North Indian
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base rounded-full shadow-lg"
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/80 bg-white/20 text-white hover:bg-white hover:text-black px-8 py-6 text-base rounded-full backdrop-blur-md shadow-lg"
            asChild
          >
            <a href="https://wa.me/916309051237" target="_blank" rel="noopener noreferrer">
              Enquire Now
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  )
}
