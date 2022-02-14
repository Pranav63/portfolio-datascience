import {motion} from 'framer-motion'
import Head from 'next/head'

import {GridItemStyle} from '../grid-item'

const variants={
	hidden: {opacity:0, x:0, y:20},
	enter: {opactiy:1, x:0, y:0},
	exit: {opactiy:0, x:0, y:20}
}

const Layout = ({children, title}) => (
	<motion.article
	inital="hidden" 
	animate="enter" 
	exit="exit" 
	variants={variants} 
	transition={{duration:0.4, type: 'easeInOut'}} 
	style={{position: 'relative'}}>
	<>
	{title && (
		<Head>
		<title> {title}- Pranav Arora </title>
		</Head>

		)}
	{children}
	<GridItemStyle/>
	</>
	</motion.article>
)

export default Layout