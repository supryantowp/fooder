/* eslint-disable react/no-children-prop */
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'

const InputLocation = () => {
  return (
    <InputGroup color='primary' maxW='xs'>
      <Input
        placeholder='Jl. Jayakatwang no301'
        borderRadius='full'
        bgColor='#FFE2E3'
        border='none'
      />
      <InputRightElement
        children={<Icon as={IoMdArrowDropdown} boxSize={5} />}
      />
    </InputGroup>
  )
}

export default InputLocation
