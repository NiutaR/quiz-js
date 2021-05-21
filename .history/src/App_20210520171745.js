import React from 'react';
import './App.css';
import styled from 'styled-components';
import FormBox from './components/formBox';
import Particles from 'react-particles-js';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  //position: absolute;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  
`;
const Particles = style.div`
  p
`;

function App() {
  return (
    <AppContainer>
     <FormBox></FormBox>
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
