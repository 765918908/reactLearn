import React, { useContext } from 'react';
import { CreateContext, UPDATE_COLOR } from './Color'
export const Buttons = () => {
  const { dispatch } = useContext(CreateContext)

  return (
    <div>
      <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'red' }) }}>红色</button>
      <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'yellow' }) }}>黄色</button>
    </div>
  )
}

export const ShowArea = () => {
  const { color } = useContext(CreateContext)
  return (
    <h2 style={{ color: color }}>
      字体颜色:ShowArea
    </h2>
  )
}
