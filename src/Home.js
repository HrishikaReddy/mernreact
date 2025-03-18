// import React from 'react'

// export default function Home() {
//   return (
//     <div>
//       Welcome
//     </div>
//   )
// }

import React from 'react'
import { UserContext } from './App25'
import { useContext } from 'react'
export default function Home() {
  const {email,name} = useContext(UserContext)
  return (
    <div>Welcome {name}-{email}</div>
  )
}
