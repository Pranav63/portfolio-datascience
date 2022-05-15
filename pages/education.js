import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import {WorkGridItem} from "../components/grid-item"
// import thumbInkdrop from "../public/images/works/dave4.jpeg"
import SMU from "../public/images/smu.jpeg"
import UPES from "../public/images/upes.jpeg"
import HBX from "/public/images/hbxresi.jpg"
import { GridItem } from '../components/grid-item'

const Education = () => (
  <Layout title="Education">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Eduction
      </Heading>
   <Section delay={0.2}>
          <Divider my={4} />
        </Section>
   <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
     <GridItem
            title="HBX Online spl. Business Analytics (2020)"
            thumbnail={HBX}
            href="https://www.linkedin.com/in/pranavarora63/overlay/1598045717378/single-media-viewer/"
          />
</Section>
         <Section>
     <GridItem
            title="Masters in Artifical Intelligence      (2018-2020)"
            thumbnail={SMU}
            href="https://www.linkedin.com/in/pranavarora63/overlay/1597390567194/single-media-viewer/"
          />

        </Section>
        </SimpleGrid>

     <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
     <GridItem
            title="Bachelors in Computer Science (2014-2018)"
            thumbnail={UPES}
            href="https://www.linkedin.com/in/pranavarora63/overlay/1597390800123/single-media-viewer/"
          />
</Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Education
export { getServerSideProps } from '../components/chakra'