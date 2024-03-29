
import { Hero } from './pages/Hero';
import './App.css';
import { Container, Grid, ThemeProvider} from '@mui/material';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Partner } from './pages/Partner';
import theme from './theme/theme';
import { Header } from './components/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { CourseDetail } from './pages/CourseDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';


function App() {

  return (
    <div >
      <ThemeProvider theme={theme}>
          
         <Header/>
         <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about"element={<About/>} />
          <Route path="/course"element={<CourseDetail/>} />
          <Route path="/blog"element={<Blog/>} />
          <Route path="/blogdetail"element={<BlogDetail/>} />
          {/* Add more routes as needed */}

        </Routes> 
     
        <br/><br/>
          
      <Footer/>
      </ThemeProvider>
    </div>
  );
}
export default App;
