
import './App.css';
import styled from 'styled-components';
import FormBox from './components/formBox';
import ParticleBackground from 'rea';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;


const App = () => {
  return (
    <AppContainer>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
   

      <FormBox></FormBox>
    </AppContainer>
  );
}

export default App;
