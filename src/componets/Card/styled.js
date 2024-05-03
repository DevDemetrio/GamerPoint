import styled from "styled-components"

export const CardContainer = styled.div`
  width: 158px;
  height: 224px;
  margin-top: 30px;
  border-radius: 5%;
  padding-top: 10px;
  background-color: ${(props) => props.$primaryColor };
  margin-left: auto;
  margin-right: auto;

  @media(min-width: 600px){
    width: 374px;
    height: 530px;
  }
`

export const CirclePoint = styled.div`
  width: 74px;
  height: 74px;
  display: flex;
  margin: 0 auto 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  background-color: #FFFFFF;


  @media(min-width: 600px){
    width: 175px;
    height: 175px;
  }
`

export const Point = styled.span`
  color: #FF0000;
  font-size: 25px;
  font-weight: bold;

  @media(min-width: 600px){
    font-size: 45px;
  }
`