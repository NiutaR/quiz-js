import React from 'react';
import './App.css';
//import styled from 'styled-components';
//import FormBox from './components/formBox';
import Particles from 'react-particles-js';

/*onst AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;*/

function App() {
  return (
    <div className="App">
     
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
          height;
      />
   
    </div>
  );
}
export default App;
