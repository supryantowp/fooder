import { Flex, Icon, IconButton } from '@chakra-ui/react'
import { CgHome, CgSearch, CgShoppingCart, CgUser } from 'react-icons/cg'

const BottomNavbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      flexDir='row'
      justify='space-between'
      align='center'
      bgColor='white'
      px={{ base: 4, md: 20 }}
      py={4}
      bottom={0}
    >
      <IconButton
        aria-label='HomeIcon'
        variant='ghost'
        color='primary'
        icon={<Icon as={CgHome} boxSize={5} />}
      />
      <IconButton
        aria-label='ShoppingBag'
        variant='ghost'
        icon={<Icon as={CgShoppingCart} boxSize={5} />}
      />
      <IconButton
        aria-label='ShoppingBag'
        variant='ghost'
        icon={<Icon as={CgSearch} boxSize={5} />}
      />
      <IconButton
        aria-label='ShoppingBag'
        variant='ghost'
        icon={<Icon as={CgUser} boxSize={5} />}
      />
    </Flex>
  )
}

export default BottomNavbar
