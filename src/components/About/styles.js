import styled from 'styled-components';

export const AboutMeSection = styled.section`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .aboutmecontent{
    align-items: center;
    justify-content: center;

    @media (max-width: 640px){
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  .aboutmetext{
    margin-top: 2rem;
    

    @media (max-width: 640px){
      text-align: center;

      button{
        margin-top: 1.25rem;
      }
    }
  }
`;