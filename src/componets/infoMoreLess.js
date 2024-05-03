import styled from "styled-components";

export const DivMoreLess = styled.div`
  width: 130px;
  padding: 0 15px 0 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.$primaryDetailColor};
  border-top: none;
  border-left: none;
  border-right: none;

  @media(min-width: 600px){
    width: 307px; 
  }
  
`
export const More = styled.span`
  display: block;
  font-size: 20px;
  color: ${(props) => props.$primaryDetailColor};

  @media(min-width: 600px){
    font-size: 45px;
  }
`
export const Less = styled.span`
  display: block;
  font-size: 30px;
  color: ${(props) => props.$primaryDetailColor};

  @media(min-width: 600px){
    font-size: 55px;
  }
`