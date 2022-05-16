import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="70%"
    top="40%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '70px', '-120px']}
    mb={['-40px', '-1400px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader