import styled from 'styled-components';


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;


`;
export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 11px;
    color: #47434b;
    font-weight: 500;
    text-decoration: none;
    margin: 10px 0;

`;

export const BoldLink = styled.a`
    font-size: 11px;
    color: rgb(204,128,161);
    font-weight: 600;
    text-decoration: none;
    margin: 0 4px;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.03);
    padding: 0 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: #47434b;
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(204,128,161);
    }
`;


export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #47434b;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(204,128,161);
    background: radial-gradient(circle, rgba(204,128,161,1) 0%, rgba(148,187,233,1) 80%);

    &:hover {
        filter: brightness(1.03);
    }
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
  min-height: 18px;
`;

export const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;