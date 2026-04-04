import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "@/components/SectionWrapper"
import { galleryImages } from "@/data/gallery"
import { asset } from "@/lib/assets"

function GalleryItem({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-medium">{alt}</p>
      </div>
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

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} src={asset(img.src)} alt={img.alt} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
