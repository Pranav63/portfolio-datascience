import { useState } from 'react'
import Layout from '../components/layouts/article'
import { motion } from 'framer-motion'
import { 
  Container, Box, Heading, Text, SimpleGrid, useColorModeValue, 
  VStack, HStack, Icon, Tooltip, Flex
} from '@chakra-ui/react'
import { FaPython, FaDatabase, FaChartBar, FaRobot, FaReact } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiTableau, SiGooglecloud } from 'react-icons/si'

const SkillCategory = ({ title, icon, skills }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box 
      borderWidth={1}
      borderRadius="lg"
      borderColor={borderColor}
      p={6}
      bg={bgColor}
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
      height="100%"
    >
      <VStack align="start" spacing={4} height="100%">
        <HStack>
          <Icon as={icon} boxSize={8} color={useColorModeValue('teal.500', 'teal.300')} />
          <Heading size="md">{title}</Heading>
        </HStack>
        <SimpleGrid columns={3} spacing={2} width="100%">
          {skills.map((skill, index) => (
            <Tooltip key={index} label={skill.name} placement="top">
              <Box textAlign="center">
                <Icon 
                  as={skill.icon} 
                  boxSize={8} 
                  color={useColorModeValue('gray.600', 'gray.400')}
                  _hover={{ color: useColorModeValue('teal.500', 'teal.300') }}
                />
                <Text fontSize="xs" mt={1}>{skill.name}</Text>
              </Box>
            </Tooltip>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

const SkillsPage = () => {
  const bgColor = useColorModeValue('teal.100', 'teal.900')
  const textColor = useColorModeValue('gray.800', 'white')

  const skillCategories = [
    {
      title: 'Data Science & ML',
      icon: FaChartBar,
      skills: [
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas },
        { name: 'Scikit-Learn', icon: SiScikitlearn },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'OpenCV', icon: SiOpencv },
      ]
    },
    {
      title: 'Generative AI',
      icon: FaRobot,
      skills: [
        { name: 'LLM Modeling', icon: FaRobot },
        { name: 'LLM Governance', icon: FaRobot },
        { name: 'Prompt Engineering', icon: FaRobot },
        { name: 'GPT-4', icon: FaRobot },
        { name: 'DALL-E', icon: FaRobot },
        { name: 'Stable Diffusion', icon: FaRobot },
      ]
    },
    {
      title: 'Programming',
      icon: FaPython,
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'SQL', icon: FaDatabase },
        { name: 'Bash Scripting', icon: FaDatabase },
      ]
    },
    {
      title: 'Big Data & Cloud',
      icon: SiGooglecloud,
      skills: [
        { name: 'Google Cloud Storage', icon: SiGooglecloud },
        { name: 'BigQuery', icon: SiGooglecloud },
        { name: 'Spark', icon: FaDatabase },
      ]
    },
    {
      title: 'Visualization',
      icon: SiTableau,
      skills: [
        { name: 'Data Studio', icon: SiGooglecloud },
        { name: 'Datorama', icon: FaChartBar },
        { name: 'Tableau', icon: SiTableau },
      ]
    },
    {
      title: 'Web Development',
      icon: FaReact,
      skills: [
        { name: 'ReactJS', icon: FaReact },
        { name: 'Flask', icon: FaPython },
        { name: 'Google ML API', icon: SiGooglecloud },
      ]
    },
  ]

  return (
    <Layout title="Skills">
      <Box
        bg={bgColor}
        color={textColor}
        py={20}
        textAlign="center"
        borderRadius="3xl"
        mb={10}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Skills & Expertise
        </Heading>
        <Text fontSize="xl">'Schooling doesn't assure employment, but skill does.'</Text>
      </Box>

      <Container maxW="container.xl" mt={10}>
        <VStack spacing={8}>
          <Flex width="100%" gap={8}>
            {skillCategories.slice(0, 2).map((category, index) => (
              <Box key={index} flex={1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCategory {...category} />
                </motion.div>
              </Box>
            ))}
          </Flex>
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={8} width="100%">
            {skillCategories.slice(2).map((category, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              >
                <SkillCategory {...category} />
              </motion.div>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Layout>
  )
}

export default SkillsPage
export { getServerSideProps } from '../components/chakra'