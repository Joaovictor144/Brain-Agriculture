import * as S from "./styles";

export const NavBar = () => {
  
  return (
    <S.Container>
      <S.Content>
        <S.Logo>Brain Agriculture</S.Logo>
        <S.ContentNavigation>
          <S.Button to={'/'}>Home</S.Button>
          <S.Button to={'/produtores'}>Produtores</S.Button>
        </S.ContentNavigation>
      </S.Content>
    </S.Container>
  )
}