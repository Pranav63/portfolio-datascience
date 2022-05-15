import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {WorkGridItem} from "../components/grid-item"
import thumbInkdrop from "../public/images/works/dave4.jpeg"
import HP from "../public/images/works/dave11.jpeg"


const Education = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Eduction
      </Heading>
   <Section delay={0.2}>
          <Divider my={4} />
        </Section>
   <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="samsungdell" title="SDE intern" thumbnail={thumbInkdrop}>
            Worked at Samsung and Dell as SDE intern 
          </WorkGridItem>
        </Section>

         <Section>
          <WorkGridItem id="HP" title="HP" thumbnail={HP}>
     	Worked at HP singapore as a data science intern working on Computer vision
          </WorkGridItem>
        </Section>
        </SimpleGrid>
      

    </Container>
  </Layout>
)

export default Education
export { getServerSideProps } from '../components/chakra'