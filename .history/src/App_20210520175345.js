import React from 'react';
import './App.css';
import styled from 'styled-components';
import FormBox from './components/formBox';
import Particles from 'react-particles-js';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(137,106,162);
  background: radial-gradient(circle, rgba(137,106,162,1) 8%, rgba(37,38,42,1) 49%, rgba(27,44,63,1) 83%);
  
  
`;
const ParticlesO = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
`;

function App() {
  return (
    <AppContainer>
     
     <ParticlesO>
      <Particles
      />
      </ParticlesO>
      <FormBox></FormBox>
   </AppContainer>
    
  );
}
export default App;
