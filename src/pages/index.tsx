import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import { IoIosNotifications } from 'react-icons/io'

import Categories from '@/component/categories'
import InputLocation from '@/component/input-location'
import siteConfig from '~/site.config'

const Index = () => (
  <>
    <NextSeo title={siteConfig.title} titleTemplate='%s' />

    <Flex my={4} px={{ base: 4, md: 20 }} justify='space-between'>
      <InputLocation />
      <IconButton
        ml={8}
        aria-label='Notification'
        bgColor='primary'
        color='white'
        isRound
        icon={<Icon as={IoIosNotifications} boxSize={5} />}
        _hover={{
          bgColor: 'primary',
        }}
      />
    </Flex>

    <Box my={4} px={{ base: 4, md: 20 }}>
      <Heading>Hello, Supry</Heading>
      <Text color='secondaryText'>What do you want to eat?</Text>
    </Box>

    <Categories />

    <Flex my={4} justify='space-between' px={{ base: 4, md: 20 }}>
      <Heading fontSize='xl' as='h3'>
        Today&apos;s Promo
      </Heading>
      <NextLink href='/foods'>
        <Link href='/foods' color='primary'>
          See All
        </Link>
      </NextLink>
    </Flex>

    <SimpleGrid my={4} px={{ base: 4, md: 20 }} columns={1}>
      <Box>
        <Box
          pos='absolute'
          mx='auto'
          bgColor='white'
          borderRadius='lg'
          left='50%'
          minW={{ base: '300px', md: '400px' }}
          maxH='120px'
          transform='translate(-50%, -10%)'
          top={{ base: '74%', md: '76%' }}
          p={4}
        >
          <Text fontWeight='bold'>Fruit salad mix </Text>
          <Text color='secondaryText' fontSize='sm'>
            Delics Fruit salad, Ngansem
          </Text>
          <Flex my={1} justify='space-between'>
            <Flex>
              <Text fontWeight='bold'>18.500</Text>
              <Text color='secondaryText' ml={2} as='s'>
                18.500
              </Text>
            </Flex>
            <Box color='white' bgColor='secondary' p={2} borderRadius='md'>
              5 Left
            </Box>
          </Flex>
        </Box>
        <Image borderRadius='xl' zIndex={-1} src='/foods-1.png' />
      </Box>
    </SimpleGrid>
  </>
)

export default Index
