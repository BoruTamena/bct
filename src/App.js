
import { Hero } from './pages/Hero';
import './App.css';
import { Container, Grid, ThemeProvider} from '@mui/material';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Partner } from './pages/Partner';
import theme from './theme/theme';
import { Header } from './components/Header';




function App() {

  return (
    <div >
      <ThemeProvider theme={theme}>
    
        <Header/>
     
          <Hero/> 
   
      
      <About/>
      <Container>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <Courses/>
        </Grid> 

      </Grid>
      </Container>
      <Partner/>
      </ThemeProvider>
    </div>
  );
}
export default App;
