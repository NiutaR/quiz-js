
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


const App = () => {
  return (
    <AppContainer>
      <div className="App">
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": 3
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }}/>
        </div>
      <FormBox></FormBox>
    </AppContainer>
  );
}

export default App;
