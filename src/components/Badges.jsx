import React from 'react'
import styled from 'styled-components'
import { contentColor } from '../utils'

function Badges({ content,
  clean = false,
  glow = false,
  paid = false,
  late = false, }) {
  return (
    <Div glow={glow} paid={paid} late={late} clean={clean} >{content}</Div>
  )
}

const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${contentColor};
  cursor: pointer;
  margin-top: 1rem;

  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${contentColor};
     color:${contentColor};`}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({ paid }) =>
    paid &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}
${({ late }) =>
    late &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badges