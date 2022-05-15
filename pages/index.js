import NextLink from 'next/link'
import {
	Container, 
	Box, 
	Button,
	Link,
	Heading, 
	Image, 
	ListItem,
	List,
	Icon,
	useColorModeValue} from '@chakra-ui/react'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import {ChevronRightIcon} from "@chakra-ui/icons"
import {BioSection, BioYear} from "../components/bio"
import Layout from "../components/layouts/article"
import {
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
	return(
		<Layout>
		<Container>
			<Box borderRadius='lg' 
			bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
			 p={3} mb={6} align='center' font-weight= 'bold'>
			  👋🏻 Hi there, I&apos;m Pranav Data Scientist in Singapore
			</Box>
			
		
		<Box display ={{md: 'flex'}}>
				<Box flexGrow ={1}>
					<Heading as="h2" variant="page-title">
					Pranav Arora
					</Heading>
				<p> (AS|EX)piring Data Scientist. Designing models by day Regularizing them by night.  
				</p>
				</Box>
				<Box 
				flexShrink={0} 
				mt={{base: 4, md:6}} ml={{md:6}} align='center'
				>
				<Image 
				borderColor="whiteAlpha.800" borderWidth={2}
				src='/images/Pranav_Degree.jpg'
				borderStyle="solid"
				maxWidth="100px"
				borderRadius="full"
				display="inlink-block"
				alt="Profile_image"
				/>
				</Box>
</Box> 
			<Section delay ={0.1}>
			<Heading as="h3" variant ="section-title">
			Work Ex
			</Heading>
			<Paragraph>Pranav is based in Singapore 
			and is a Data scientist working for Micron.
			 He is seasoned in analysing data and generating insights and 
			 loves Python and ML. He loves tinkering with new technologies and 
			 is very sincere at his job. He makes his living, trains his body 
			 and lives on {''}
			 
			 <Link href="https:/github.com/Pranav63"> Github</Link>
			 </Paragraph>
			 <Box align="center" my={4}>
			 <NextLink href="/works">
			 	<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
					My Portfolio
				</Button>
			</NextLink>
			</Box>
			</Section>

		<Section delay={0.2}>
			<Heading as="h3" variant="section-title">
			Bio
		</Heading>
		<BioSection>
			<BioYear> 1996 </BioYear>
			Born and Feature Engineered in India 🇮🇳
		</BioSection>
		<BioSection>
			<BioYear> 2014 </BioYear>
			<Link href='https://www.linkedin.com/in/pranavarora63/overlay/1597390800123/single-media-viewer/'>Completed Bachelor&apos;s in Computer Science </Link>
		</BioSection>
		<BioSection>
			<BioYear> 2019 </BioYear>
			<Link href="https://www.linkedin.com/in/pranavarora63/overlay/1597390567194/single-media-viewer/"> Completed Master&apos;s at Singapore Management university (spl A.I)</Link>
		</BioSection>
		<BioSection>
			<BioYear> 2020 </BioYear>
			 Entered Corporate @Dentsu as Data Scientist 
		</BioSection>
		<BioSection>
			<BioYear> 2022 </BioYear>
		Joined Micron Semiconductors as a Senior Data Scientist 
		</BioSection>
		</Section>

		<Section delay={0.3} >
			<Heading as="h3" variant="section-title">
				What I ❤️ doing outside work ?
				</Heading>
				<Paragraph>
				Quizzing | Photography | Investing | Unfolding MCU Easter Eggs
				</Paragraph>

		</Section>

		<Section delay={0.3}>
		<Heading as='h3' variant='section-title'>
			Find me Across the Internet
		</Heading>
		<List>
		<ListItem>
			<Link href="https://www.linkedin.com/in/pranavarora63/" target="_blank">
				<Button variant="ghost" colorScheme="teal" 
				leftIcon={<Icon as={IoLogoLinkedin}/>}>
				@Pranavarora63
				</Button>
			</Link>
			</ListItem>
			<ListItem>
			<Link href="https:/github.com/Pranav63" target="_blank">
				<Button variant="ghost" colorScheme="teal" 
				leftIcon={<Icon as={IoLogoGithub}/>}>
				@Pranav63
				</Button>
				</Link>
			</ListItem>
				<ListItem>
			<Link href="https://www.instagram.com/arora.pranav1816/" target="_blank">
				<Button variant="ghost" colorScheme="teal" 
				leftIcon={<Icon as={IoLogoInstagram}/>}>
				@Arora.pranav1816
				</Button>
			</Link>
			</ListItem>
		</List>
		</Section>
	</Container>
	</Layout>
					)
}

export default Page