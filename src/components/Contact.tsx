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
    details: ["Monday - Sunday", "12:00 PM - 11:00 PM"],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary text-lg mb-1">{info.title}</h3>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

          {/* Enquiry Card */}
          <motion.div
            className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-3">Have a Question?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Whether it's about our menu, private dining, events, or anything else, reach out to us on WhatsApp and we'll get back to you right away.
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8"
              asChild
            >
              <a href="https://wa.me/916309051237" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Enquire on WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Or call us at{" "}
              <a href="tel:+916309051237" className="text-accent hover:underline">+91 63090 51237</a>
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden border border-border/50 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
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
      </div>
    </SectionWrapper>
  )
}
