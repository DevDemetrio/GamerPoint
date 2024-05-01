import {HeaderContainetr, TitleContainerBlue,  TitleContainerRed ,Title} from "./styled"

const Header = ({}) =>{
  return(
      <HeaderContainetr>
        <TitleContainerRed >
            <Title>
              Gamer
            </Title>
        </TitleContainerRed>
        <TitleContainerBlue >
            <Title>
              Placar
            </Title>
          </TitleContainerBlue>
      
      </HeaderContainetr>
  )
}

export default Header