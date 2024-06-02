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
  
  export default function Academics() {
    return (
      <Container maxW={'7xl'} py={12}>
         <Stack spacing={0} align={'center'} marginBottom={20}>
          
          </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            
            <Heading color={'pink.400'}  fontSize={'6xl'}>Academics</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            We offer a comprehensive curriculum that challenges and inspires our students to reach their full potential. Our dedicated educators are committed to providing personalized attention to ensure every student thrives academically and personally.
            We offer a comprehensive curriculum that challenges and inspires our students to reach their full potential. Our dedicated educators are committed to providing personalized attention to ensure every student thrives academically and personally.
            We offer a comprehensive curriculum that challenges and inspires our students to reach their full potential. Our dedicated educators are committed to providing personalized attention to ensure every student thrives academically and personally.
            We offer a comprehensive curriculum that challenges and inspires our students to reach their full potential. Our dedicated educators are committed to providing personalized attention to ensure every student thrives academically and personally.
            </Text>
          
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                '/images/tlaTuu.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }