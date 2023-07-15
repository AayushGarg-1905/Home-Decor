import styled from "styled-components";

const Logo=()=>{
    return (
        <Wrapper>
            <span>Home</span>Decor
        </Wrapper>
    )
}

const Wrapper=styled.h3`
margin-bottom:0;
color:var(--clr-primary-4);
span{
    color:var(--clr-black)
}
`

export default Logo;