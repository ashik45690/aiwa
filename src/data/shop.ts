export const shop = {
  name: "Aiwa Fruits",
  location: "Kolathur, Malappuram",
  phone: "XXXXXXXX",
  email: "aiwafruitshelps@gmail.com",
  days: "Monday – Sunday",
  opensLabel: "7:30 AM",
  closesLabel: "10:00 PM",
  /** Minutes after midnight, India Standard Time */
  opensAt: 7 * 60 + 30,
  closesAt: 22 * 60,
  timeZone: "Asia/Kolkata",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kolathur%2C+Malappuram%2C+Kerala",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#fruits", label: "Fruits" },
  { href: "#hours", label: "Hours" },
  { href: "#contact", label: "Contact" },
] as const;
