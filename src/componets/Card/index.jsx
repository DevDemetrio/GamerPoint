import { CardContainer, CirclePoint, Point } from "./styled"
import { DivMoreLess, Less, More } from "../infoMoreLess"
import ButttonMore from "../ButtonMore"
import { ButtonContainer, } from "../../containerButton"
import ButttonLess from "../ButtonLess"
import { ContainerButtonInternalLess } from "../../containerButtonInternalLess copy"
import { ContainerButtonInternalMore } from "../../containerButtonInternalMore"


const Card = ({primaryColor, primaryDetailColor}) =>{
  
  return(
    <CardContainer $primaryColor={primaryColor}>
      <CirclePoint>
          <Point>
            100
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
              <ButttonMore  number={1}/>
              <ButttonMore  number={3}/>
              <ButttonMore  number={5}/>
              <ButttonMore  number={10}/>
            </ContainerButtonInternalMore>
              <ContainerButtonInternalLess>
              <ButttonLess  number={1}/>
              <ButttonLess  number={3}/>
              <ButttonLess  number={5}/>
              <ButttonLess  number={10}/>
            </ContainerButtonInternalLess>

      </ButtonContainer>
    </CardContainer>
  )
}

export default Card