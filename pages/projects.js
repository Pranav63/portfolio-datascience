import { Container, Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import gan from "../public/images/gan.gif"
import dataeng from "../public/images/dataeng.gif"
import trader from "../public/images/trader.png"
import carrace from "../public/images/carrace.gif"
import sdn from "../public/images/sdn.jpeg"
import spr from "../public/images/spr.jpg"

const Projects = () => {
  const bgColor = useColorModeValue('teal.100', 'teal.900')
  const textColor = useColorModeValue('gray.800', 'white')
  const headingColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Layout title="Projects">
      <Box
        bg={bgColor}
        color={textColor}
        py={20}
        textAlign="center"
        borderRadius="3xl"
        mb={10}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Projects & Publications
        </Heading>
        <Text fontSize="xl">Showcasing my work in data science and research</Text>
      </Box>

      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h2" fontSize={24} mb={4} color={headingColor}>
            Projects
          </Heading>
          <Text mb={6} fontSize="lg">
          &quot;Create. Not for the money. Not for the recognition. But for the pure joy of creating something and sharing it.&quot;
          </Text>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <GridItem
              title="GAN's Face Generation"
              thumbnail={gan}
              href="https://github.com/Pranav63/Generative-adverserial-Networks-Face-profile-completion-"
            />
            <GridItem
              title="Data Pipeline Development"
              thumbnail={dataeng}
            />
            <GridItem
              title="Super Programmatic Trader"
              thumbnail={trader}
            />
            <GridItem
              title="RL fired Simulated Car race"
              thumbnail={carrace}
              href="https://github.com/Pranav63/SelfDrivingCar"
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" fontSize={24} mb={6} color={headingColor}>
            Publications
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <GridItem
              title="Innovations in SDN controllers in data centers"
              thumbnail={sdn}
              href="https://www.igi-global.com/chapter/the-heart-and-brain-of-sdn/198195"
            />
            <GridItem
              title="Review of Sockets for File Transfers Between Systems"
              thumbnail={spr}
              href="https://www.springerprofessional.de/en/review-of-sockets-for-transfer-of-files-between-systems/15605882"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'