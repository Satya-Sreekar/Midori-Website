export interface GalleryImage {
  src: string
  alt: string
  orientation: "portrait" | "landscape"
}

export const galleryImages: GalleryImage[][] = [
  // Row 1: 3 portrait (tall) images
  [
    { src: "/images/Night Light/_DSC0052-2.jpg", alt: "Terrace dining with golden rattan lanterns and stone wall", orientation: "portrait" },
    { src: "/images/Night Light/_DSC0029.jpg", alt: "Entrance with LED-lit steps and rattan lanterns", orientation: "portrait" },
    { src: "/images/Day Light/_DSC0081.jpg", alt: "Full restaurant view with pendant lights and MIDORI sign", orientation: "portrait" },
  ],
  // Row 2: 2 landscape (wide) images
  [
    { src: "/images/Day Light/_DSC0152.jpg", alt: "Curved booth seating with green velvet chairs", orientation: "landscape" },
    { src: "/images/Day Light/_DSC0330.jpg", alt: "Open-air terrace with wicker chairs and glass roof", orientation: "landscape" },
  ],
  // Row 3: 3 portrait (tall) images
  [
    { src: "/images/Night Light/_DSC0160.jpg", alt: "Indoor dining with warm cylindrical pendant lights", orientation: "portrait" },
    { src: "/images/Day Light/_DSC0380.jpg", alt: "Aerial view of outdoor seating with leaf wall sculptures", orientation: "portrait" },
    { src: "/images/Day Light/_DSC0131.jpg", alt: "Wide-angle interior showing full cafe layout", orientation: "portrait" },
  ],
  // Row 4: 2 landscape (wide) images
  [
    { src: "/images/Day Light/_DSC0450.jpg", alt: "Rattan wall art and warm banquette seating", orientation: "landscape" },
    { src: "/images/Night Light/_DSC0115-2.jpg", alt: "Night terrace with neon art and atmospheric lighting", orientation: "landscape" },
  ],
]
