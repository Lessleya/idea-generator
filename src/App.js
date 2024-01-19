import React, {useState} from 'react';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import IntroSection from './components/IntroSection'
import GeneratorCard from './components/GeneratorCard'
import jsonData from './Ideas.json'

function App() {

  const [idea, setIdea] = useState(
    {     
        type: '',
        user: '',
        problem: ''
    }
    )


    const generateRandomIdea = () => {
        const randomTypeIndex = Math.floor(Math.random() * jsonData.Type_of_App.length);
        const randomUserIndex = Math.floor(Math.random() * jsonData.Target_User.length);
        const randomProblemIndex = Math.floor(Math.random() * jsonData.Problem_to_Solve.length);

        const randomType = jsonData.Type_of_App[randomTypeIndex];
        const randomUser = jsonData.Target_User[randomUserIndex];
        const randomProblem = jsonData.Problem_to_Solve[randomProblemIndex];

        setIdea({ type: randomType, user: randomUser, problem: randomProblem});

    };
    
  return (
    <ChakraProvider>

    <Grid 
    templateColumns={{md:'repeat(2, 1fr)', base:'repeat(1, 1fr)' }} gap={{base: '3vw', md: '5vw'}}
   
    
    
   >

    <GridItem w='100%'>
    <IntroSection idea={idea} generateRandomIdea={generateRandomIdea}/>
    </GridItem>

    <GridItem w='100%'>
    <GeneratorCard idea={idea} generateRandomIdea={generateRandomIdea}/>
    </GridItem>
        
       


    </Grid>


    </ChakraProvider>
    
  );
}

export default App;
