import { CardContainer, CirclePoint, Point } from "./styled"
import { DivMoreLess, Less, More } from "../infoMoreLess"
import ButttonMore from "../ButtonMore"
import { ButtonContainer, ButtonCotainerInternal } from "../../containerButton"


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
          <ButtonCotainerInternal >
            <ButttonMore />
          </ButtonCotainerInternal>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card