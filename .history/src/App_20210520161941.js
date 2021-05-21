
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
const part


const App = () => {
 
  
  return (
    <AppContainer>
      <ParticleBackground />
      <FormBox></FormBox>
      
      
      
    </AppContainer>
  );
}

export default App;
