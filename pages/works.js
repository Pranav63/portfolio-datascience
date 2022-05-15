import {Container, Heading, Divider, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from "../components/grid-item"
import Layout from "../components/layouts/article"

import denstu from "../public/images/denstu.png"
import Micron from "../public/images/Micron.jpeg"
import Internn from "../public/images/MergedImages.png"

const Works = () =>
(
	<Layout title="Works">
		<Container>
			<Heading as='h3' fontSize={30} mb={4}>
				Work Ex

        <Section delay={0.2}>
          <Divider my={6} />
        </Section>

     <Heading as="h3" fontSize={20} mb={4}>
               Full Time positions
          </Heading>

		<SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
          <WorkGridItem id="Micron" title="Micron" thumbnail={Micron}>
         Sr. Data Scientist(Jan 2022 - Present)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="dentsu" title="Dentsu" thumbnail={denstu}>
            Junior Data scientist(2020 - 2021)
          </WorkGridItem>
        </Section>
 
        </SimpleGrid>

          </Heading>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Internships
        </Heading>
      </Section>
    <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="intern" title="Intern" thumbnail={Internn}>
            Worked at Samsung and Dell as SDE intern 
          </WorkGridItem>
        </Section>
        </SimpleGrid>

		</Container>
		</Layout>
)

export default Works