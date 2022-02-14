import {Container, Box, Heading, Divider, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from "../components/grid-item"
import thumbInkdrop from "../public/images/work/computer.png"

const Work = () =>
(
		<Container>
			<Heading as='h3' fontSize={30} mb={4}>
				Work Experience
			</Heading>
		<SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="InkDrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        
		</SimpleGrid>
		</Container>
			
)

export default Work