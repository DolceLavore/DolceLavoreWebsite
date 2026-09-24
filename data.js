/* ===== EDIT THIS FILE to update the site. No rebuild needed. =====
   Anything marked "PLACEHOLDER" is not real information yet. */
window.SITE = {
  email: "info@dolcelavore.com",
  phone: "",            // PLACEHOLDER: add your phone number
  hours: "",            // PLACEHOLDER: add business hours
  serviceArea: "",      // PLACEHOLDER: add pickup/service area
  orderUrl: "",         // Paste your online-ordering link (Square, Toast, etc.) to activate ORDER NOW buttons
  formEndpoint: "",     // Paste a Formspree/Getform URL to make forms send. Empty = forms show "not connected".
  social: { Instagram: "", Facebook: "", TikTok: "", WhatsApp: "" }, // paste full URLs
  priceNote: "Price available when ordering",

  menu: [
    { group: "French Collection", items: [
      { name: "Les Tartelettes", flavors: ["Lemon", "Strawberry Cream", "Pecan", "Blueberry"], desc: "Buttery shells filled and finished by hand.", price: "" },
      { name: "Les Éclairs", flavors: ["Chocolate", "Madagascar Vanilla", "Raspberry"], desc: "Choux pastry, silky cream, a polished glaze.", price: "" },
      { name: "Canelé de Bordeaux", flavors: [], desc: "Caramelized crust, tender custard center.", price: "" } ]},
    { group: "Italian Collection", items: [
      { name: "Tiramisù Lavoré", flavors: ["Classic", "Strawberry", "Lemon Blueberry"], desc: "Our house take on the Italian favorite.", price: "" } ]},
    { group: "Gourmet Cinnamon Rolls", items: [
      { name: "Peach Cobbler", flavors: [], desc: "", price: "" },
      { name: "Blueberry Lemon", flavors: [], desc: "", price: "" },
      { name: "Strawberry Cheesecake", flavors: [], desc: "", price: "" },
      { name: "Lavoré Classic", flavors: [], desc: "", price: "" } ]},
    { group: "Bundtlet Cakes", items: [
      { name: "Classic Vanilla", flavors: [], desc: "", price: "" },
      { name: "Chocolate", flavors: [], desc: "", price: "" },
      { name: "Italian Cream", flavors: [], desc: "", price: "" },
      { name: "Carrot", flavors: [], desc: "", price: "" },
      { name: "Apple Pie", flavors: [], desc: "", price: "" },
      { name: "Red Velvet", flavors: [], desc: "", price: "" } ]}
  ],

  // Add real events here. Leave empty [] to show the "no events posted" message.
  events: [
    // { name: "Event name", date: "Sat, Jan 10", time: "10am–2pm", location: "Venue", address: "123 Main St", desserts: "Éclairs, Canelé", mapUrl: "https://maps.google.com/?q=..." }
  ],

  // Add real customer reviews only.
  testimonials: [
    // { name: "Customer name", text: "Their words.", stars: 5, item: "Wedding desserts" }
  ],

  faq: [
    ["How do I place an order?", "PLACEHOLDER: describe your ordering steps."],
    ["How far in advance should I order?", "PLACEHOLDER: add your lead time."],
    ["Do you make custom cakes?", "Yes. Use the custom cake request form; a request does not confirm an order."],
    ["Do you offer catering?", "Yes. Use the catering inquiry form to tell us about your event."],
    ["Do you offer delivery?", "PLACEHOLDER: add your delivery policy."],
    ["Where can I pick up my order?", "PLACEHOLDER: add your pickup location."],
    ["Do you participate in pop-up events?", "Yes. See Upcoming Pop-Ups for current dates."],
    ["Can I request a custom flavor?", "PLACEHOLDER: add your policy."],
    ["Do you accept large orders?", "PLACEHOLDER: add your policy."],
    ["How do I request a quote?", "Send a custom cake or catering request and we will follow up with a quote."],
    ["What payment methods do you accept?", "PLACEHOLDER: add accepted payment methods."]
  ]
};

/* Photos live in images/products. Card photos are matched by item name; add or change freely. */
window.SITE.images = {
  "Les Tartelettes": "tartlets/tartlets-berry.jpg", "Les Éclairs": "eclairs/eclairs-chocolate.jpg", "Canelé de Bordeaux": "canele/canele.jpg",
  "Tiramisù Lavoré": "tiramisu/tiramisu.jpg", "Peach Cobbler": "cinnamon-rolls/cinnamon-peach-cobbler.jpg", "Blueberry Lemon": "cinnamon-rolls/cinnamon-blueberry-lemon.jpg",
  "Strawberry Cheesecake": "cinnamon-rolls/cinnamon-strawberry-cheesecake.jpg",
  "Classic Vanilla": "bundtlets/bundtlet-vanilla.jpg", "Chocolate": "bundtlets/bundtlet-chocolate.jpg", "Apple Pie": "bundtlets/bundtlet-apple-pie.jpg", "Red Velvet": "bundtlets/bundtlet-red-velvet.jpg"
};
/* Gallery: f = file in images/products, cat = filter label */
window.SITE.gallery = [
  { f: "bundtlets/bundtlet-assortment.jpg", cat: "Bundtlet Cakes", alt: "Assorted Bundtlet cakes with glaze on a marble board" },
  { f: "tartlets/tart-collection.jpg", cat: "Tartlettes", alt: "Six tartlets on a marble board" },
  { f: "eclairs/eclair-raspberry.jpg", cat: "Éclairs", alt: "Raspberry éclair with gold leaf" },
  { f: "canele/canele.jpg", cat: "Canelé", alt: "Canelé on a plate with a glass dome" },
  { f: "tiramisu/tiramisu.jpg", cat: "Tiramisù", alt: "Tiramisù in a glass" },
  { f: "cinnamon-rolls/cinnamon-rolls-pair.jpg", cat: "Cinnamon Rolls", alt: "Peach cobbler and strawberry cheesecake cinnamon rolls" },
  { f: "events/dessert-table.jpg", cat: "Events", alt: "Wedding dessert table with a tiered cake" },
  { f: "tartlets/tartlets-berry.jpg", cat: "Tartlettes", alt: "Berry tartlets on a platter" },
  { f: "eclairs/eclairs-chocolate.jpg", cat: "Éclairs", alt: "Chocolate éclairs with gold leaf" },
  { f: "bundtlets/bundtlet-display.jpg", cat: "Bundtlet Cakes", alt: "Bundtlet cakes on small stands" },
  { f: "tiramisu/tiramisu-raspberry.jpg", cat: "Tiramisù", alt: "Raspberry tiramisù slice" },
  { f: "tiramisu/berry-trifle.jpg", cat: "Tiramisù", alt: "Berry trifle cup" },
  { f: "tartlets/tart-blackberry-pistachio.jpg", cat: "Tartlettes", alt: "Blackberry and pistachio tart" },
  { f: "bundtlets/bundtlet-apple-pie.jpg", cat: "Bundtlet Cakes", alt: "Glazed apple Bundtlet with dried apple chips" },
  { f: "cinnamon-rolls/cinnamon-blueberry-lemon.jpg", cat: "Cinnamon Rolls", alt: "Blueberry lemon cinnamon roll" },
  { f: "cinnamon-rolls/cinnamon-peach-cobbler.jpg", cat: "Cinnamon Rolls", alt: "Peach cobbler cinnamon roll" },
  { f: "cinnamon-rolls/cinnamon-strawberry-cheesecake.jpg", cat: "Cinnamon Rolls", alt: "Strawberry cheesecake cinnamon roll" },
  { f: "about/chef-piping.jpg", cat: "Behind the Scenes", alt: "Pastry chef piping cream onto a berry tart" },
  { f: "about/recipe-notebook.jpg", cat: "Behind the Scenes", alt: "Recipe notebook surrounded by baking ingredients" }
];
