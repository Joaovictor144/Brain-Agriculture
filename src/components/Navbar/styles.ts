import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #169D1A;
  height: 4rem;
`;

export const Content = styled.div`
  display: flex;  
  justify-content: space-between; 
  height: 100%;
`;

export const Logo = styled.span`
  font-size: 2rem;
  align-self: center;
  padding: 1rem;
  color: white;
  font-weight: bold;
`;

export const ContentNavigation = styled.div`
  display: flex;

`;

export const Button = styled(Link)`
  
  background: none;
  align-items: center;
  padding: 0 2rem;
  display: flex;
  color: white;
  border: none;
  border-bottom-color: transparent;
  border-bottom-width: 6px;
  border-bottom-style: none;
  text-decoration: none;

  &:hover{
    border-bottom-color: green;
    border-bottom-style: solid;
    cursor: pointer;
  }
`