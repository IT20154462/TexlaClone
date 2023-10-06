import React from 'react'
import style from "style-components"

function Section() {
  return (
    <Wrap>
      Section
    </Wrap>
  )
}

export default Section

const Wrap = style.div`
    width:  100vw;
    heigth: 100vh;
    background: orange;

`
