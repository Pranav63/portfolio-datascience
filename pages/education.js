import { Container, Box, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import SMU from "../public/images/smu.jpeg"
import UPES from "../public/images/upes.jpeg"
import HBX from "/public/images/hbxresi.jpg"

const MotionBox = motion(Box)

const EducationItem = ({ title, institution, period, logo, size = "md", delay }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    <Box
      borderWidth={1}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      borderRadius="lg"
      p={6}
      mb={6}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s' }}
    >
      <VStack align="start" spacing={4}>
        <Box width="100%" height={size === "lg" ? "200px" : size === "md" ? "150px" : "100px"} position="relative">
          <Image
            src={logo}
            alt={institution}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <VStack align="start" spacing={1}>
          <Heading size={size} fontWeight="bold">{title}</Heading>
          <Text fontSize={size === "lg" ? "xl" : "lg"} fontWeight="semibold" color={useColorModeValue('teal.600', 'teal.200')}>{institution}</Text>
          <Text fontSize={size === "lg" ? "lg" : "md"} color={useColorModeValue('gray.600', 'gray.400')}>{period}</Text>
        </VStack>
      </VStack>
    </Box>
  </MotionBox>
)

const Education = () => {
  const bgColor = useColorModeValue('teal.100', 'teal.900')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Layout title="Education">
      <Box
        bg={bgColor}
        color={textColor}
        py={20}
        textAlign="center"
        borderRadius="3xl"
        mb={10}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Educational Journey
        </Heading>
        <Text fontSize="xl">"Teachers open the door, but you must enter by yourself"</Text>
      </Box>

      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Section delay={0.1}>
            <EducationItem
              title="HBX Online spl. Business Analytics"
              institution="Harvard Business School"
              period="2020"
              logo={HBX}
              size="lg"
              delay={0.2}
            />
          </Section>

          <Section delay={0.3}>
            <EducationItem
              title="Masters in Artificial Intelligence"
              institution="Singapore Management University"
              period="2018-2020"
              logo={SMU}
              size="md"
              delay={0.4}
            />
          </Section>

          <Section delay={0.5}>
            <EducationItem
              title="Bachelors in Computer Science"
              institution="University of Petroleum and Energy Studies"
              period="2014-2018"
              logo={UPES}
              size="sm"
              delay={0.6}
            />
          </Section>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Education
export { getServerSideProps } from '../components/chakra'