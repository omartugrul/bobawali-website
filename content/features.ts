export interface Feature {
  id: string
  outlet: string
  title: string
  description: string
  url: string
  logoUrl?: string
}

export const newsFeatures: Feature[] = [
  {
    id: 'houston-chronicle',
    outlet: 'Houston Chronicle',
    title: 'New Houston pop-up Boba Wali fuses South Asian flavors with classic bubble tea',
    description: 'Featured in the Flavor section, highlighting how Boba Wali is introducing South Asian–inspired bubble tea flavors to Houston.',
    url: 'https://www.houstonchronicle.com/food-culture/restaurants-bars/article/boba-wali-desi-bubble-tea-20760721.php',
    logoUrl: '/featured/houstonchronicle.png',
  },
  {
    id: 'the-juggernaut',
    outlet: 'The Juggernaut',
    title: 'Mango, Falooda, and Rooh Afza…with Boba?',
    description: 'A story on how South Asian flavors like mango lassi and Rooh Afza are making their way into the boba world.',
    url: 'https://www.thejuggernaut.com/south-asian-bubble-tea-desi-boba-history?s=cmdxkjkcv0017s601fl4mk7p7',
    logoUrl: '/featured/thejuggernaut.svg',
  },
]
