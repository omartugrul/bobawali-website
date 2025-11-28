export interface Client {
  id: string
  name: string
  logoUrl?: string
  event?: string
}

export const clients: Client[] = [
  {
    id: 'urban-skillet',
    name: 'Urban Skillet',
    event: 'Grand Opening',
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
  },
  {
    id: 'kendra-scott',
    name: 'Kendra Scott',
  },
]
