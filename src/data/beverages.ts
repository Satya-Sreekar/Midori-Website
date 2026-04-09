export interface BeverageItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  isPopular?: boolean
}

export const beverageItems: BeverageItem[] = [
  // Hot Brew Milks
  { id: "hb1", name: "Espresso", description: "A pressure-extracted classic topped with a velvety crema", price: "145", category: "hot-brews" },
  { id: "hb2", name: "Americano", description: "A simple coffee drink made by diluting espresso with hot water — bold and unsweetened", price: "195", category: "hot-brews" },
  { id: "hb3", name: "Cappuccino", description: "A harmonious blend of espresso, steamed milk, and foam — a true coffee classic", price: "235", category: "hot-brews" },
  { id: "hb4", name: "Cafe Latte", description: "Smooth and creamy, the perfect milk-to-espresso ratio for a comforting sip", price: "265", category: "hot-brews", isPopular: true },
  { id: "hb5", name: "Cafe Mocha", description: "A chocolatey embrace from your espresso shot, frothed with steamed milk for a cozy, sweet treat", price: "255", category: "hot-brews" },
  { id: "hb6", name: "Biscoff Latte", description: "Midori's classic blend of espresso served with milk and Biscoff paste", price: "295", category: "hot-brews", isPopular: true },
  { id: "hb7", name: "Irish Coffee", description: "A black coffee sweetened with Irish syrup, topped with cream for a comforting indulgence", price: "275", category: "hot-brews" },
  { id: "hb8", name: "Affogato", description: "Your favorite vanilla ice cream drowned in hot espresso — a classic dessert-beverage fusion", price: "275", category: "hot-brews" },
  { id: "hb9", name: "Matcha Latte", description: "Made by combining matcha powder, milk, and sweetener for a smooth, earthy flavor", price: "295", category: "hot-brews" },
  { id: "hb10", name: "Choco-Nut Latte", description: "A delightful fusion of chocolate and hazelnut flavors in a rich, creamy latte", price: "295", category: "hot-brews" },
  { id: "hb11", name: "Flat White", description: "A smooth and elegant coffee with fine milk texture and a bold caffeine kick", price: "235", category: "hot-brews" },

  // Midori Special Iced Coffee
  { id: "ic1", name: "Iced Americano", description: "Chilled espresso diluted with cold water for a refreshing, bold coffee", price: "215", category: "iced-coffee" },
  { id: "ic2", name: "Iced Hot Chocolate", description: "Rich chocolate blended with cold milk and ice for a chilled indulgence", price: "295", category: "iced-coffee" },
  { id: "ic3", name: "Iced Latte", description: "Classic or Caramel — espresso and cold milk over ice", price: "235/275", category: "iced-coffee", isPopular: true },
  { id: "ic4", name: "Coffee Creamy Marshmallow", description: "A dreamy blend of coffee, cream, and fluffy marshmallow", price: "295", category: "iced-coffee" },
  { id: "ic5", name: "Iced Matcha Latte", description: "Chilled matcha with milk over ice — earthy and refreshing", price: "295", category: "iced-coffee" },
  { id: "ic6", name: "Cranberry Cold Coffee", description: "A unique fusion of cold coffee with tangy cranberry notes", price: "255", category: "iced-coffee" },
  { id: "ic7", name: "Vietnamese Iced Coffee", description: "Bold dark roast coffee with sweetened condensed milk over ice", price: "265", category: "iced-coffee" },

  // Cold Infusion Brew
  { id: "ci1", name: "Apple & Cinnamon Cold Brew", description: "Cold-brewed coffee infused with apple and warm cinnamon spice", price: "285", category: "cold-infusion" },
  { id: "ci2", name: "Tender Coconut Cold Brew", description: "Smooth cold brew blended with fresh tender coconut water", price: "265", category: "cold-infusion" },
  { id: "ci3", name: "Refreshing Orange Sunset", description: "A vibrant cold brew infused with fresh orange for a citrusy twist", price: "285", category: "cold-infusion" },
  { id: "ci4", name: "Hibiscus Cold Brew with Passionfruit", description: "Floral hibiscus meets tropical passionfruit in a cold-brewed creation", price: "285", category: "cold-infusion" },
  { id: "ci5", name: "Cold Brew Tonic", description: "Cold brew coffee topped with sparkling tonic water for a fizzy kick", price: "285", category: "cold-infusion" },

  // Fusion Frappe
  { id: "ff1", name: "Classic Cold Coffee", description: "A timeless blended cold coffee — creamy and refreshing", price: "255", category: "frappes" },
  { id: "ff2", name: "Brownie Frappe", description: "Rich brownie chunks blended with coffee and ice cream", price: "325", category: "frappes" },
  { id: "ff3", name: "Biscoff Frappe", description: "Creamy Biscoff-flavored frappe with a caramelized cookie twist", price: "325", category: "frappes", isPopular: true },
  { id: "ff4", name: "Hazelnut Frappe", description: "Smooth hazelnut frappe blended to perfection", price: "325", category: "frappes" },
  { id: "ff5", name: "Mocha Frappe", description: "A chocolatey coffee frappe for mocha lovers", price: "305", category: "frappes" },
  { id: "ff6", name: "Toffee Nuts Frappe", description: "Sweet toffee and nutty flavors in a blended iced frappe", price: "305", category: "frappes" },
  { id: "ff7", name: "Midori Special KitKat Frappuccino", description: "Our signature blended frappe loaded with KitKat goodness", price: "345", category: "frappes", isPopular: true },

  // Tea Brews
  { id: "tb1", name: "Classic Green Tea", description: "A light, soothing cup of traditional green tea", price: "195", category: "tea-brews" },
  { id: "tb2", name: "Kashmiri Kahwa", description: "An aromatic Kashmiri spiced tea with saffron and nuts", price: "185", category: "tea-brews" },
  { id: "tb3", name: "Hot Toddy", description: "A warming herbal brew with honey and spice", price: "245", category: "tea-brews" },
  { id: "tb4", name: "Rose Tea", description: "Delicate rose-infused tea for a floral sip", price: "205", category: "tea-brews" },
  { id: "tb5", name: "Hibiscus Tea", description: "Tart and vibrant hibiscus flower tea", price: "255", category: "tea-brews" },
  { id: "tb6", name: "Masala Chai", description: "Classic Indian spiced tea brewed to perfection", price: "305", category: "tea-brews", isPopular: true },
  { id: "tb7", name: "Assam Tea", description: "Bold and malty Assam black tea", price: "345", category: "tea-brews" },
  { id: "tb8", name: "Ginger Tea", description: "Spicy ginger tea without milk — clean and invigorating", price: "345", category: "tea-brews" },

  // Infused Iced Tea
  { id: "it1", name: "Lemon Iced Tea", description: "A classic refreshing lemon iced tea", price: "215", category: "iced-tea" },
  { id: "it2", name: "Peach Iced Tea", description: "Sweet peach-infused iced tea", price: "245", category: "iced-tea", isPopular: true },
  { id: "it3", name: "Berry Basil Iced Tea", description: "Mixed berries with fresh basil in chilled tea", price: "245", category: "iced-tea" },
  { id: "it4", name: "Rosemary Lychee Iced Tea", description: "Floral rosemary meets sweet lychee in iced tea", price: "265", category: "iced-tea" },
  { id: "it5", name: "Pomegranate Passion Fruit Iced Tea", description: "Tangy pomegranate and tropical passionfruit iced tea", price: "275", category: "iced-tea" },
  { id: "it6", name: "Refreshing Mint Iced Tea", description: "Cool mint-infused iced tea for a refreshing sip", price: "245", category: "iced-tea" },
  { id: "it7", name: "Iced Hibiscus Tea", description: "Chilled hibiscus flower tea — tart and beautiful", price: "225", category: "iced-tea" },
  { id: "it8", name: "Pineapple Ginger Iced Tea", description: "Tropical pineapple with a spicy ginger kick", price: "265", category: "iced-tea" },

  // Signature Mojitos
  { id: "sm1", name: "Classic Mojito", description: "Fresh mint, lime, and soda — the timeless classic", price: "285", category: "mojitos" },
  { id: "sm2", name: "Yuzu Mojito", description: "Japanese yuzu citrus in a refreshing mojito", price: "295", category: "mojitos" },
  { id: "sm3", name: "Peach Salt Mojito", description: "Sweet peach with a hint of salt for a balanced mojito", price: "295", category: "mojitos" },
  { id: "sm4", name: "Ginger Spiced Mojito", description: "Warm ginger spice meets cool mint and lime", price: "285", category: "mojitos" },
  { id: "sm5", name: "Tamarind Mango Fizzy", description: "Tangy tamarind and sweet mango in a fizzy cooler", price: "285", category: "mojitos" },
  { id: "sm6", name: "Green Apple Fizzy", description: "Crisp green apple in a sparkling fizzy drink", price: "295", category: "mojitos" },
  { id: "sm7", name: "Cranberry Orange", description: "Tart cranberry paired with sweet orange", price: "295", category: "mojitos" },
  { id: "sm8", name: "Watermelon Mojito", description: "Fresh watermelon blended into a cooling mojito", price: "275", category: "mojitos", isPopular: true },
  { id: "sm9", name: "Classic Orange Mojito", description: "Zesty orange twist on the classic mojito", price: "295", category: "mojitos" },
  { id: "sm10", name: "Kiwi Mojito", description: "Tangy kiwi muddled with mint and lime", price: "295", category: "mojitos" },
  { id: "sm11", name: "Refreshing Blue Lagoon", description: "A vibrant blue curacao cooler — tropical and refreshing", price: "275", category: "mojitos" },
  { id: "sm12", name: "Virgin Pina Colada", description: "Creamy coconut and pineapple — tropical paradise in a glass", price: "295", category: "mojitos" },
  { id: "sm13", name: "Chilli Guava", description: "Spicy chilli meets sweet guava for a bold cooler", price: "295", category: "mojitos" },

  // Thick Delight Shakes
  { id: "ts1", name: "Oreo Shake", description: "Creamy Oreo cookie milkshake", price: "255", category: "thick-shakes" },
  { id: "ts2", name: "Biscoff Shake", description: "Caramelized Biscoff cookie blended shake", price: "325", category: "thick-shakes", isPopular: true },
  { id: "ts3", name: "Brownie Shake", description: "Rich brownie chunks in a thick chocolate shake", price: "325", category: "thick-shakes" },
  { id: "ts4", name: "Almond Caramel Shake", description: "Nutty almond meets sweet caramel in a creamy shake", price: "325", category: "thick-shakes" },
  { id: "ts5", name: "Choco Chips Avocado", description: "Creamy avocado shake with chocolate chips", price: "305", category: "thick-shakes" },
  { id: "ts6", name: "Banana Honey Choco", description: "Banana, honey, and chocolate blended together", price: "305", category: "thick-shakes" },
  { id: "ts7", name: "The Gold Digger Shake", description: "Midori Big Shake — our most indulgent creation", price: "345", category: "thick-shakes", isPopular: true },
  { id: "ts8", name: "Four Blast", description: "Creamy, Cookies, Chocolate Cone & Ferrero Rocher — all in one shake", price: "345", category: "thick-shakes" },

  // Classic Shakes
  { id: "cs1", name: "Vanilla Milkshake", description: "Classic creamy vanilla milkshake", price: "245", category: "classic-shakes" },
  { id: "cs2", name: "Strawberry Milkshake", description: "Sweet strawberry blended milkshake", price: "295", category: "classic-shakes" },
  { id: "cs3", name: "Mint Creamy Shamrock", description: "Cool minty milkshake — creamy and refreshing", price: "245", category: "classic-shakes" },
  { id: "cs4", name: "Nutterella Peanut Butter Shake", description: "Nutella and peanut butter blended into a rich shake", price: "265", category: "classic-shakes" },
  { id: "cs5", name: "Oreo Cheesecake Shake", description: "Oreo cookies and cheesecake flavor in a creamy shake", price: "235", category: "classic-shakes" },
  { id: "cs6", name: "Date Banana Cocoa Shake", description: "Dates, banana, and cocoa — naturally sweet and wholesome", price: "265", category: "classic-shakes" },
  { id: "cs7", name: "Bourbon Milk Punch", description: "A creamy, indulgent milk punch with bourbon vanilla notes", price: "235", category: "classic-shakes" },
  { id: "cs8", name: "Red Velvet Cheesecake Shake", description: "Red velvet cake blended into a creamy cheesecake shake", price: "265", category: "classic-shakes" },
  { id: "cs9", name: "Mulberry Milkshake", description: "Sweet and tangy mulberry in a creamy shake", price: "265", category: "classic-shakes" },

  // Cold-Pressed Fresh Juices
  { id: "fj1", name: "Watermelon Juice", description: "Cold-pressed fresh watermelon juice", price: "225", category: "fresh-juices" },
  { id: "fj2", name: "Pineapple Juice", description: "Cold-pressed fresh pineapple juice", price: "225", category: "fresh-juices" },
  { id: "fj3", name: "Orange Juice", description: "Cold-pressed fresh orange juice", price: "225", category: "fresh-juices" },
  { id: "fj4", name: "ABC Juice", description: "Apple, Beetroot & Carrot — a nutrient-rich cold-pressed blend", price: "245", category: "fresh-juices", isPopular: true },
  { id: "fj5", name: "Papaya Juice", description: "Cold-pressed fresh papaya juice", price: "225", category: "fresh-juices" },
  { id: "fj6", name: "Guava Juice", description: "Cold-pressed fresh guava juice (seasonal)", price: "225", category: "fresh-juices" },

  // Other Beverages
  { id: "ob1", name: "Thums Up", description: "Classic Indian cola", price: "125", category: "other-beverages" },
  { id: "ob2", name: "Diet Coke", description: "Sugar-free cola", price: "125", category: "other-beverages" },
  { id: "ob3", name: "Sprite", description: "Lemon-lime sparkling drink", price: "125", category: "other-beverages" },
  { id: "ob4", name: "Water", description: "Mineral water", price: "60", category: "other-beverages" },
  { id: "ob5", name: "Red Bull", description: "Energy drink", price: "255", category: "other-beverages" },
  { id: "ob6", name: "Fresh Lime Soda", description: "Sweet, salt, or mix — freshly squeezed lime with soda", price: "145", category: "other-beverages" },
  { id: "ob7", name: "Real Fruit Tetra Pack", description: "Orange, Pineapple, Mango, Cranberry, or Guava", price: "125", category: "other-beverages" },
  { id: "ob8", name: "Choice of Milk", description: "Almond Milk or Oat Milk", price: "95/85", category: "other-beverages" },
]

export const beverageCategories = [
  { key: "hot-brews", label: "Hot Brews" },
  { key: "iced-coffee", label: "Iced Coffee" },
  { key: "cold-infusion", label: "Cold Infusion" },
  { key: "frappes", label: "Fusion Frappes" },
  { key: "tea-brews", label: "Tea Brews" },
  { key: "iced-tea", label: "Iced Tea" },
  { key: "mojitos", label: "Mojitos" },
  { key: "thick-shakes", label: "Thick Shakes" },
  { key: "classic-shakes", label: "Classic Shakes" },
  { key: "fresh-juices", label: "Fresh Juices" },
  { key: "other-beverages", label: "Other Beverages" },
]
