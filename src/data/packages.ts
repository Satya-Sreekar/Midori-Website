export interface PackageCategory {
  name: string
  selection: string
  items: string[]
}

export interface Package {
  id: string
  name: string
  price: number
  priceLabel: string
  tier?: "silver" | "gold" | "platinum"
  categories: PackageCategory[]
}

export interface PackageTerms {
  title: string
  items: string[]
}

// ── Kitty Party Package ──────────────────────────────────────────────

export const kittyPartyPackage: Package = {
  id: "kitty-party",
  name: "Kitty Party Package",
  price: 699,
  priceLabel: "₹699 + Taxes Per Head",
  categories: [
    {
      name: "Mocktails",
      selection: "Any 1",
      items: ["Classic Mojito", "Refreshing Blue Lagoon", "Fresh Lime Soda"],
    },
    {
      name: "Soup",
      selection: "Any 1",
      items: ["Asian Manchow Soup", "Crème of Tomato", "Sweet Corn Soup"],
    },
    {
      name: "Starters",
      selection: "Any 2",
      items: [
        "Parmesan Cheese Garlic Bread",
        "Chilli Basil Crispy Corn",
        "Avocado Katori Chaat",
        "Jalapeno Cheese Balls",
        "Classic Veg Manchurian",
        "Hara Bhara Kebab",
        "Burmese Parcel",
        "Paneer 65",
        "Paneer Tikka (Malai / Achari / Hariyali)",
      ],
    },
    {
      name: "Dal",
      selection: "Any 1",
      items: ["Dal Tadka", "Dal Makhani"],
    },
    {
      name: "Curries",
      selection: "Any 2",
      items: [
        "Paneer Butter Masala",
        "Malai Kofta Curry",
        "Kashmiri Dum Aloo",
        "Kadai Veg",
      ],
    },
    {
      name: "Rice",
      selection: "Any 1",
      items: ["Jeera Rice", "Classic Fried Rice", "Hyderabadi Veg Dum Biryani"],
    },
    {
      name: "Indian Breads",
      selection: "Any 2",
      items: [
        "Tandoori Roti (Plain / Butter)",
        "Naan (Plain / Butter)",
        "Masala Kulcha",
      ],
    },
    {
      name: "Dessert",
      selection: "Any 1",
      items: [
        "Pistachio Tres Leches",
        "Chocolate Pastry",
        "Chef's Special Dessert",
      ],
    },
  ],
}

export const kittyPartyTerms: PackageTerms = {
  title: "Terms & Conditions",
  items: [
    "Package is available for a minimum group of 10 pax.",
    "Mocktails, soup, and starters will be served within 90 minutes from the time of booking.",
    "The main course will be served unlimited for 90 minutes from the time it begins.",
    "Kindly allow a minimum of 15–20 minutes for preparation.",
    "Not valid on public holidays, festivals. Only for lunch time.",
    "25% advance will be taken at the time of booking.",
    "Government Taxes Applicable On The Bill.",
  ],
}

// ── Banquet Packages ─────────────────────────────────────────────────

export const banquetPackages: Package[] = [
  {
    id: "silver",
    name: "Silver",
    price: 800,
    priceLabel: "₹800 + Tax Per Head",
    tier: "silver",
    categories: [
      { name: "Mocktails", selection: "Any 1", items: [] },
      { name: "Soup", selection: "Any 1", items: [] },
      { name: "Starters", selection: "Any 2", items: [] },
      { name: "Curries", selection: "1 Veg, 1 Paneer", items: [] },
      { name: "Dal", selection: "Any 1", items: [] },
      { name: "Indian Breads", selection: "Any 2", items: [] },
      { name: "Rice", selection: "Any 1", items: [] },
      { name: "Dessert", selection: "Any 1", items: [] },
      { name: "Accompaniments", selection: "", items: [] },
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 1099,
    priceLabel: "₹1,099 + Tax Per Head",
    tier: "gold",
    categories: [
      { name: "Mocktails", selection: "Any 1", items: [] },
      { name: "Soup", selection: "Any 2", items: [] },
      { name: "Starters", selection: "Any 3", items: [] },
      { name: "Pasta / Pizza / Chaat", selection: "Any 2", items: [] },
      { name: "Curries", selection: "2 Veg, 1 Paneer", items: [] },
      { name: "Dal", selection: "Any 1", items: [] },
      { name: "Indian Breads", selection: "Any 2", items: [] },
      { name: "Rice / Noodles", selection: "Any 1", items: [] },
      { name: "Dessert", selection: "Any 2", items: [] },
      { name: "Ice Cream", selection: "Any 1", items: [] },
      { name: "Accompaniments", selection: "6 Varieties", items: [] },
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 1399,
    priceLabel: "₹1,399 + Tax Per Head",
    tier: "platinum",
    categories: [
      { name: "Mocktails", selection: "Any 2", items: [] },
      { name: "Soup", selection: "Any 2", items: [] },
      { name: "Starters", selection: "Any 4", items: [] },
      { name: "Salads", selection: "Any 2", items: [] },
      { name: "Pasta / Pizza / Chaat", selection: "Any 2", items: [] },
      { name: "Curries", selection: "2 Veg, 2 Paneer", items: [] },
      { name: "Dal", selection: "Any 1", items: [] },
      { name: "Indian Breads", selection: "Any 3", items: [] },
      { name: "Rice / Noodles", selection: "Any 2", items: [] },
      { name: "Dessert", selection: "Any 2", items: [] },
      { name: "Ice Cream", selection: "Any 2", items: [] },
      { name: "Accompaniments", selection: "6 Varieties", items: [] },
    ],
  },
]

export const banquetTerms: PackageTerms = {
  title: "Terms & Conditions",
  items: [
    "A minimum guarantee of 50 guests (pax) is required for the packages above.",
    "Packaged water bottles will be charged at ₹20 per person.",
    "Mocktails, soup, and starters will be served within 90 minutes from the time of booking.",
    "The main course will be served unlimited for 90 minutes from the time it begins.",
    "50% Advance to be paid at the time of booking, balance amount to be paid 2 days prior to event.",
    "Final billing will be based on the minimum guaranteed number of guests (pax), the total headcount, or the plate count, whichever is higher.",
    "The host is liable for all damages and losses; management isn't responsible for belongings.",
    "The venue reserves the right of admission.",
  ],
}

// ── Banquet Full Menu (items available to choose from) ───────────────

export const banquetMenu: Record<string, string[]> = {
  Mocktails: [
    "Peach Ice Tea",
    "Green Apple Fizzy",
    "Chilli Guava",
    "Blue Lagoon",
    "Aam Panna",
    "Fruit Punch",
  ],
  Soups: [
    "Crème of Tomato",
    "Manchow",
    "Lemon Coriander",
    "Hot And Sour",
    "Sweet Corn",
    "Almond Broccoli",
  ],
  Starters: [
    "Jalapeño Cheese Bombs",
    "Mushroom Pumpkin Bites",
    "Chilli Basil Crispy Corn",
    "Baby Corn Kurkure with Togarashi Spice",
    "Veg Dragon Roll",
    "Hara Bhara Kebab",
    "Kolkata Beetroot Chop",
    "Dilli Wali Aloo Tikki",
    "Paneer Tikka (Hariyali / Achari / Malai)",
    "Cheese Garlic Breads",
    "Veg Manchurian",
    "Vada Pav",
    "Aloo Tuk",
    "Malai Broccoli",
  ],
  Salads: [
    "Caesar Salad",
    "Watermelon Feta Salad",
    "Russian Salad",
    "Fruit Salad",
  ],
  "Pasta": [
    "Penne / Spaghetti (Choice of Sauce — Alfredo / Arrabiata / Pink)",
  ],
  "Pizza": [
    "Margherita",
    "Mushroom & Corn",
    "Farm House",
    "Paneer Tikka",
    "Pesto Broccoli",
    "Cheese Garlic Bread",
  ],
  Chaat: [
    "Chole Kulche",
    "Pav Bhaji",
    "Banana Tuk",
    "Aloo Tikki",
    "Vada Pav",
  ],
  Curries: [
    "Paneer Tikka Masala",
    "Paneer Butter Masala",
    "Lasooni Palak Paneer",
    "Kashmiri Lal Paneer",
    "Mushroom Matar Masala",
    "Kashmiri Dum Aloo",
    "Mushroom Makai Palak Masala",
    "Malai Kofta",
    "Kaju Masala Curry",
    "Veg Taka Tak",
    "Nawabi Aloo Gobi Masala",
    "Punjabi Kofta",
    "Malai Methi Corn",
  ],
  Dal: [
    "Dal Fry",
    "Dal Tadka",
    "Dal Makhani",
    "Dal Nawabi",
    "Lasooni Palak Dal",
  ],
  Noodles: [
    "Veg Hakka Noodles",
    "Burnt Garlic Noodles",
    "Schezwan Noodles",
    "Singapore Noodles",
  ],
  Rice: [
    "Jeera Rice",
    "Schezwan Fried Rice",
    "Burnt Garlic Fried Rice",
    "Zafrani Paneer Biryani",
    "Zafrani Kashmiri Pulao",
    "Hyderabadi Veg Biryani",
    "Hyderabadi Mushroom-Matar Dum Biryani",
  ],
  "Indian Breads": [
    "Roti (Plain / Butter)",
    "Naan (Plain / Garlic / Butter)",
    "Kulcha (Plain / Masala)",
  ],
  Desserts: [
    "Mango Mousse",
    "Gulab Jamun",
    "Gajar Ka Halwa",
    "Rabri with Gulab Jamun",
    "Chocolate Mousse",
    "Coffee Caramel Tiramisu",
    "Walnut Brownie",
    "Chocolate Pastry",
    "Mango Malai Pastry",
    "Double Ka Meetha",
  ],
  "Ice Cream": [
    "Vanilla",
    "Strawberry",
    "Chocolate",
    "Butterscotch",
  ],
  Accompaniments: [
    "Green Salad",
    "Papad",
    "Pickle",
    "Mint Chutney",
    "Raita",
    "Salan",
  ],
}
