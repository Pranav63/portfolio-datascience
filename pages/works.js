import { Container, Box, Heading, Text, VStack, HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from '../components/section'
import Layout from "../components/layouts/article"
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import hpe from "../public/images/hpe.jpg"
import micron from "../public/images/Micron.jpeg"
import dentsu from "../public/images/denstu.png"
import internn from "../public/images/MergedImages.png"

const MotionBox = motion(Box)

const WorkItem = ({ title, company, period, logo, delay, isFeatured = false }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    width="100%"
  >
    <NextLink href={`/works/${company.toLowerCase()}`} passHref>
      <Box
        as="a"
        display="block"
        bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
        p={4}
        borderRadius="lg"
        boxShadow="lg"
        transition="all 0.2s"
        _hover={{ transform: 'translateY(-5px)' }}
        width="100%"
      >
        <Flex direction={isFeatured ? "column" : "row"} align="center">
          <Box 
            width={isFeatured ? "100%" : { base: '100%', sm: '120px' }}
            height={isFeatured ? "200px" : { base: '120px', sm: '80px' }}
            position="relative"
            overflow="hidden"
            borderRadius="md"
            mb={isFeatured ? 4 : { base: 4, sm: 0 }}
            mr={isFeatured ? 0 : { base: 0, sm: 4 }}
          >
            <Image
              src={logo}
              alt={company}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <VStack align={isFeatured ? "center" : "start"} spacing={1} flex={1}>
            <Heading size={isFeatured ? "lg" : "md"}>{title}</Heading>
            <Text fontWeight="bold" color={useColorModeValue('teal.600', 'teal.200')}>{company}</Text>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>{period}</Text>
          </VStack>
          {!isFeatured && <ChevronRightIcon boxSize={6} color={useColorModeValue('teal.500', 'teal.200')} />}
        </Flex>
      </Box>
    </NextLink>
  </MotionBox>
)

const Works = () => {
  const bgColor = useColorModeValue('teal.100', 'teal.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const headingColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Layout title="Works">
      <Box
        bg={bgColor}
        color={textColor}
        py={20}
        textAlign="center"
        borderRadius="3xl"
        mb={10}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Work Experience
        </Heading>
        <Text fontSize="xl">My journey through the data science landscape</Text>
      </Box>

      <Container maxW="container.md">
        <VStack spacing={12} align="stretch">
          <Section delay={0.2}>
            <Heading as="h3" fontSize={{ base: 22, md: 24 }} mb={6} color={headingColor}>
              Full Time Positions
            </Heading>
            <VStack spacing={6} align="stretch">
              <WorkItem
                title="Senior Data Scientist"
                company="HPE"
                period="Aug 2024 - Present"
                logo={hpe}
                delay={0.3}
                isFeatured={true}
              />
              <WorkItem
                title="Data Scientist"
                company="Micron"
                period="Jan 2022 - Aug 2024"
                logo={micron}
                delay={0.4}
              />
              <WorkItem
                title="Junior Data Scientist"
                company="Dentsu"
                period="2020 - 2022"
                logo={dentsu}
                delay={0.5}
              />
            </VStack>
          </Section>

          <Section delay={0.6}>
            <Heading as="h3" fontSize={{ base: 22, md: 24 }} mb={6} color={headingColor}>
              Internships
            </Heading>
            <WorkItem
              title="Data Science/SDE Intern"
              company="Various"
              period="Prior to 2020"
              logo={internn}
              delay={0.7}
            />
          </Section>
        </VStack>
      </Container>
    </Layout>
  )
}

export default Works