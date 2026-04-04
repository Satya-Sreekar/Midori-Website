import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("py-20 md:py-28", className)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  )
}
