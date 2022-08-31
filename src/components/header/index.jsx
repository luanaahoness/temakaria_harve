import { HeaderStyled, Logo, Search } from "./style";
function Header (){
    return(
        <HeaderStyled>
            <Logo>
                <h1> Harve </h1>
                    <span>Sushi</span>
            </Logo>

            <Search>
            <input></input>
            <button> Pesquisar</button>
            </Search>
        </HeaderStyled>
    )
}

export default Header;