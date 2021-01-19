import { DefaultSeoProps, SocialProfileJsonLdProps } from 'next-seo'

import siteConfig from './site.config'

export const SEO: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: siteConfig.url,
    site_name: siteConfig.title,
    images: [
      {
        url: '/social.png',
        width: 800,
        height: 600,
        alt: 'Fooder',
      },
      {
        url: '/social.png',
        width: 900,
        height: 800,
        alt: 'Fooder',
      },
      { url: '/social.png' },
      { url: '/social.png' },
    ],
  },
  title: 'Welcome!',
  titleTemplate: `%s • ${siteConfig.title}`,
  description: siteConfig.description,
  twitter: {
    handle: '@supryantowp',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

export const SocialsProfileSEO: SocialProfileJsonLdProps = {
  type: 'person',
  name: siteConfig.title,
  url: siteConfig.url,
  sameAs: Object.values(siteConfig.socials),
}
