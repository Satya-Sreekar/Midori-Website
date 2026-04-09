export interface NavLink {
  label: string
  href: string
  isRoute?: boolean
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Banquet", href: "/banquet", isRoute: true },
  { label: "Kitty Party", href: "/kitty-party", isRoute: true },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]
