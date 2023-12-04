import styled from "styled-components";
import InputMask from 'react-input-mask';


export const ManagerArea = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
`;

export const Button = styled.button`
  border: 2px solid #169D1A;
  font-size: 1rem;
  background-color: white;
  color: #169D1A;
  padding: 1rem;
  border-radius: 0.5rem;

  &:hover{
    cursor: pointer;
    background-color: #169D1A;
    color: white;
  }
`;

export const InputM = styled(InputMask)`
  padding: 8px;
  flex: 1;
`
export const Input = styled.input`
  padding: 8px;
  flex: 1;
`;

export const Select = styled.select`
  flex: 1;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
 
`

export const GroupContent = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 0.5rem 0;
`

export const Submit = styled.input`
  border: 2px solid #169D1A;
  font-size: 1rem;
  background-color: white;
  color: #169D1A;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  margin: 1rem auto;
  &:hover{
    cursor: pointer;
    background-color: #169D1A;
    color: white;
  }

`;

export const DisplayArea = styled.div`
  margin: 4rem 0 2rem 2rem;

  p{
    background-color: green;
    padding: 0.5rem;

    button{
      border: 2px solid #169D1A;
      font-size: 1rem;
      background-color: white;
      color: #169D1A;
      border-radius: 0.5rem;

      &:hover{
        cursor: pointer;
        background-color: #169D1A;
        color: white;
      }
    }
  }
 
`