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
			  👋🏻 Hi there, Welcome to my webspace.			</Box>
			
		
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
			Intro
			</Heading>
			<Paragraph>I am based out of Singapore 🇸🇬 and working as a Data Scientist.<br/>
			With great number of tools, comes a steep learning curve. I believe a data Scientist is someone
			who is better at statistics than a software engineer and better at software engineering than a statistician.🧮 <br/>
			I love testing new frameworks in my domain but without compromising on basic principles i.e do projects that add value to business.<br/>
			I dont get intimated by jargons now, a model is just a fancy word for &apos;recipe&apos;.
			
			 
			 </Paragraph>
			 <Box align="center" my={4} mt={10}>
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
			Completed Bachelor&apos;s in Computer Science @ <Link href='https://www.upes.ac.in/'>UPES, India</Link>
		</BioSection>
		<BioSection>
			<BioYear> 2019 </BioYear>
		 Completed Master&apos;s in A.I @  <Link href='https://www.smu.edu.sg/'>SMU, Singapore</Link>
		</BioSection>
		<BioSection>
			<BioYear> 2020 </BioYear>
			Joined Corporate <Link href='https://www.iprospect.com/en/sg/'>@Dentsu</Link> as Jr. Data Scientist 
		</BioSection>
		<BioSection>
			<BioYear> 2022 </BioYear>
		Switched to <Link href='https://sg.micron.com/'>Micron Semiconductors</Link> as a Senior Data Scientist 
		</BioSection>
		</Section>

		<Section delay={0.3} >
			<Heading as="h3" variant="section-title">
				What I ❤️ doing outside work ?
				</Heading>
				<Paragraph>
				Quizzing | Photography | Equity Investing | Unfolding Marvel&apos;s Easter Eggs
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