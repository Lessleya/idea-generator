import React from 'react'
import { Box, Center, Text} from '@chakra-ui/react'

export default function IdeaBox({text}) {
  return (

    
            <Center>
                <Box display="flex" justifyContent="center" alignItems="center" textAlign='center' rounded='lg' bg="rgba(255, 255, 255, 0.5)" px='2vw' width='80%' height='10vh'>
                <Text fontFamily='Merriweather' fontSize={{md:'3xl', base:'1xl'}}>{text}</Text>
                </Box>
            </Center>
    


    
  )
}
