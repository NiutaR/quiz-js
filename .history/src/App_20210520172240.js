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
const ParticlesO = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(36,32,34);
background: radial-gradient(circle, rgba(36,32,34,1) 4%, rgba(104,145,194,1) 83%);
`;

function App() {
  return (
    <AppContainer>
      
     <FormBox></FormBox>
     <ParticlesO>
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
      </ParticlesO>
   </AppContainer>
    
  );
}
export default App;
