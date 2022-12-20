import { createBrowserRouter } from 'react-router-dom'

import MainPage from '../containers/MainPage/MainPage'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
])

export default routes
