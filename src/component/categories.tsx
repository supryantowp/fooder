import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { IoIosHeartEmpty, IoIosMore, IoIosTrendingUp } from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'

const Category = ({ text, iconType }: { text: string; iconType: IconType }) => (
  <Box
    _hover={{
      cursor: 'pointer',
    }}
  >
    <Box color='primary' p={{ base: 4, md: 8 }} borderRadius='lg' bg='white'>
      <Icon as={iconType} boxSize={9} />
    </Box>
    <Text my={2} color='secondaryText'>
      {text}
    </Text>
  </Box>
)

const Categories = () => {
  return (
    <Flex w='full' justify='space-between' px={{ base: 4, md: 20 }} my={4}>
      <Category iconType={IoIosHeartEmpty} text='Favorite' />
      <Category iconType={IoTicketOutline} text='Cheap' />
      <Category iconType={IoIosTrendingUp} text='Trend' />
      <Category iconType={IoIosMore} text='More' />
    </Flex>
  )
}

export default Categories
