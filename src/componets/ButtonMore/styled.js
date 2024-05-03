import styled from "styled-components";


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  border: none;
  border-radius: 50%;
  background-color: #FFFFFF; 
  
  font-size: 11px;
  font-weight: bold;
  color: #D00000;

  &+&{
    margin-top: 4px;
  }      
`

