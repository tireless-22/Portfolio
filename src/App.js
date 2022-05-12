import styled from "styled-components";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SideNav from "./Components/SideNav";
import Home from "./Pages/Home"
import AboutMe from "./Pages/AboutMe"
import Resume from "./Pages/Resume"
import Github from "./Pages/Github"
import Services from "./Pages/Services"
import Projects from "./Pages/Projects"
import "./App.css"


const AppLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;



`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 120px);
  /* background-color: red; */
`;




function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <SideNav />
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="aboutMe" element={<AboutMe />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="resume" element={<Resume />}></Route>
              <Route path="github" element={<Github />}></Route>
              <Route path="services" element={<Services />}></Route>
            </Routes>
          </MainContainer>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
