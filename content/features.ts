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
    outlet: 'The Houston Chronicle',
    title: 'Boba Wali Brings South Asian Flavors to Houston\'s Bubble Tea Scene',
    description: 'Featured in the Flavor section, highlighting how Boba Wali is introducing South Asian–inspired bubble tea flavors to Houston.',
    url: '#', // Placeholder - update with actual article URL
  },
  {
    id: 'the-juggernaut',
    outlet: 'The Juggernaut',
    title: 'South Asian Flavors Meet Boba',
    description: 'A story on how South Asian flavors like mango lassi and Rooh Afza are making their way into the boba world.',
    url: '#', // Placeholder - update with actual article URL
  },
]
