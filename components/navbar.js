import { useState } from 'react'
import Link from 'next/link'
import Logo from './logo'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Button,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaSun, FaMoon } from 'react-icons/fa'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link href={href} passHref>
      <Button
        as="a"
        variant={active ? "solid" : "ghost"}
        colorScheme={active ? "teal" : ""}
        bg={active ? 'teal.500' : 'transparent'}
        color={active ? 'white' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Button>
    </Link>
  )
}

const NavBar = props => {
  const { path } = props
  const [isOpen, setIsOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      boxShadow="0 2px 10px rgba(0,0,0,0.1)"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
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
          spacing={4}
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
            href="https://drive.google.com/file/d/1uatgc7D03vRNDYkLpk8TRhr8Jnot4bcU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <IconButton
            aria-label="Toggle theme"
            colorScheme="teal"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            mr={2}
          />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu" isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                onClick={toggleMenu}
              />
              <MenuList>
                <Link href="/" passHref>
                  <MenuItem as="a">About</MenuItem>
                </Link>
                <Link href="/works" passHref>
                  <MenuItem as="a">Work Ex</MenuItem>
                </Link>
                <Link href="/projects" passHref>
                  <MenuItem as="a">Projects</MenuItem>
                </Link>
                <Link href="/education" passHref>
                  <MenuItem as="a">Education</MenuItem>
                </Link>
                <Link href="/skills" passHref>
                  <MenuItem as="a">Skills</MenuItem>
                </Link>
                <MenuItem 
                  as="a" 
                  href="https://drive.google.com/file/d/1uatgc7D03vRNDYkLpk8TRhr8Jnot4bcU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
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