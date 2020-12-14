import React from 'react';
import { Buttons, ShowArea } from './component'
import { Color } from './Color'
function App () {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}
export default App