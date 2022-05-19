import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work' 
import { Badge,Container,List, ListItem, UnorderedList,Heading, Divider  } from '@chakra-ui/react'


const Post = () => (
  <Layout title="Dentsu">
    <Container>
      <Heading as="h3" fontSize={30} mb={3}>
        Micron
      </Heading>
      <Title>
        Sr. Data Scientist <Badge>Jan 2022 - Present</Badge>
      </Title>
   <Section delay={0.2}>
          <Divider my={6} />
        </Section>
  
 <Container>
     
       <WorkImage src="/images/wfo.gif" alt="skill" />
     
      <List ml={4} my={5}>
        <ListItem>
          <Meta> Team </Meta>
      <UnorderedList>
            <ListItem> 
            Smart Manufacturing and AI
            </ListItem>
            
            </UnorderedList>
        </ListItem> 

        <ListItem>
    
          <Meta>Key Highlights</Meta>
          <UnorderedList>
            <ListItem> 
            Developed well defined master data referred by planning and operations applications with mappings between the datasets 
            . A single source of truth solution to<b> save manual data input and maintenance time by 80% </b>
              
            </ListItem>
            <ListItem>
            Optimize knobs in fab status using RL agents that recommend weight 
            values for factors to maximize wafer movements
            while satisfying step move target and<b> minimizing queue time by 50%.</b>

            </ListItem> 
          </UnorderedList>
        </ListItem>

        

        <ListItem>     
          <Meta>Hands-on Tech Stack</Meta>
          <UnorderedList>
            <ListItem> 
            Google Cloud Platform (GCS,BigQuery)
            </ListItem>
            <ListItem> 
            Python and SQL
            </ListItem>
            <ListItem> 
            Micron&apos;s Internal Tools Stack
            </ListItem>
            <ListItem> 
            Reinforcement learning (PPO algo and DeepSim)
            </ListItem>
       </UnorderedList>
       </ListItem>
   

      </List>

     
    </Container>

      
    </Container>
  </Layout>
)

export default Post
