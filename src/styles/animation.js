import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity:0;
}
to{
  filter: blur(0);
  opacity:1;
}
`

export const fadeIn = ({ time = '1s', type = 'cubic-bezier(.18,.89,.32,1.28)' } = {}) =>
  css`
  animation: ${time} ${fadeInKeyframes} ${type}
  `
