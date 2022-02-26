import {Container, Heading, Divider, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from "../components/grid-item"
import Layout from "../components/layouts/article"

import samsung from "../public/images/samsung.jpeg"
import HP from "../public/images/hp.png"
import denstu from "../public/images/denstu.png"
import Micron from "../public/images/Micron.jpeg"

const Works = () =>
(
	<Layout title="Works">
		<Container>
			<Heading as='h3' fontSize={30} mb={4}>
				Work Experience
			</Heading>
			<Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Internships
        </Heading>
      </Section>
		<SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="intern" title="Intern" thumbnail={samsung}>
            Worked at Samsung and Dell as SDE intern 
          </WorkGridItem>
        </Section>
         <Section>
          <WorkGridItem id="walknote" title="HP" thumbnail={HP}>
     	Worked at HP singapore as a data science intern working on Computer vision
          </WorkGridItem>
        </Section>
        </SimpleGrid>

        <Section delay={0.2}>
        	<Divider my={6} />

       	 	<Heading as="h3" fontSize={20} mb={4}>
          		 Full Time positions
        	</Heading>
      	</Section>


		

		<SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dentsu" title="Dentsu" thumbnail={denstu}>
            Worked at Dentsu as a Junior Data scientist 
          </WorkGridItem>
        </Section>
         <Section>
          <WorkGridItem id="Micron" title="Micron" thumbnail={Micron}>
     		Joined Mircon as a Sr. Data Scientist
          </WorkGridItem>
        </Section>
        </SimpleGrid>
		</Container>
		</Layout>
)

export default Works