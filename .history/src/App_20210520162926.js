
import './App.css';
import styled from 'styled-components';
import FormBox from './components/formBox';
import ParticleBackground from 'react-particle-backgrounds';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;



const App = () => {
 
  const settings4 = {
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }
  return (
    <AppContainer>
      
      <FormBox></FormBox>
      
      
      
    </AppContainer>
  );
}

export default App;
