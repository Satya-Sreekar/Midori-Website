export interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  date: string
  source?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sharan",
    rating: 5,
    text: "Excellent service. Very tasty food. Best part is the ambience. It's serene and aesthetic. I would visit multiple times.",
    date: "March 2026",
    source: "Zomato",
  },
  {
    id: "t2",
    name: "Sushma Kalakbandi",
    rating: 5,
    text: "Food is really amazing! We came from far it didn't disappoint.",
    date: "February 2026",
    source: "Zomato",
  },
  {
    id: "t3",
    name: "Md Shoeb Ur Rahman S.",
    rating: 5,
    text: "One of the best vegetarian fine-dining restaurants in Hyderabad that has curated its menu with Italian cuisine with exceptional taste.",
    date: "2026",
    source: "Google",
  },
  {
    id: "t4",
    name: "Curly Tales",
    rating: 5,
    text: "If you're looking for a calm and cosy place to enjoy fresh, wholesome vegetarian food, look no further than Midori in Himayatnagar. This charming new café is all about bringing delicious vegetarian food to your plate.",
    date: "July 2025",
    source: "Press",
  },
  {
    id: "t5",
    name: "Shubham",
    rating: 5,
    text: "Excellent food and wonderful experience. The global fusion concept is truly unique in Hyderabad.",
    date: "March 2026",
    source: "Zomato",
  },
]
