import { Container, Heading, SimpleGrid, Divider, VStack} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import gan from "../public/images/gan.gif"
import dataeng from "../public/images/dataeng.gif"
import thumbInkdrop from "../public/images/dell.jpeg"
import trader from "../public/images/trader.png"
import carrace from "../public/images/carrace.gif"
import sdn from "../public/images/sdn.jpeg"
import spr from "../public/images/spr.jpg"

import P from '../components/paragraph'



const Posts = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={30} mb={2}>
        Projects
      </Heading>
        <Section delay={0.2}>
          <Divider my={6} />
        </Section>
      <P>“Create. Not for the money. Not for the recognition. But for the pure joy of creating something and sharing it.”</P>
 
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="GAN's Face Generation"
            thumbnail={gan}
            href="https://github.com/Pranav63/Generative-adverserial-Networks-Face-profile-completion-"
          />
          <GridItem
            title="Konekuta Data Pipeliner"
            thumbnail={dataeng}
            href="https://github.com/Pranav63/DataPipeliner"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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

    
<Heading as="h3" fontSize={30} pt={11} mb={2}>
        Publications
      </Heading>
    
   <Section delay={0.2}>
          <Divider my={6} />
        </Section>
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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

export default Posts
export { getServerSideProps } from '../components/chakra'