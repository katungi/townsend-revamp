import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import router from "./router.ts"

const App = React.memo() => {
    return (
      <RouterProvider router={router} />
    )
}
export default App