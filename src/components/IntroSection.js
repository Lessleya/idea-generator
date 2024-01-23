import React from 'react'
import { Box, Image, Text, Spacer, Stack} from '@chakra-ui/react'
import Logo from '../assets/logo.png'
import { MdOutlineAppShortcut } from "react-icons/md";
import { TbUserScan } from "react-icons/tb";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaPlus } from "react-icons/fa";


export default function IntroSection() {
  return (
   <Box  h={{md:'90vh', base:'70vh'}} m={{base:'0', md:'5vw'}}>

    

    <Box display='flex' gap='1vw' justifyContent={{base:'center', md:'left'}} alignItems='center' textAlign={{base:'center', md:'left'}} bgColor={{base: 'yellow.100', md:'white'}} p={{base:'3vh', md:'0'}}
 >
    <Image src={Logo} boxSize={{md:"2vw", base:'4vw'}} />
    <Text as='b' fontSize={{base:'md', md:'3xl'}} fontFamily='Merriweather'>AppIdea<strong style={{color: '#886BCB'}}>Generator</strong></Text>

    </Box>
    <Spacer boxSize="8vh"/>
    <Box mx={{base:'5vw', md:'0'}}>
    <Stack>

    <Text textAlign={{base:'center', md:'left'}} fontSize={{md:'5xl', base: '3xl'}} as="b">Let's </Text>
    <Text textAlign={{base:'center', md:'left'}}  fontSize={{md:'5xl', base: '3xl'}} as="b">Get Creative!✨</Text>

    </Stack>
    
    <Spacer boxSize="3vh"/>
    <Text  fontSize='xl' textAlign={{base:'center', md:'left'}}> Our Idea Generator gives you three random things often in combinations that might initially seem unconventional:  </Text>
    <Spacer boxSize="7vh"/>
    <Box display='flex' justifyContent="space-between" alignItems="center">
        
        <Stack  alignItems='center' textAlign='center' >
        <MdOutlineAppShortcut color='886BCB'  size='25%'/>
        <Text as='b' >Type of App</Text>
        </Stack>
        <FaPlus color='orange' />
        <Stack alignItems='center'>
        <TbUserScan  color='886BCB' size='25%'/>
        <Text as='b' >Target User</Text>
        </Stack>
        <FaPlus color='orange'  />
        <Stack alignItems='center'>
        <MdOutlineReportProblem color='886BCB' size='25%' />
        <Text as='b' >Problem</Text>
        </Stack>
    </Box>
    <Spacer boxSize="7vh"/>

    <Text fontSize="xl" textAlign={{base:'center', md:'left'}}> <strong>Your mission?</strong> Combine these elements to design a web app. It's a fun way to boost your creativity and coding skills. Ready to see what you can create? Hit 'Generate' and start! </Text>

 
    </Box>

 
   </Box>
  )
}
