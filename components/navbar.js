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


const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'cyan' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
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
				href="https://drive.google.com/file/d/13yWbPSZ-fqm4eA2SQmWZ6_aqxnrkajGd/view?usp=sharing"
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
					aria-label="Options"/>
					
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
						<MenuItem as={Link}> 
					<a href={"https://drive.google.com/file/d/1GYfmdI9gHfQq3gY-A7uCPqJStPKM71r8/view?usp=sharing"}>Resume</a>
						</MenuItem>
						


					</MenuList>
				</Menu>
			</Box>
		</Box>
		</Container>
		</Box>


		)
}

export default NavBar
