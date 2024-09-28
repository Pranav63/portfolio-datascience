import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Container, 
  Box, 
  Button,
  Heading, 
  ListItem,
  List,
  Icon,
  useColorModeValue,
  VStack,
  HStack,
  Text,
  Flex,
  SimpleGrid,
  useColorMode
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoSchool,
  IoBriefcase,
  IoCalendar
} from 'react-icons/io5'

const MotionBox = motion(Box)

const ExternalLink = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <Box as="a" target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Box>
  </Link>
)

const Page = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const handleImageLoad = useCallback(() => setImageLoaded(true), [])
  const controls = useAnimation()
  const { colorMode } = useColorMode()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  const bgColor = useColorModeValue('teal.100', 'teal.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const cardBgColor = useColorModeValue('white', 'gray.700')

  return (
    <Layout>
      <Box
        bg={bgColor}
        color={textColor}
        py={20}
        textAlign="center"
        borderRadius="3xl"
        mb={10}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to My Webspace
        </Heading>
        <Text fontSize="xl">Exploring the O.G Data Science with GenAI lens</Text>
      </Box>

      <Container maxW="container.md">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="xl" fontFamily="'Poppins', sans-serif">
              Pranav Arora
            </Heading>
            <Text fontSize="lg" fontStyle="italic" color={useColorModeValue('gray.600', 'gray.300')}>
              (AS|EX)piring Data Scientist
            </Text>
            <Text>Designing models by day, Regularizing them by night.</Text>
          </VStack>
          <Box 
            borderRadius="full"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
            border="4px solid"
            borderColor={useColorModeValue('teal.500', 'teal.300')}
            overflow="hidden"
            width="150px"
            height="150px"
            position="relative"
            mt={{ base: 4, md: 0 }}
          >
            <Image 
              src='/images/pranav_pho.png'
              alt="Profile image"
              layout="fill"
              objectFit="cover"
              quality={95}
              priority
              onLoad={handleImageLoad}
            />
          </Box>
        </Flex>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontFamily="'Poppins', sans-serif">
            Intro
          </Heading>
          <Paragraph>
            I am based out of Singapore 🇸🇬 and working as a Data Scientist. With great number of tools, comes a steep learning curve. I believe a data Scientist is someone who is better at statistics than a software engineer and better at software engineering than a statistician.🧮 
            <br /><br />
            I love testing new frameworks in my domain but without compromising on basic principles i.e do projects that add value to business. I don't get intimidated by jargons now, a model is just a fancy word for 'recipe'.
          </Paragraph>
          <Box align="center" my={8}>
            <Link href="/works" passHref>
              <Button 
                as="a" 
                rightIcon={<ChevronRightIcon/>} 
                colorScheme="teal"
                size="lg"
                fontWeight="bold"
                borderRadius="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Explore My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" fontFamily="'Poppins', sans-serif">
            Bio
          </Heading>
          <VStack align="start" spacing={4}>
            {[
              { year: '1996', text: 'Born and Feature Engineered in India 🇮🇳', icon: IoCalendar },
              { year: '2014', text: 'Completed Bachelor\'s in Computer Science @ UPES, India', icon: IoSchool, link: 'https://www.upes.ac.in/' },
              { year: '2019', text: 'Completed Master\'s in A.I @ SMU, Singapore', icon: IoSchool, link: 'https://www.smu.edu.sg/' },
              { year: '2020', text: 'Joined Corporate @Dentsu as Jr. Data Scientist', icon: IoBriefcase, link: 'https://www.iprospect.com/en/sg/' },
              { year: '2022', text: 'Worked at Micron Semiconductors as a Data Scientist', icon: IoBriefcase, link: 'https://sg.micron.com/' },
              { year: '2024', text: 'Joined Hewlett Packard Enterprise as a Senior Data Scientist', icon: IoBriefcase, link: 'https://www.hpe.com/us/en/home.html' }
            ].map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={index}
              >
                <HStack spacing={4}>
                  <Icon as={item.icon} boxSize={6} color="teal.500" />
                  <BioSection>
                    <BioYear>{item.year}</BioYear>
                    {item.link ? (
                      <Link href={item.link}>
                        <Text as="span" cursor="pointer" _hover={{ textDecoration: 'underline' }}>
                          {item.text}
                        </Text>
                      </Link>
                    ) : item.text}
                  </BioSection>
                </HStack>
              </MotionBox>
            ))}
          </VStack>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" fontFamily="'Poppins', sans-serif">
            What I ❤️ doing outside work
          </Heading>
          <SimpleGrid columns={[2, null, 4]} spacing={4}>
            {['Quizzing', 'Photography', 'Equity Investing', 'Unfolding Marvel\'s Easter Eggs'].map((hobby, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={index}
                bg={cardBgColor}
                p={4}
                borderRadius="2xl"
                textAlign="center"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', transition: 'transform 0.2s' }}
              >
                {hobby}
              </MotionBox>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title' fontFamily="'Poppins', sans-serif">
            Find me Across the Internet
          </Heading>
          <HStack spacing={4} justify="center" wrap="wrap">
            {[
              { icon: IoLogoLinkedin, label: '@Pranavarora63', href: 'https://www.linkedin.com/in/pranavarora63/' },
              { icon: IoLogoGithub, label: '@Pranav63', href: 'https://github.com/Pranav63' },
              { icon: IoLogoInstagram, label: '@Arora.pranav1816', href: 'https://www.instagram.com/arora.pranav1816/' }
            ].map((item, index) => (
              <ExternalLink key={index} href={item.href}>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  leftIcon={<Icon as={item.icon} />}
                  borderRadius="full"
                  _hover={{ bg: 'teal.500', color: 'white' }}
                >
                  {item.label}
                </Button>
              </ExternalLink>
            ))}
          </HStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page