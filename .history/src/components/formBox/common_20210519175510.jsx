import styled from 'styled-components';


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;


`;
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.div`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;

`;

export const BoldLink = styled.div`
    font-size: 12px;
    color: rgb(204,128,161);
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.div`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.0.3);
    padding: 0 10px;
    border-bottom: 1.4px solid transparent;

    &:focus {
        outline: none;
    }
`;