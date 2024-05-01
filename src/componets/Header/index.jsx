import {HeaderContainetr, TitleContainer, Title} from "./styled"

const Header = ({containerTitlePrimary,containerTitleSecundary}) =>{
  return(
      <HeaderContainetr>
        <TitleContainer $containerTitlePrimary={containerTitlePrimary}>
            <Title>
              Gamer
            </Title>
        </TitleContainer>
        <TitleContainer $containerTitleSecundary={containerTitleSecundary}>
            <Title>
              Placar
            </Title>
          </TitleContainer>
      
      </HeaderContainetr>
  )
}

export default Header