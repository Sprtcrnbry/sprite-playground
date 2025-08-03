export const siteConfig = {
  name: 'Playground',
  description: 'Building the future of web development, one site at a time.',
  url: 'https://sprite-playground.vercel.app',
  email: 'sprite@n1ght.party',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Tech Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
  },
  social: {
    twitter: '#',
    github: '#',
  },
}

// Helper function for page titles
export const getPageTitle = (pageName?: string) => {
  return pageName ? `${pageName} - ${siteConfig.name}` : siteConfig.name
}
