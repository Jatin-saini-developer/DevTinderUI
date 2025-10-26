import './App.css'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { createBrowserRouter, RouterProvider,  } from "react-router";
import appStore from './utils/AppStore'
import BrowsePage from './files/BrowsePage';
import { Provider } from "react-redux";


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

    {
      path: "/browse",
      element: <BrowsePage/>
    }
  ]);


  return (  
 
    <Provider store={appStore}>
    <RouterProvider  router={router} >
    </RouterProvider >
    </Provider>

  )
}

export default App
