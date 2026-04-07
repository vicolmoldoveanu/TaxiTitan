import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Servicii', href: getPermalink('/#services') },
    { text: 'Aplicatie', href: getPermalink('/#app') },
    { text: 'Contact', href: getPermalink('/#contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} TaxiTitan. Toate drepturile rezervate.
  `,
};
