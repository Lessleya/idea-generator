import React from 'react'
import { Box, Image, Text, Spacer, Stack, Button} from '@chakra-ui/react'
import Logo from '../assets/logo.avif'
import { MdOutlineAppShortcut } from "react-icons/md";
import { TbUserScan } from "react-icons/tb";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-scroll';


export default function IntroSection({idea, generateRandomIdea}) {
  return (
   <Box  h={{md:'90vh', base:'70vh'}} m={{base:'8vw', md:'5vw'}}>
    <Box display='flex' alignItems='center' textAlign={{base:'center', md:'left'}}  >
    <Image src={Logo} boxSize={{md:"4vw", base:'10vw'}} />
    <Text fontSize='3xl' fontFamily='Merriweather'>idea<strong style={{color: '#886BCB'}}>Generator</strong></Text>
    </Box>
    <Spacer boxSize="8vh"/>
    <Stack>

    <Text textAlign={{base:'center', md:'left'}} fontSize={{md:'5xl', base: '3xl'}} as="b">From Random Sparks</Text>
    <Text textAlign={{base:'center', md:'left'}}  fontSize={{md:'5xl', base: '3xl'}} as="b">To Brilliant Projects!✨</Text>

    </Stack>
    
    <Spacer boxSize="3vh"/>
    <Text textAlign={{base:'center', md:'left'}}>Say hello to endless coding fun! 'Idea Generator' brings you quirky and cool project prompts that'll keep your developer skills sharp and your creativity flowing. Dive in and see what you'll create today!</Text>
    <Spacer boxSize="7vh"/>
    <Box display='flex' justifyContent="space-between" alignItems="center">
        
        <Stack  alignItems='center' textAlign='center' >
        <MdOutlineAppShortcut color='886BCB'  size="3vw"/>
        <Text as='b' >Type of App</Text>
        </Stack>
        <FaPlus color='orange' />
        <Stack alignItems='center'>
        <TbUserScan  color='886BCB' size="3vw"/>
        <Text as='b' >Target User</Text>
        </Stack>
        <FaPlus color='orange'  />
        <Stack alignItems='center'>
        <MdOutlineReportProblem color='886BCB' size="3vw" />
        <Text as='b' >Problem to Solve</Text>
        </Stack>
    </Box>
    <Spacer boxSize="7vh"/>

    <Box textAlign={{base:'center', md:'left'}}>
    <Link to='generateIdea' smooth={true} offset={-130} duration={500}>
    <Button onClick={generateRandomIdea} colorScheme='yellow' fontSize={{md:"2xl", base:'xl'}} padding={{md:"2vw", base:"5vw"}}>Generate Idea</Button>
    </Link>


    </Box>

 
   </Box>
  )
}
