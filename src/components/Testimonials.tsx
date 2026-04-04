import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionWrapper } from "@/components/SectionWrapper"
import { testimonials } from "@/data/testimonials"
import { Button } from "@/components/ui/button"

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]!

  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.span
            className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Kind Words
          </motion.span>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            What Our Guests Say
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50 overflow-hidden min-h-[280px] flex flex-col justify-center">
            {/* Decorative quote */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/15" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating
                          ? "text-accent fill-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-heading text-lg md:text-xl text-foreground italic leading-relaxed mb-8">
                  "{current.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-heading font-semibold text-primary text-lg">{current.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.date}
                    {current.source && <span className="ml-1">· {current.source}</span>}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-border hover:bg-accent hover:text-white hover:border-accent"
                onClick={handlePrev}
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1)
                      setCurrentIndex(i)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-6 bg-accent"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-border hover:bg-accent hover:text-white hover:border-accent"
                onClick={handleNext}
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
