import React from 'react';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import IntroSection from './components/IntroSection'
import GeneratorCard from './components/GeneratorCard'


function App() {

    
  return (
    <ChakraProvider>

    <Grid 
    templateColumns={{md:'repeat(2, 1fr)', base:'repeat(1, 1fr)' }} gap={{base: '15vh', md: '5vw'}}
   
    
    
   >

    <GridItem w='100%'>
    <IntroSection/>
    </GridItem>

    <GridItem w='100%'>
    <GeneratorCard />
    </GridItem>
        
       


    </Grid>


    </ChakraProvider>
    
  );
}

export default App;
