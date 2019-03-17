import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border:0.25rem solid var(--hotPink);
border-color: ${props => (props.shoppingBag? 
    "var(--mainPurple)":"var(--hotPink)")};
color:${prop => prop.shoppingBag? 
    "var(--mainPurple)":"var(--hotPink)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:${prop => prop.shoppingBag ? 
        "var(--mainPurple)":"var(--hotPink)"};
    color:var(--mainPink);
}
&:focus{
    outline: none;
}
`;