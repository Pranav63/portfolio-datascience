import Head from 'next/head'
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'
import VoxelDog from "../3dearth"
import NoSsr from "../no-ssr"
import Footer from "../footer"

const Main= ({children, router}) => {
	return (
		<Box as='main' pb={8}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<meta name="description" content="Pranav&apos;s Home"/>
				 <link rel="footprint" href="footprint.png" />
				<title> Pranav&apos;s Home </title>
			</Head>

			<Navbar path= {router.asPath}/>
			<Container maxW="container.md" pt={14}> 
			<NoSsr>
				<VoxelDog/>
			</NoSsr>
				{children}
			<Footer/>
			</Container>
		</Box>
		)

}

export default Main