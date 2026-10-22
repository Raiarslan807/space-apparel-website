export const WHATSAPP_NUMBER = "923247503009";
export const PHONE_DISPLAY = "0324 7503009";
export const EMAIL = "spaceapparel89@gmail.com";
export const ADDRESS = "Chanab Rangers Road, Sialkot, 51310, Pakistan";
export const waLink = (message = "Hello Space Apparel, I'd like to discuss a custom apparel order.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    number: "01", title: "DTG Printing & Screen Printing",
    text: "Custom T-shirt printing with vibrant artwork, detailed graphics, and bold screen-printed designs for streetwear and brand collections.",
    image: "/images/services/dtg-main.jpg",
    gallery: ["/images/services/dtg-main.jpg", "/images/services/dtg-colors.jpg", "/images/services/dtg-colors-detail.jpg", "/images/services/dtg-back-print.jpg", "/images/services/dtg-main-alt.jpg"]
  },
  {
    number: "02", title: "Embroidery",
    text: "Detailed embroidered logos, patches, lettering, and decorative stitching for hoodies and other custom apparel.",
    image: "/images/services/embroidery-main.jpg",
    gallery: ["/images/services/embroidery-main.jpg", "/images/services/embroidery-patches.jpg", "/images/services/embroidery-hoodie.jpg", "/images/services/embroidery-sleeve.jpg", "/images/services/embroidery-detail.jpg"]
  },
  {
    number: "03", title: "Denim",
    text: "Custom denim pieces featuring distressed finishes, statement graphics, and embellished details across shorts and jeans.",
    image: "/images/services/denim-main.jpg",
    gallery: ["/images/services/denim-main.jpg", "/images/services/denim-shorts.jpg", "/images/services/denim-jeans.jpg", "/images/services/denim-embellished.jpg"]
  }
];

export const testimonials = [
  "Space Apparel handled our screen printing order with great care. The prints came out sharp, the colors were strong, and the turnaround was exactly what we needed.",
  "The rhinestone and denim patch work from Space Apparel gave our collection a unique edge. Quality was excellent, and the team was easy to work with from start to finish.",
  "We ordered custom embroidery and were impressed by the detail and consistency. Space Apparel is now our go-to partner for branded apparel."
];

export const processSteps = [
  {
    number: "01", title: "Choose your service",
    text: "Tell us what you want to make. We’ll help you choose the right decoration method for your design, fabric, quantity, and budget."
  },
  {
    number: "02", title: "Customize your design",
    text: "Share your artwork and requirements. We’ll align on sizing, placement, colours, and material details before production."
  },
  {
    number: "03", title: "Place your order",
    text: "Approve the mockup and confirm quantities. Your order moves into production, quality checks, and delivery coordination."
  }
];