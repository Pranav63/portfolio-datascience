import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work' 
import { Badge, Container, List, ListItem, UnorderedList, Heading, Divider } from '@chakra-ui/react'

const Post = () => (
  <Layout title="HPE">
    <Container>
      <Heading as="h3" fontSize={30} mb={3}>
        Hewlett Packard Enterprise (HPE)
      </Heading>
      <Title>
        Senior Data Scientist <Badge>Aug 2024 - Present</Badge>
      </Title>
      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
  
      <Container>
        <WorkImage src="/images/hpe.gif" alt="HPE Office" />
     
        <List ml={4} my={5}>
          <ListItem>
            <Meta>Team</Meta>
            <UnorderedList>
              <ListItem>Digital Transformation - Advanced Analytics</ListItem>
            </UnorderedList>
          </ListItem> 

          <ListItem>
        <Meta>Key Highlights</Meta>
        <UnorderedList>
          <ListItem>
            Developed advanced machine learning models to predict factory ship dates for product delivery to customers, accounting for varying supplier complexities across different regions. This improved supply chain efficiency and customer satisfaction.
          </ListItem>
          <ListItem>
            Led a project on predicting production cycle times, enabling better resource allocation and production planning. This resulted in optimized manufacturing processes and reduced lead times.
          </ListItem>
          <ListItem>
            Designed and implemented an in-house chatbot solution, &quot;ChatHPE&quot;, utilizing GPT-4.0 with custom guardrails to ensure compliance with company policies. This enhanced internal communication and knowledge sharing while maintaining data security.
          </ListItem>
        </UnorderedList>
          </ListItem>

          <ListItem>     
            <Meta>Tech Stack</Meta>
            <UnorderedList>
              <ListItem>Python (TensorFlow, PyTorch, Scikit-learn)</ListItem>
              <ListItem>Apache Spark for big data processing</ListItem>
              <ListItem>Cloud platforms (AWS, Azure)</ListItem>
              <ListItem>Docker and Kubernetes for containerization</ListItem>
              <ListItem>MLflow for ML lifecycle management</ListItem>
            </UnorderedList>
          </ListItem>
        </List>
      </Container>
    </Container>
  </Layout>
)

export default Post