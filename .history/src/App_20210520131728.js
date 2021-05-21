
import './App.css';
import styled from 'styled-components';
import FormBox from './components/formBox';
import Particles from 'react-particles-js';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const 

const App = () => {
  return (
    <AppContainer>
      <Particles id='particles-js' 
        params={{
          particles: {

          }
        }}
      />
      <FormBox></FormBox>
    </AppContainer>
  );
}

export default App;
