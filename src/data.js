export const WHATSAPP_NUMBER = "923247503009";
export const PHONE_DISPLAY = "0324 7503009";
export const EMAIL = "spaceapparel89@gmail.com";
export const ADDRESS = "Chanab Rangers Road, Sialkot, 51310, Pakistan";
export const waLink = (message = "Hello Space Apparel, I'd like to discuss a custom apparel order.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    number: "01", title: "3D Puff Printing",
    text: "Add depth and texture to your designs with bold, raised prints that give custom apparel and accessories a premium, tactile finish.",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "02", title: "Embroidery",
    text: "Precise, detailed logos and artwork for polos, caps, jackets, hoodies, and more—with a clean, crafted finish.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "03", title: "Heat Press",
    text: "Vinyl and sticker application with sharp edges, strong adhesion, and vibrant results across a wide range of fabrics.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "04", title: "Rhinestones",
    text: "Eye-catching custom stonework with considered placement, adding sparkle and personality to fashion and streetwear.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "05", title: "Distressed Denim Patch",
    text: "Custom patches that add character and a worn-in edge to denim jackets, jeans, and other statement pieces.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "06", title: "DTG Printing",
    text: "Detailed, full-colour designs with a soft feel—well suited to complex artwork, small batches, and on-demand apparel.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
  },
  {
    number: "07", title: "Screen Printing",
    text: "Bold, durable, cost-conscious prints for bulk orders, produced with an emphasis on clean and consistent results.",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85"
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