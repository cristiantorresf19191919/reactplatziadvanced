import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display:flex;
  overflow-x:scroll;
  width:100%;
  ${({ fixed }) => fixed ? fadeIn() : ''};
  ${props => props.fixed && css`
   background: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    position: fixed;
    right:0;
    top:-20px;
    transform:scale(.7);
    padding:5px;
    border-radius: 60px;
    overflow-x: scroll;
    width: 42rem;
    z-index:1;
    display:flex;
    justify-content: space-around;}
  
  `};
  &::-webkit-scrollbar {
    display: none;
  }  
`
export const Item = styled.li`
padding: 0 8px;
`
