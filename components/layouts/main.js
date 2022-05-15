import Head from 'next/head'
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'
import VoxelDog from "../3dearth"
import dynamic from "next/dynamic"

import Footer from "../footer"

const Main= ({children, router}) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<meta name="description" content="Pranav&apos;s Home"/>
	
        <meta name="author" content="Pranv Arora" />
        <link rel="dsvector" href="dsvectoricon.jpg" />
        <link rel="shortcut icon" href="/icons.jpeg" type="image/x-icon" />
        <meta property="og:site_name" content="Pranav's Homepage" />
        <meta property="og:type" content="website" />
				<title> Pranav&apos;s Home </title>
			</Head>



		<Navbar path= {router.asPath}/>

			<Container maxW="container.md" pt={14}> 
		
				<VoxelDog/>
		
				{children}
			<Footer/>
			</Container>
		</Box>
		)

}

export default Main