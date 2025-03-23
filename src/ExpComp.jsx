import React from 'react'
import {memo} from 'react'
function ExpComp(props) {
    console.log("ExpComp Rendered ",props.count," times")
  return (
    <div>
        ExpComp
    </div>
  )
}
export default memo(ExpComp)
// memo means only one time it shows
// export default ExpComp - it is shown as many times as we click