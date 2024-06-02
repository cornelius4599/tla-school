import {
    Stack,
    Flex,
    Heading,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  

  
  export default function aboutUs() { 
    return (
      <Flex
        w={'full'}
        h={'60vh'}
        backgroundImage={'url(/images/tlaThree.jpg)'}
        backgroundSize={'cover'}
        opacity={0.95}
        backgroundPosition={'center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'3xl'} align={'center'} spacing={6}>
          <Heading color={'pink.400'} fontSize={'7xl'} textShadow={'0px 0px 10px rgba(0,0,0,0.5)'}>About Us</Heading>
          <Text color={'white'} fontSize={'2xl'} textShadow={'0px 0px 10px rgba(0,0,0,0.5)'}>
         
            </Text>
            <Stack direction={'row'}>
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }