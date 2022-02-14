import Logo from './logo'
import NextLink from 'next/link'

import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'

import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({href, path, _target, children}) => {
	const active = path === href 
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	return(
		<NextLink href= {href} passHref>
		<Link 
			p={2}
			bg = {active ? 'grassTeal': undefined}
			color = {active ? '#202023': inactiveColor}
			_target ={_target}
		>
		{children}
		</Link>
		</NextLink>

		)
}

const NavBar = props => {
	const {path} = props

	return(
		<Box
		position = "fixed"
		as = "nav"
		w = '100%'
		bg= {useColorModeValue('#ffffff40', '#20202380')}
		style= {{backdropFilter:'blur(10px)'}}
		zIndex = {1}
		{...props}
		>
		<Container
			display="flex"
			p={2}
			maxW="container.md"
			wrap='wrap'
			align='center'
			justify='space-between'
		>
		<Flex align='center' mr={5}>
			<Heading as='h1' size='lg' letterSpacing={'tighter'}>
			<Logo />
			</Heading>
		</Flex>
		<Stack
		  direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
		>
		<LinkItem href="/works" path={path}>
            Work Ex
          </LinkItem>
		<LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
     	<LinkItem href="/education" path={path}>
            Education

          </LinkItem>	     		
          <LinkItem href="/skills" path={path}>
            Skills
          </LinkItem>
         	<LinkItem 
         	_target='_blank'
				href="https://drive.google.com/file/d/1_4qaD7HbRTjn0eA3EOidsuoYoqIRsVWb/view?usp=sharing"
				path={path}
				display='inline-flex'
				alignItems='center'
				style={{gap:4}}
				pl={2}>
				Resume
			</LinkItem>
		</Stack>
		<Box flex={1} align="right">
		<ThemeToggleButton/>
			<Box ml={2} display={{base: 'inline-block'}}>
				<Menu isLazy id="navbar-menu">
					<MenuButton
					as={IconButton}
					icon={<HamburgerIcon/>}
					variant="outline"
					aria-label="Options">
					</MenuButton>
					<MenuList>
						<NextLink href='/' passHref>
							<MenuItem as={Link}>About</MenuItem>
						</NextLink>
						<NextLink href='/works' passHref>
							<MenuItem as={Link}>Work Ex</MenuItem>
						</NextLink>
						<NextLink href='/projects' passHref>
							<MenuItem as={Link}>Projects</MenuItem>
						</NextLink>
						
						<NextLink href='/education' passHref>
							<MenuItem as={Link}>Education</MenuItem>
						</NextLink>
						<NextLink href='/skills' passHref>
							<MenuItem as={Link}>Skills</MenuItem>
						</NextLink>

					</MenuList>
				</Menu>
			</Box>
		</Box>
		</Container>
		</Box>


		)
}

export default NavBar