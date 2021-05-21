
import './App.css';
import styled from 'styled-components';
import FormBox from './components/formBox';
import ParticleBackground from 'react-particle-backgrounds';


/*const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //text-align: center;
  
`;*/



const App = () => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 800,
      height: 200,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 1000,
      color: '#de7e85',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
  }
  return (
    //<AppContainer>
      <ParticleBackground settings={settings}  />
      <FormBox>
      
      </FormBox>
      
    //</AppContainer>
  );
}

export default App;
