export const aboutUsMenuData = [
  { label: "Informasi Perusahaan", link: "our-company", icon: "fal fa-building" },
  { label: "Cara Pembayaran", link: false, icon: "fal fa-file-invoice-dollar" },
  { label: "Konsultasi", link: "contact-us", icon: "fal fa-user-md-chat" },
]

export const productMenuData = [
  {
    label: "Proteksi Kesehatan",
    children: [
      { label: "PRUPrime Healthcare Plus", link: "pruprime-healthcare-plus" },
      { label: "PRUSolusi Sehat", link: "prusolusi-sehat" },
    ]
  },
  {
    label: "Proteksi Penghasilan",
    children: [
      { label: "PRUTotal Critical Protection", link: "prutotal-critical-protection" },
      { label: "PRUCritical Benefit 88", link: "prucritical-benefit-88" },
    ]
  },
  {
    label: "Persiapan Dana Waris",
    children: [
      { label: "PRUCinta", link: "prucinta" },
      { label: "PRUWarisan", link: "pruwarisan" },
    ]
  },
  {
    label: "Persiapan Dana Pendidikan Anak",
    children: [
      { label: "PRUCerah", link: "prucerah" },
    ]
  }
]

export const mobileNavigation = [
  { label: "Home", link: "/" },
  { label: "Produk", link: "/products" },
  { label: "Peluang Bisnis", link: "/business-opportunities" },
  { label: "Tentang Kami", link: "/about" },
]
