import React from 'react';
import './App.css';
import styled from 'styled-components';
//import FormBox from './components/formBox';
import Particles from 'react-particles-js';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //flex-direction: column;
  //align-items: center;
  justify-content: center;
  background-color: black;
  
`;

function App() {
  return (
    <AppContainer>
     
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 150,
            },
            "size": {
              "value": 5
            }
          },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          
          }}
          height="100vh"
      />
   </AppContainer>
    
  );
}
export default App;
