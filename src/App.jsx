import './App.css'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { createBrowserRouter, RouterProvider,  } from "react-router";
import appStore from './utils/AppStore'


function App() {


    const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },

    {
      path: "/signUp",
      element: <SignUpPage/>,
    },
  ]);


  return (  
 
    <Provider store={appStore}>
    <RouterProvider  router={router} >
    </RouterProvider >
    </Provider>

  )
}

export default App
