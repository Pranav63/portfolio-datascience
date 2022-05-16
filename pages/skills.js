import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkImage, Meta } from '../components/work' 
import { Container,List, ListItem, UnorderedList,Heading, Divider  } from '@chakra-ui/react'
import P from '../components/paragraph'


const Posts = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Skills
      </Heading>
   <Section delay={0.2}>
          <Divider my={6} />
        </Section>
  
 <Container>
      <P>
       &apos;Schooling doesn&apos;t assure employment but skill does.&apos;
      </P>
       <WorkImage src="/images/skill.gif" alt="skill" />
     
      <List ml={4} my={5}>
        <ListItem>
          <Meta> Data Science Packages </Meta>
 			<UnorderedList>
            <ListItem> 
            NumPy
            </ListItem>
            <ListItem> 
            Pandas
            </ListItem>
            <ListItem> 
            MatplotLib
            </ListItem>
            <ListItem> 
            OpenCV
            </ListItem>
            <ListItem> 
            Scikit-Learn
            </ListItem>
            <ListItem> 
            DeepSim
            </ListItem>
            <ListItem> 
            Beautiful Soup
            </ListItem>
            </UnorderedList>
        </ListItem> 

        <ListItem>
    
          <Meta>Programming Languages</Meta>
          <UnorderedList>
            <ListItem> 
            Python
            </ListItem>
            <ListItem>
            SQL
            </ListItem> 
            <ListItem>
            Bash Scripting
            </ListItem> 
            </UnorderedList>
        </ListItem>

        <ListItem>
        
          <Meta>DataBase and BigData</Meta>
          <UnorderedList>
            <ListItem> 
            Google Cloud Storage
            </ListItem>
            <ListItem> 
            Big Query 
            </ListItem>
            <ListItem> 
            Spark
            </ListItem>
        </UnorderedList>
        </ListItem>

        <ListItem>     
          <Meta>Artificial Intelligence</Meta>
          <UnorderedList>
            <ListItem> 
            Machine Learning
            </ListItem>
            <ListItem> 
            Statistical Modelling
            </ListItem>
            <ListItem> 
            Data Wrangling
            </ListItem>
       </UnorderedList>
       </ListItem>
       
   <ListItem>
          <Meta> Viz Tools </Meta>
          <UnorderedList>
           <ListItem> 
            Data Studio
            </ListItem>
            <ListItem> 
            Datorama (Salesforce)
            </ListItem>
            <ListItem> 
            Tableau
            </ListItem>
       </UnorderedList>
       </ListItem>

         <ListItem>
          <Meta> APIs and Frameworks </Meta>
          <UnorderedList>
           <ListItem> 
            ReactJS
            </ListItem>
            <ListItem> 
            Flask
            </ListItem>
            <ListItem> 
            Google ML 
            </ListItem>
       </UnorderedList>
       </ListItem>

      </List>

     
    </Container>

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'