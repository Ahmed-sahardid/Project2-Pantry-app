import Box from '@mui/material/Box';
import Stack from '@mui/material/Box';


export default function Home(){
  const item = [
    "tomato",
    "potato",
    "onion",
    "garlic",
    "ginger"
  ]  

  return <Box 
    width={"100vw"} 
    height={"100vh"} 
    display={"flex"}
    alignItems={"center"} 
    justifyContent={"center"}>

    <Stack width={"800px"} height={"600px"} Spacing={2}>

      {item.map(([i]) =>(
      <Box key={i}
      width={"100vw"} 
      height={"100vh"} 
      display={"flex"}
      alignItems={"center"} 
      justifyContent={"center"}>
        
    </Box>
      ))}
    </Stack>
  </Box>
}