import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
	fontWeight:bold;
	font-size: 18px;
	display:inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

img {
    transition: 200ms ease;
  }
	&:hover img{
		transform: rotate(50deg);
	}
`

const Logo = () => {
  const footPrint = `/images/iconsvenn${useColorModeValue('', '')}.png`
  return (
    <Link href="/" passHref legacyBehavior>
      <LogoBox as="a">
        <Image src={footPrint} width={20} height={20} alt='logo' />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c'
          fontWeight='bold'
          ml={3}>
          Pranav Arora
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo