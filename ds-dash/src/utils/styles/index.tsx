import styled, { css } from "styled-components";

export const MainButton = styled.div`
  display: flex;
  width: 350px;
  background-color: #363535;
  padding: 10px 25px;
  box-sizing: border-box;
  border-radius: 7px;
  margin-bottom: 5px;
  box-shaadow: 0px 1px 5px 0px #000000;
`;

export const TextButton = styled(MainButton)`
  padding: 18px 28px;
  width: 300px;
`;

export const HomePageStile = styled.div`
  height: 100%;
  padding: 100px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const GuildMenuItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
  padding-right: 20px;
  background-color: #363535;
  border-radius: 7px;
  border: 1px solid #3d3d3d;

  margin-bottom: 5px;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

`;

export const AppBarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  background-color: #363535;
  border-radius: 10px;
`;

export const Title = styled.p`
font-size: 22px;
`

type FlexProps = Partial<{
  allignItems: string;
  justifyContent: string;
  flexDirection: string;
  marginBottom: string;
}>
export const Flex = styled.div<FlexProps>`
display: flex;
align-items: ${({allignItems }) => allignItems};
justify-content: ${({justifyContent }) => justifyContent};
flex-direction: ${({flexDirection }) => flexDirection};
margin-bottom: ${({marginBottom }) => marginBottom};
`

export const Grid = styled.div`
display: grid;
grid-template-columns 1fr 1fr 1fr;
`
export const TextArea = styled.textarea`
padding: 8px;
font-size: 14px;
background-color: #363535;
box-sizing: border-box;
color: white;
margin-top: 10px;

  background-clip: padding-box;
  border: 1px solid hsla(145, 0%, 54%, .5);

width: 100%;
border-radius: 7px;
outline: none;
resize: none;
height: 200px;
:hover {
  outline: none;
  box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
  -webkit-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
  -moz-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
}
`;
export const InputField = styled.input`
padding: 8px;
font-size: 14px;
background-color: #363535;
box-sizing: border-box;
color: white;
margin-top: 10px;

  background-clip: padding-box;
  border: 1px solid hsla(145, 0%, 54%, .5);

width: 100%;
border-radius: 7px;
outline: none;
:hover {
  outline: none;
  box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
  -webkit-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
  -moz-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
}

`;

type ButtonProps = {
  variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`

padding: 9px;
font-size: 14px;

box-sizing: border-box;
color: white;
margin-top: 10px;
  outline: 0 !important;
    border: 0;
width: 100%;
border-radius: 7px;
:hover {
  outline: none;
  box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.25);
  -webkit-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.25);
  -moz-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.25);
}

${({ variant }) => variant === 'primary' &&
css`
background-color: #5c5c5e;
`}
${({ variant }) => variant === 'secondary' &&
css`
opacity: .8;
background-color: #ff9191;
`}


`;

export const Page = styled.div`
padding: 50px;
`;

export const SelectBar = styled.select`
padding: 8px;
font-size: 14px;
background-color: #363535;
box-sizing: border-box;
color: white;
margin-top: 10px;
margin-bottom: 40px;
height: 100%

  background-clip: padding-box;
  border: 1px solid hsla(145, 0%, 54%, .5);

width: 100%;
border-radius: 7px;
outline: none;

:hover {
  outline: none;
  box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
  -webkit-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
  -moz-box-shadow: -1px 1px 22px -6px rgba(212,212,212,0.18);
}
& > option {


}

`;

export const Overlay = styled.div`
height: 100%;
width: 100%;
background-color:rgba(#010101, 0.66);
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
`;
