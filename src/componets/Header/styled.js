import styled from "styled-components";

export const HeaderContainetr = styled.header`
  height: 39px;
  display: flex;

  @media(min-width: 600px){
    height: 4.56rem;
  }
`

export const TitleContainerRed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: .6875rem;
  background-color: #FF0000;

  @media(min-width: 600px){
    padding-right: 6.8125rem;
  }
  
`
export const TitleContainerBlue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: .6875rem;
  background-color: #3300FF;

  @media(min-width: 600px){
    padding-left: 6.8125rem;
  }
`

export const Title = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: #FFFFFF;


  @media(min-width: 600px ){
    font-size: 1.875rem;
  }

`