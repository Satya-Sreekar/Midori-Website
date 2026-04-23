import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "@/components/SectionWrapper"
import { galleryImages } from "@/data/gallery"
import { asset } from "@/lib/assets"
import { cn } from "@/lib/utils"

function GalleryItem({ src, alt, index, orientation }: { src: string; alt: string; index: number; orientation: "portrait" | "landscape" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl cursor-pointer",
        orientation === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
    </motion.div>
  )
}

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <SectionWrapper id="gallery" className="bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.span
            className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Captured Moments
          </motion.span>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Gallery
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Structured Grid — alternating rows of portrait & landscape */}
        <div className="flex flex-col gap-4">
          {galleryImages.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-4 ${
                row[0]?.orientation === "portrait"
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {row.map((img, i) => (
                <GalleryItem
                  key={`${rowIndex}-${i}`}
                  src={asset(img.src)}
                  alt={img.alt}
                  index={rowIndex * 3 + i}
                  orientation={img.orientation}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
