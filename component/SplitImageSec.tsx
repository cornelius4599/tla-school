import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitImageSec() {
    return (
      <Container maxW={'5xl'} py={12} >
         <Stack spacing={0} align={'center'} marginBottom={20}>
          <Heading color={'pink.400'}>See Why We Stand Out</Heading>
          <Text></Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
       
        <Flex direction={'row'}>
            
           
        <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                '/images/pagent.jpg'
              }
              objectFit={'cover'}
            />
             </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'purple.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('purple.100', 'purple.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading color={'pink.400'}>Extracurricular Activities</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            At TLA, we believe that extracurricular activities play a crucial role in the holistic development of our students. Our vibrant student life offers a plethora of opportunities for students to explore their passions and talents. One of the highlights is our annual pageant show, where students showcase their creativity, confidence, and teamwork.            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'gray.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'gray.900')}
                text={'Curriculum Development'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.400')}
                text={'Resource Management'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Student Community Insights'}
              />
            </Stack>
          </Stack>
         
        </SimpleGrid>
      </Container>
    );
  }