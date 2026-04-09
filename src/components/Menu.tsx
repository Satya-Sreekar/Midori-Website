import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Star, UtensilsCrossed, Coffee } from "lucide-react"
import { SectionWrapper } from "@/components/SectionWrapper"
import { menuItems, categories, type MenuItem } from "@/data/menu"
import { beverageItems, beverageCategories, type BeverageItem } from "@/data/beverages"
import { cn } from "@/lib/utils"

function MenuCard({ item, index }: { item: MenuItem | BeverageItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-card rounded-xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center rounded-sm flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
            </div>
            {item.isPopular && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/15 text-accent text-xs font-medium rounded-full">
                <Star className="w-3 h-3 fill-accent" />
                Popular
              </span>
            )}
          </div>
          <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <span className="text-base font-semibold text-accent whitespace-nowrap">
            ₹{item.price}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function MenuSection() {
  const [menuType, setMenuType] = useState<"food" | "beverage">("food")
  const [activeCategory, setActiveCategory] = useState<string>("salads-soups")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const currentCategories = menuType === "food" ? categories : beverageCategories
  const currentItems = menuType === "food" ? menuItems : beverageItems
  const filtered = currentItems
    .filter((item) => item.category === activeCategory)
    .sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0))

  const handleMenuTypeChange = (type: "food" | "beverage") => {
    setMenuType(type)
    setActiveCategory(type === "food" ? "salads-soups" : "hot-brews")
  }

  return (
    <SectionWrapper id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our Menu
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Every dish is crafted with care for vegetarian diners who love global flavours.
          </motion.p>
          <motion.div
            className="w-16 h-1 bg-accent rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Food / Beverage Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => handleMenuTypeChange("food")}
            className={cn(
              "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2",
              menuType === "food"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {menuType === "food" && (
              <motion.div
                layoutId="menuTypeTab"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <UtensilsCrossed className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Food Menu</span>
          </button>
          <button
            onClick={() => handleMenuTypeChange("beverage")}
            className={cn(
              "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2",
              menuType === "beverage"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {menuType === "beverage" && (
              <motion.div
                layoutId="menuTypeTab"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Coffee className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Beverage Menu</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {currentCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap",
                  activeCategory === cat.key
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
          >
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
