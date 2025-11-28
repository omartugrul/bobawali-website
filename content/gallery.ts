export interface GalleryImage {
  id: string
  src: string
  alt: string
  instagramUrl?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/gallery/drink-1.png',
    alt: 'Mango Lassi Boba',
    instagramUrl: 'https://www.instagram.com/bobawali.htx/',
  },
  {
    id: '2',
    src: '/gallery/event-1.jpg',
    alt: 'Boba Wali cart at a wedding',
    instagramUrl: 'https://www.instagram.com/bobawali.htx/',
  },
  {
    id: '3',
    src: '/gallery/drink-2.png',
    alt: 'Rooh Afza Lemonade Boba',
    instagramUrl: 'https://www.instagram.com/bobawali.htx/',
  },
  {
    id: '4',
    src: '/gallery/event-2.jpg',
    alt: 'Corporate event setup',
    instagramUrl: 'https://www.instagram.com/bobawali.htx/',
  },
  {
    id: '5',
    src: '/gallery/drink-3.png',
    alt: 'Falooda Milk Tea',
    instagramUrl: 'https://www.instagram.com/bobawali.htx/',
  },
  {
    id: '6',
    src: '/gallery/event-3.jpg',
    alt: 'Birthday celebration with Boba Wali',
    instagramUrl: 'https://www.instagram.com/bobawali.htx/',
  },
]

export const socialConfig = {
  instagram: 'https://www.instagram.com/bobawali.htx/',
  tiktok: 'https://www.tiktok.com/@bobawali.htx',
  facebook: 'https://www.facebook.com/bobawali.htx',
  handle: '@bobawali.htx',
}
