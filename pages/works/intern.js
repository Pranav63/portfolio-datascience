import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work' 
import { Badge,Container,List, ListItem, UnorderedList,Heading, Divider  } from '@chakra-ui/react'


const Post = () => (
  <Layout title="Dentsu">
    <Container>
      <Heading as="h3" fontSize={30} mb={3}>
        Internships
      </Heading>
      <Title>
        Software Engineer/Data Science Intern <Badge>Jun 2017 - Jun 2020</Badge>
      </Title>
   <Section delay={0.2}>
          <Divider my={6} />
        </Section>
  
 <Container>
     
       <WorkImage src="/images/intern.gif" alt="skill" />
     
      <List ml={4} my={5}>
        <ListItem>
          <Meta> HP </Meta> <Badge>May 2020 - Nov 2020</Badge>
      <UnorderedList>
            <ListItem> 
            Built an end-to-end production grade image processing solution to automate smart measurement in the manufacturing line,
saving up to <b>3 min per image set and 20 manhours per week.</b>

            </ListItem>
            <ListItem>
            Analyzed and built predictive quality machine learning models for separating good versus bad printheads from x-ray image
which lead to <b>5$ cost reduction per printhead.</b>
</ListItem>
            </UnorderedList>
        </ListItem> 

        <ListItem>
    
          <Meta>DELL</Meta> <Badge>May 2018 - July 2018</Badge>
          <UnorderedList>
            <ListItem> 
            Analyzed and monitored application servers used for server logs management and prevented servers’ downtime using Splunk tool.

            </ListItem>
            <ListItem>
             Measured and administered software and hardware utilizations of the remote servers and presented abstracted information to the senior executives.
            
            </ListItem> 
            
            </UnorderedList>
        </ListItem>

        

        <ListItem>     
          <Meta>Samsung</Meta> <Badge>May 2017 - July 2017</Badge>
          <UnorderedList>
            <ListItem> 
            Collaborated with a team of interns to generate ideas contributing to a project for Indian railways.

            </ListItem>
            <ListItem> 
           Constructed multiple modules for an app that would administer child trafficking on railway stations and engineered
asolution for in-train chat app that wouldlet auser connect to the people on train in caseof emergencies.
            </ListItem>
            
           
       </UnorderedList>
       </ListItem>
   

      </List>

     
    </Container>

      
    </Container>
  </Layout>
)

export default Post
