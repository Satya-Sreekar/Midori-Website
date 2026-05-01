export interface BeverageItem {
  id: string
  name: string
  description: string
  price: string
  category: string
  isPopular?: boolean
}

export const beverageItems: BeverageItem[] = [
  // ── Hot Coffee ──
  { id: "hb1", name: "Espresso", description: "A pressure-extracted classic topped with a velvety crema.", price: "165", category: "hot-brews" },
  { id: "hb2", name: "Americano", description: "A simple coffee drink made by diluting espresso with hot water — bold & unsweetened.", price: "215", category: "hot-brews" },
  { id: "hb3", name: "Cappuccino", description: "A harmonious blend of espresso, steamed milk & foam — a true coffee classic. (Caramel / Cinnamon / Hazelnut / Gingerbread / Cardamom — ₹285)", price: "255", category: "hot-brews" },
  { id: "hb4", name: "Café Latte", description: "Smooth & creamy — perfect milk-to-espresso ratio. (Caramel / Hazelnut / Cinnamon / Gingerbread / Cardamom — ₹295)", price: "285", category: "hot-brews", isPopular: true },
  { id: "hb5", name: "Hot Chocolate", description: "Decadent chocolate bliss, perfectly sweet & comforting.", price: "295", category: "hot-brews" },
  { id: "hb6", name: "Café Mocha", description: "A chocolatey embrace from your espresso shot, frothed with steamed milk for a cozy, sweet treat.", price: "275", category: "hot-brews" },
  { id: "hb7", name: "Biscoff Latte", description: "Midori's classic blend of espresso served with milk & Biscoff paste.", price: "315", category: "hot-brews", isPopular: true },
  { id: "hb8", name: "Irish Coffee", description: "A black coffee sweetened with Irish syrup, topped with cream for a comforting indulgence.", price: "295", category: "hot-brews" },
  { id: "hb9", name: "Choco-Nut Latte", description: "A delightful fusion of chocolate & hazelnut flavors in a rich, creamy latte.", price: "325", category: "hot-brews" },
  { id: "hb10", name: "Matcha Latte", description: "Matcha powder, milk & sweetener combined for a smooth, earthy flavor.", price: "315", category: "hot-brews" },
  { id: "hb11", name: "Affogato", description: "Vanilla ice cream drowned in hot espresso — a classic dessert-beverage fusion.", price: "295", category: "hot-brews" },
  { id: "hb12", name: "Flat White", description: "A smooth & elegant coffee with fine milk texture & a bold caffeine kick.", price: "255", category: "hot-brews" },
  { id: "hb13", name: "Spanish Latte", description: "A creamy coffee featuring espresso, milk & sweetened condensed milk.", price: "315", category: "hot-brews" },

  // ── Iced Coffee ──
  { id: "ic1", name: "Iced Americano", description: "Chilled espresso diluted with cold water for a refreshing, bold coffee.", price: "235", category: "iced-coffee" },
  { id: "ic2", name: "Iced Hot Chocolate", description: "Rich chocolate blended with cold milk and ice for a chilled indulgence.", price: "315", category: "iced-coffee" },
  { id: "ic3", name: "Iced Latte", description: "Classic / Caramel — espresso and cold milk over ice.", price: "245/285", category: "iced-coffee", isPopular: true },
  { id: "ic4", name: "Iced Matcha Latte", description: "Chilled matcha with milk over ice — earthy and refreshing.", price: "315", category: "iced-coffee" },
  { id: "ic5", name: "Cranberry Cold Coffee", description: "A unique fusion of cold coffee with tangy cranberry notes.", price: "275", category: "iced-coffee" },
  { id: "ic6", name: "Vietnamese Iced Coffee", description: "Bold dark roast coffee with sweetened condensed milk over ice.", price: "285", category: "iced-coffee" },
  { id: "ic7", name: "Espresso Tonic", description: "Espresso shot served over tonic water for a refreshing, fizzy lift.", price: "245", category: "iced-coffee" },
  { id: "ic8", name: "Iced Mocha", description: "Chilled espresso with chocolate and cold milk over ice.", price: "285", category: "iced-coffee" },
  { id: "ic9", name: "Valencia Orange Coffee", description: "Iced coffee infused with bright Valencia orange notes.", price: "245", category: "iced-coffee" },
  { id: "ic10", name: "Espresso Redbull", description: "Espresso layered with Red Bull for a bold caffeine punch.", price: "325", category: "iced-coffee" },

  // ── Fusion Frappes ──
  { id: "ff1", name: "Classic Cold Coffee", description: "A timeless blended cold coffee — creamy and refreshing.", price: "285", category: "frappes" },
  { id: "ff2", name: "Brownie Frappe", description: "Rich brownie chunks blended with coffee and ice cream.", price: "345", category: "frappes" },
  { id: "ff3", name: "Biscoff Frappe", description: "Creamy Biscoff-flavored frappe with a caramelized cookie twist.", price: "345", category: "frappes", isPopular: true },
  { id: "ff4", name: "Hazelnut Frappe", description: "Smooth hazelnut frappe blended to perfection.", price: "345", category: "frappes" },
  { id: "ff5", name: "Mocha Frappe", description: "A chocolatey coffee frappe for mocha lovers.", price: "325", category: "frappes" },
  { id: "ff6", name: "Toffee Nuts Frappe", description: "Sweet toffee and nutty flavors in a blended iced frappe.", price: "325", category: "frappes" },
  { id: "ff7", name: "Midori Special KitKat Frappuccino", description: "Our signature blended frappe loaded with KitKat goodness.", price: "355", category: "frappes", isPopular: true },
  { id: "ff8", name: "Matcha Frappe", description: "Earthy matcha blended with milk and ice for a chilled treat.", price: "315", category: "frappes" },

  // ── Thick Delight Shakes ──
  { id: "ts1", name: "Classic Milkshake", description: "Vanilla / Strawberry / Chocolate — choose your classic flavour.", price: "265/295/295", category: "thick-shakes" },
  { id: "ts2", name: "Oreo Shake", description: "Creamy Oreo cookie milkshake.", price: "285", category: "thick-shakes" },
  { id: "ts3", name: "Biscoff Shake", description: "Caramelized Biscoff cookie blended shake.", price: "345", category: "thick-shakes", isPopular: true },
  { id: "ts4", name: "Brownie Shake", description: "Rich brownie chunks in a thick chocolate shake.", price: "345", category: "thick-shakes" },
  { id: "ts5", name: "Almond Caramel Shake", description: "Nutty almond meets sweet caramel in a creamy shake.", price: "345", category: "thick-shakes" },
  { id: "ts6", name: "Nutella Peanut Butter Shake", description: "Nutella and peanut butter blended into a rich shake.", price: "295", category: "thick-shakes" },
  { id: "ts7", name: "Choco Banana Shake", description: "Banana and chocolate blended into a creamy classic.", price: "315", category: "thick-shakes" },
  { id: "ts8", name: "The Gold Digger Shake", description: "Midori Big Shake — our most indulgent creation.", price: "365", category: "thick-shakes", isPopular: true },
  { id: "ts9", name: "Four Blast", description: "Creamy, Cookies, Chocolate Cone & Ferrero Rocher — all in one shake.", price: "375", category: "thick-shakes" },
  { id: "ts10", name: "Rajbhog Shake", description: "Indulgent Rajbhog-inspired shake with saffron, cardamom & nuts.", price: "345", category: "thick-shakes" },

  // ── Cold Infusion Brew ──
  { id: "ci1", name: "Apple & Cinnamon Cold Brew", description: "Cold-brewed coffee infused with apple and warm cinnamon spice.", price: "295", category: "cold-infusion" },
  { id: "ci2", name: "Hibiscus Cold Brew with Passionfruit", description: "Floral hibiscus meets tropical passionfruit in a cold-brewed creation.", price: "295", category: "cold-infusion" },
  { id: "ci3", name: "Cold Brew Tonic", description: "Cold brew coffee topped with sparkling tonic water for a fizzy kick.", price: "295", category: "cold-infusion" },
  { id: "ci4", name: "Cranberry Cold Brew", description: "Smooth cold brew infused with tart cranberry notes.", price: "295", category: "cold-infusion" },
  { id: "ci5", name: "Vanilla Cold Brew", description: "Cold-brewed coffee with smooth vanilla undertones.", price: "295", category: "cold-infusion" },

  // ── Tea Brews ──
  { id: "tb1", name: "Chamomile Tea", description: "A calming, lightly floral chamomile infusion.", price: "205", category: "tea-brews" },
  { id: "tb2", name: "Classic Green Tea", description: "A light, soothing cup of traditional green tea.", price: "205", category: "tea-brews" },
  { id: "tb3", name: "Kashmiri Kahwa", description: "Aromatic Kashmiri spiced tea with saffron and nuts.", price: "205", category: "tea-brews" },
  { id: "tb4", name: "Hot Toddy", description: "A warming herbal brew with honey and spice.", price: "255", category: "tea-brews" },
  { id: "tb5", name: "Rose Oolong Tea", description: "Iced or Hot — delicate rose-infused oolong tea.", price: "225", category: "tea-brews" },
  { id: "tb6", name: "Hibiscus Tea", description: "Tart and vibrant hibiscus flower tea.", price: "265", category: "tea-brews" },
  { id: "tb7", name: "Masala Chai", description: "Classic Indian spiced tea brewed with milk.", price: "165", category: "tea-brews", isPopular: true },
  { id: "tb8", name: "Ginger Chai", description: "Spicy ginger tea brewed with milk — invigorating.", price: "145", category: "tea-brews" },

  // ── Infused Iced Tea ──
  { id: "it1", name: "Lemon Iced Tea", description: "A classic refreshing lemon iced tea.", price: "235", category: "iced-tea" },
  { id: "it2", name: "Peach Iced Tea", description: "Sweet peach-infused iced tea.", price: "255", category: "iced-tea", isPopular: true },
  { id: "it3", name: "Berry Basil Iced Tea", description: "Mixed berries with fresh basil in chilled tea.", price: "275", category: "iced-tea" },
  { id: "it4", name: "Rose Oolong Iced Tea", description: "Rose-infused oolong served chilled over ice.", price: "265", category: "iced-tea" },
  { id: "it5", name: "Pomegranate Passion Fruit Iced Tea", description: "Tangy pomegranate and tropical passionfruit iced tea.", price: "295", category: "iced-tea" },
  { id: "it6", name: "Refreshing Mint Iced Tea", description: "Cool mint-infused iced tea for a refreshing sip.", price: "265", category: "iced-tea" },
  { id: "it7", name: "Iced Hibiscus Tea", description: "Chilled hibiscus flower tea — tart and beautiful.", price: "245", category: "iced-tea" },

  // ── Boba Tea ──
  { id: "bo1", name: "Choco Hazelnut Boba", description: "Chocolate-hazelnut boba with chewy tapioca pearls.", price: "295", category: "boba-tea" },
  { id: "bo2", name: "Raspberry Boba", description: "Tangy raspberry boba with tapioca pearls.", price: "285", category: "boba-tea" },
  { id: "bo3", name: "Blueberry Boba", description: "Sweet blueberry boba with chewy pearls.", price: "285", category: "boba-tea" },
  { id: "bo4", name: "Bobachinno", description: "A creamy coffee-meets-boba creation.", price: "295", category: "boba-tea" },
  { id: "bo5", name: "Vanilla Boba", description: "Smooth vanilla boba with tapioca pearls.", price: "275", category: "boba-tea" },
  { id: "bo6", name: "Strawberry Sensations Boba", description: "Fresh strawberry boba with chewy pearls.", price: "295", category: "boba-tea", isPopular: true },
  { id: "bo7", name: "Matcha Boba", description: "Earthy matcha boba with tapioca pearls.", price: "295", category: "boba-tea" },
  { id: "bo8", name: "Biscoff Boba", description: "Caramelized Biscoff boba — rich and indulgent.", price: "315", category: "boba-tea" },
  { id: "bo9", name: "Mango Boba", description: "Sweet mango boba with chewy tapioca pearls.", price: "295", category: "boba-tea" },

  // ── Signature Mojitos ──
  { id: "sm1", name: "Classic Mojito", description: "Fresh mint, lime & soda — the timeless classic.", price: "295", category: "mojitos" },
  { id: "sm2", name: "Yuzu Mojito", description: "Japanese yuzu citrus in a refreshing mojito.", price: "315", category: "mojitos" },
  { id: "sm3", name: "Peach Salt Mojito", description: "Sweet peach with a hint of salt for a balanced mojito.", price: "315", category: "mojitos" },
  { id: "sm4", name: "Ginger Spiced Mojito", description: "Warm ginger spice meets cool mint and lime.", price: "295", category: "mojitos" },
  { id: "sm5", name: "Tamarind Mango Fizzy", description: "Tangy tamarind and sweet mango in a fizzy cooler.", price: "295", category: "mojitos" },
  { id: "sm6", name: "Green Apple Fizzy", description: "Crisp green apple in a sparkling fizzy drink.", price: "295", category: "mojitos" },
  { id: "sm7", name: "Cranberry Orange", description: "Tart cranberry paired with sweet orange.", price: "315", category: "mojitos" },
  { id: "sm8", name: "Watermelon Mojito", description: "Fresh watermelon blended into a cooling mojito.", price: "295", category: "mojitos", isPopular: true },
  { id: "sm9", name: "Classic Orange Mojito", description: "Zesty orange twist on the classic mojito.", price: "315", category: "mojitos" },
  { id: "sm10", name: "Kiwi Mojito", description: "Tangy kiwi muddled with mint and lime.", price: "315", category: "mojitos" },
  { id: "sm11", name: "Refreshing Blue Lagoon", description: "A vibrant blue curacao cooler — tropical and refreshing.", price: "285", category: "mojitos" },
  { id: "sm12", name: "Virgin Pina Colada", description: "Creamy coconut and pineapple — tropical paradise in a glass.", price: "325", category: "mojitos" },
  { id: "sm13", name: "Chilli Guava", description: "Spicy chilli meets sweet guava for a bold cooler.", price: "315", category: "mojitos" },

  // ── Cold-Pressed Fresh Juices ──
  { id: "fj1", name: "Watermelon Juice", description: "Cold-pressed fresh watermelon juice.", price: "245", category: "fresh-juices" },
  { id: "fj2", name: "Pineapple Juice", description: "Cold-pressed fresh pineapple juice.", price: "245", category: "fresh-juices" },
  { id: "fj3", name: "Orange Juice", description: "Cold-pressed fresh orange juice.", price: "245", category: "fresh-juices" },
  { id: "fj4", name: "ABC Juice", description: "Apple, Beetroot & Carrot — a nutrient-rich cold-pressed blend.", price: "265", category: "fresh-juices", isPopular: true },
  { id: "fj5", name: "Papaya Juice", description: "Cold-pressed fresh papaya juice.", price: "245", category: "fresh-juices" },
  { id: "fj6", name: "Guava Juice", description: "Cold-pressed fresh guava juice (seasonal).", price: "245", category: "fresh-juices" },

  // ── Other Beverages ──
  { id: "ob1", name: "Thums Up", description: "Classic Indian cola.", price: "145", category: "other-beverages" },
  { id: "ob2", name: "Diet Coke", description: "Sugar-free cola.", price: "145", category: "other-beverages" },
  { id: "ob3", name: "Sprite", description: "Lemon-lime sparkling drink.", price: "145", category: "other-beverages" },
  { id: "ob4", name: "Water", description: "Mineral water (750 ml).", price: "50", category: "other-beverages" },
  { id: "ob5", name: "Red Bull", description: "Energy drink.", price: "275", category: "other-beverages" },
  { id: "ob6", name: "Fresh Lime Soda", description: "Sweet / Salt / Mix — freshly squeezed lime with soda.", price: "165", category: "other-beverages" },
  { id: "ob7", name: "Real Fruit Tetra Pack", description: "Orange / Pineapple / Mango / Cranberry / Guava.", price: "145", category: "other-beverages" },
  { id: "ob8", name: "Choice of Milk", description: "Almond Milk / Oat Milk.", price: "95/85", category: "other-beverages" },
]

export const beverageCategories = [
  { key: "hot-brews", label: "Hot Coffee" },
  { key: "iced-coffee", label: "Iced Coffee" },
  { key: "frappes", label: "Fusion Frappes" },
  { key: "thick-shakes", label: "Thick Shakes" },
  { key: "cold-infusion", label: "Cold Infusion" },
  { key: "tea-brews", label: "Tea Brews" },
  { key: "iced-tea", label: "Iced Tea" },
  { key: "boba-tea", label: "Boba Tea" },
  { key: "mojitos", label: "Mojitos" },
  { key: "fresh-juices", label: "Fresh Juices" },
  { key: "other-beverages", label: "Other Beverages" },
]
