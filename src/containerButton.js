import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  height: 80px;
  margin: 9px auto 0 auto;
  padding: 0 10px 0 10px;
  border: none;

  @media(min-width: 600px){
    width: 330px;
    height: 266px;
  }

`

export const ButtonCotainerInternal = styled.div`
  width: 25px;
  height: 80px;
  border: 1px solid #000000;
  border-left: none;
  border-bottom: none;
  border-top: none;
  background-color: #dfd8d8;

`