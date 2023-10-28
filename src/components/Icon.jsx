import styled from "styled-components"




export default function Icon({color, childern}) {
  return (
    <StyledIcon background={color}>{childern}</StyledIcon>
  )
}


const StyledIcon = styled.div`
height: 3.5rem;
width: 3.5rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4rem;
color: white;
cursor: pointer;
background: ${(props) => props.background};
svg {
    width: 1.5rem;
    height: 1.5rem;
}

`;