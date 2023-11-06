import { Box, Container, Typography } from "@mui/material";

function App() {
  

  return (
    
 <Container sx={{bgcolor:'tomato', height: '100vh'}}>
  <Typography variant="h1">Hello World!</Typography>
 <Box >
  <Typography variant="h2"> This is text inside a Box component</Typography>
 </Box>
  
  
  </Container> 
  )
}

export default App
