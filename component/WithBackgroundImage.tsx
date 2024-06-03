import {
    Stack,
    Flex,
    Heading,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  

  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'70vh'}
        backgroundImage={'url(/images/tlaOne.jpg)'}
        bgRepeat="no-repeat"
        backgroundSize={['cover', 'cover','cover']}
        opacity={0.95}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'6xl'} marginTop={'30px'} align={'center'} spacing={2}>
          <Heading 
          color={'pink.400'} 
          fontSize={useBreakpointValue({ base: '25px', md: '8xl' })}
          textShadow={'0px 0px 10px rgba(0,0,0,0.5)'}
          >The Leadership Academy</Heading>
          <Text 
          color={'white'} 
          fontSize={useBreakpointValue({ base: '15px', md: '3xl' })} 
          textShadow={'0px 0px 10px rgba(0,0,0,0.5)'}
          >
          Empowering Tomorrow's Leaders 
            </Text>
            <Stack direction={useBreakpointValue({ base: 'column', md: 'row' })}>
              <Button
                bg={'pink.600'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'pink.400' }}>
                Show me more
              </Button>
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }