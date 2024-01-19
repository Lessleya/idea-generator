import React from 'react'
import { Box, IconButton, Center, Image, Spacer, Stack, Text} from '@chakra-ui/react'
import offLight from '../assets/offLight.png'
import onLight from '../assets/onLight.png'
import { IoReload } from "react-icons/io5";
import IdeaBox from './IdeaBox'


export default function GeneratorCard({idea, generateRandomIdea}) {




  return (
    <Box  name="generateIdea" m={{md:'2vw', base:'5vw'}} textAlign='center' rounded="3xl" bgColor={ idea.type ? "yellow.200" : "purple.200"} h= '90vh' dropShadow='lg'>   
      <Center h="20vh">
        <Image marginTop="8vh" src={idea.type ? onLight : offLight} rounded="100%" boxSize="15vh" />
      </Center>
      <Spacer boxSize='5vh' />
      <Stack spacing='2vh'>
        <Text fontSize='1xl' letterSpacing='.5vw'>CREATE</Text>
        <IdeaBox text={idea.type} />
        <Text fontSize='1xl' letterSpacing='.5vw'>FOR</Text>
        <IdeaBox text={idea.user} />
        <Text fontSize='1xl' letterSpacing='.5vw'>TO HELP THEM</Text>
        <IdeaBox text={idea.problem} />
      </Stack>
      <Spacer boxSize='5vh' />
      <Box display={idea.type ? 'block' : 'none'}>
      <IconButton
        aria-label="Generate Idea"
        icon={<IoReload />}
        onClick={generateRandomIdea}
        bg="rgba(255, 255, 255, 0.5)"
      />
      </Box>

      

    </Box>
  )
}
