import { CardContainer, CirclePoint, Point } from "./styled"
import { DivMoreLess, Less, More } from "../infoMoreLess"
import ButttonMore from "../ButtonMore"
import { ButtonContainer, } from "../../containerButton"
import ButttonLess from "../ButtonLess"
import { ContainerButtonInternalLess } from "../../containerButtonInternalLess copy"
import { ContainerButtonInternalMore } from "../../containerButtonInternalMore"
import React from 'react';


const Card = ({primaryColor, primaryDetailColor}) =>{
  
  const [numberPoint, setNumberPoint] = React.useState(0);

  function handleClickPrimaryMore(poitPrimary){
    setNumberPoint((prevNumber) => prevNumber + poitPrimary);
  }
  function handleClickSeundayLess(pointSegundary){
    setNumberPoint((prevNumber) => prevNumber - pointSegundary);
  }

  return(
    <CardContainer $primaryColor={primaryColor}>
      <CirclePoint>
          <Point>
            {numberPoint}
          </Point>
      </CirclePoint>
      <DivMoreLess $primaryDetailColor={primaryDetailColor}>
          <More>
             +
          </More>
          <Less>
            -
          </Less>
      </DivMoreLess>
      <ButtonContainer >
            <ContainerButtonInternalMore>
              <ButttonMore  onClick={() => handleClickPrimaryMore(1)} number={1}/>
              <ButttonMore  onClick={() => handleClickPrimaryMore(3)} number={3}/>
              <ButttonMore  onClick={() => handleClickPrimaryMore(5)} number={5}/>
              <ButttonMore  onClick={() => handleClickPrimaryMore(10)} number={10}/>
            </ContainerButtonInternalMore>
              <ContainerButtonInternalLess>
              <ButttonLess onClick={() => handleClickSeundayLess(1)}  number={1}/>
              <ButttonLess onClick={() => handleClickSeundayLess(3)}  number={3}/>
              <ButttonLess onClick={() => handleClickSeundayLess(5)}  number={5}/>
              <ButttonLess onClick={() => handleClickSeundayLess(10)} number={10}/>
            </ContainerButtonInternalLess>

      </ButtonContainer>
    </CardContainer>
  )
}

export default Card