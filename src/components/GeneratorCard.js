import React,{useState} from 'react'
import { Box, IconButton, Center, Image, Spacer, Stack, Text, Button} from '@chakra-ui/react'
import offLight from '../assets/offLight.png'
import onLight from '../assets/onLight.png'
import { IoReload } from "react-icons/io5";
import IdeaBox from './IdeaBox'
import jsonData from '../Ideas.json'


export default function GeneratorCard() {
    const [isGenerated, setIsGenerated] = useState(false)
    const [idea, setIdea] = useState({ type: '', user: '', problem: '' });




    
    
        const generateRandomIdea = () => {
           
            const randomTypeIndex = Math.floor(Math.random() * jsonData.Type_of_App.length);
            const randomUserIndex = Math.floor(Math.random() * jsonData.Target_User.length);
            const randomProblemIndex = Math.floor(Math.random() * jsonData.Problem_to_Solve.length);
    
            const randomType = jsonData.Type_of_App[randomTypeIndex];
            const randomUser = jsonData.Target_User[randomUserIndex];
            const randomProblem = jsonData.Problem_to_Solve[randomProblemIndex];
    
            setIdea({ type: randomType, user: randomUser, problem: randomProblem});
            setIsGenerated(true)
           
    
        };




  return (
    <Box  name="generateIdea" m={{md:'2vw', base:'5vw'}} textAlign='center' rounded="3xl" bgColor={ idea.type ? "yellow.200" : "gray.100"} h= '90vh' dropShadow='lg'>   
      <Center h={ isGenerated ? "30vh" : "80vh"}>
        <Stack alignItems='center'>
    
        <Image  src={idea.type ? onLight : offLight} rounded="100%" boxSize="15vh" />
        <Box display={!isGenerated ? 'block' : 'none'} textAlign='center'>
        <Spacer boxSize='5vh' />
        <Button onClick={generateRandomIdea} colorScheme='yellow' fontSize={{md:"2xl", base:'xl'}} padding={{md:"2vw", base:"5vw"}}>Generate Idea</Button>

        </Box> 
        </Stack>
      </Center>


            {isGenerated && ( 
                <>
                <Stack spacing='2vh'>
                    <Text fontSize='1xl' letterSpacing='.5vw'>CREATE</Text>
                    <IdeaBox text={idea.type} />
                    <Text fontSize='1xl' letterSpacing='.5vw'>FOR</Text>
                    <IdeaBox text={idea.user} />
                    <Text fontSize='1xl' letterSpacing='.5vw'>TO HELP THEM</Text>
                    <IdeaBox text={idea.problem} />
                </Stack>  
                 <Spacer boxSize='5vh' />
         
                    <IconButton
                        aria-label="Generate Idea"
                        icon={<IoReload />}
                        onClick={generateRandomIdea}
                        bg="rgba(255, 255, 255, 0.5)"
                    />
                    </>

            )}
         
      

    </Box>
  )
}
