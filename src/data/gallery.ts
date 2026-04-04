export interface GalleryImage {
  src: string
  alt: string
  span?: "tall" | "wide" | "normal"
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/Night Light/_DSC0052-2.jpg", alt: "Terrace dining with golden rattan lanterns and stone wall", span: "tall" },
  { src: "/images/Day Light/_DSC0152.jpg", alt: "Curved booth seating with green velvet chairs" },
  { src: "/images/Day Light/_DSC0330.jpg", alt: "Open-air terrace with wicker chairs and glass roof", span: "wide" },
  { src: "/images/Day Light/_DSC0450.jpg", alt: "Rattan wall art and warm banquette seating" },
  { src: "/images/Night Light/_DSC0029.jpg", alt: "Entrance with LED-lit steps and rattan lanterns", span: "tall" },
  { src: "/images/Day Light/_DSC0081.jpg", alt: "Full restaurant view with pendant lights and MIDORI sign" },
  { src: "/images/Night Light/_DSC0160.jpg", alt: "Indoor dining with warm cylindrical pendant lights", span: "wide" },
  { src: "/images/Night Light/_DSC0115-2.jpg", alt: "Night terrace with neon art and atmospheric lighting" },
  { src: "/images/Day Light/_DSC0380.jpg", alt: "Aerial view of outdoor seating with leaf wall sculptures" },
  { src: "/images/Day Light/_DSC0131.jpg", alt: "Wide-angle interior showing full cafe layout", span: "tall" },
]
