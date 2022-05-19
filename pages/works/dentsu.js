import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work' 
import { Badge,Container,List, ListItem, UnorderedList,Heading, Divider  } from '@chakra-ui/react'


const Post = () => (
  <Layout title="Dentsu">
    <Container>
      <Heading as="h3" fontSize={30} mb={3}>
        Denstu
      </Heading>
      <Title>
        Jr. Data Scientist <Badge>July 2020- Jan 2022</Badge>
      </Title>
   <Section delay={0.2}>
          <Divider my={6} />
        </Section>
  
 <Container>
     
       <WorkImage src="/images/wfh.gif" alt="skill" />
     
      <List ml={4} my={5}>
        <ListItem>
          <Meta> Team </Meta>
      <UnorderedList>
            <ListItem> 
            Data Analytics
            </ListItem>
            
            </UnorderedList>
        </ListItem> 

        <ListItem>
    
          <Meta>Key Highlights</Meta>
          <UnorderedList>
            <ListItem> 
            Developed and managed reporting dashboards for multiple clients to provide a holistic view of the key KPIs for reporting marketing data across various channels and <b>reducing the in-house post campaign analysis time by 50%.</b>
            </ListItem>
            <ListItem>
            Scoping new products to fully utilize clients&apos; campaigns&apos; data, such as building performance predictor to accurately determine the upper and lower funnel performance parameters and <b>saving 20% cost on media planning and activation.</b>
            </ListItem> 
            <ListItem>
              Developed and scheduled data pieplines to save third party reliance for ingesting marketing performance data from various platforms <b> economizing on cost by 4k$/month</b>
            </ListItem> 
            </UnorderedList>
        </ListItem>

        

        <ListItem>     
          <Meta>Hands-on Tech Stack</Meta>
          <UnorderedList>
            <ListItem> 
            Google Cloud Platform (IAM,GKE,GCS,BigQuery)
            </ListItem>
            <ListItem> 
            Python and SQL
            </ListItem>
            <ListItem> 
            Salesforce Datorama
            </ListItem>
            <ListItem> 
            Data Studio
            </ListItem>
       </UnorderedList>
       </ListItem>
   

      </List>

     
    </Container>

      
    </Container>
  </Layout>
)

export default Post
