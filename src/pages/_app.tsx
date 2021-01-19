import 'focus-visible'

import { ChakraProvider, Container, Flex } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'

import BottomNavbar from '@/component/bottom-navbar'
import theme from '@/theme'
import { SEO, SocialsProfileSEO } from '~/next-seo.config'
import siteConfig from '~/site.config'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} canonical={siteConfig.url + (router.asPath || '')} />
      <SocialProfileJsonLd {...SocialsProfileSEO} />

      <Container p={0} shadow='sm'>
        <Flex direction='column' justify='space-between' minH='100vh'>
          <Component {...pageProps} />
          <BottomNavbar />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
