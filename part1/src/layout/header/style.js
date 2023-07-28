import  styled  from "styled-components";
import AstroLogo from '../../staics/Logo1.png'
import github from '../../staics/github.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 98px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    width: 150px;
    height: 100%;
    background-image: url(${AstroLogo});
    background-size:100% 100%;
    background-repeat:no-repeat;
`

export const GithubIcon = styled.a.attrs({
    href:'https://github.com/YasmingMeng/ReactStart'
})`
    width: 50px;
    height: 50px;
    background-image: url(${github});
    background-size:100% 100%;
    background-repeat:no-repeat;
    left: 15px;
`

export const Icon = styled.i.attrs({
    href:'https://github.com/YasmingMeng/ReactStart'
})`
    font-size: 30px;
    left: 15px;

    &.focused {
        font-size: 40px;
     }
`