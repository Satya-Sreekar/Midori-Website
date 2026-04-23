import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { SectionWrapper } from "@/components/SectionWrapper"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "5th Floor, Hari Om Arjuna Tower",
      "Above Max Showroom, Opposite McDonald's",
      "Ashok Nagar Road, Himayath Nagar",
      "Hyderabad, Telangana 500020",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 63090 51237", "+91 63090 51238"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon – Thu: 12 PM – 11 PM", "Fri – Sun: 12 PM – 12 AM"],
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <SectionWrapper id="contact" className="bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.span
            className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Visit Us
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Map — first */}
        <motion.div
          className="mb-10 rounded-2xl overflow-hidden border border-border/50 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.234531174511!2d78.48388647516522!3d17.40052888348891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c2e0869c6d%3A0x2c1d1812df61288c!2sMIDORI%20-%20Vegetarian%20Cafe%2C%20Restaurant%20%26%20Banquet!5e0!3m2!1sen!2sin!4v1775498537135!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Midori Cafe Location"
          />
        </motion.div>

        {/* 2x2 Grid — Visit, Call, Hours, WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              className="flex items-start gap-3 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <info.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary text-sm mb-0.5">{info.title}</h3>
                {info.details.map((detail, j) => (
                  <p key={j} className="text-muted-foreground text-xs">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* WhatsApp card — same compact size */}
          <motion.div
            className="flex items-start gap-3 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="w-10 h-10 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-primary text-sm mb-0.5">Enquire on WhatsApp</h3>
              <p className="text-muted-foreground text-xs mb-2">Menu, events or private dining?</p>
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 h-7 text-xs"
                asChild
              >
                <a href="https://wa.me/916309051237" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Chat with us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
