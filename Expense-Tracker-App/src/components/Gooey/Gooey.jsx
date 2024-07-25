import React from 'react'
import styled, { keyframes } from 'styled-components';
import WindowSize from '../../utils/WindowSize'
function Gooey() {
  const {width, height} = WindowSize()
  const moveGooey = keyframes`
        0%{
          transform: translate(0, 0);

        }
        50%{
          transform: translate(${width}px, ${height/2}px);
        }
        100%{
          transform: translate(0, 0);
        }
  `;


  const Gooey = styled.div`
        height: 500px;
        width: 500px;
        border-radius: 50%;
        background: linear-gradient(to right, #f10d0d, #df3955, #bc287c, #e30de3);
        position: absolute;
        top: -47px;
        left: -97px;
        filter: blur(200px);
        animation: ${moveGooey} 12s linear infinite alternate;
        

  `;


  return (
    <Gooey>
      
    </Gooey>
  )
}

export default Gooey
