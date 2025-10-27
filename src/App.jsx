import './App.css'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { createBrowserRouter, RouterProvider,  } from "react-router";
import appStore from './utils/AppStore'
import BrowsePage from './files/BrowsePage';
import { Provider } from "react-redux";
import ProfilePage from './files/ProfilePage';


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
    },
    {
      path : "/profile",
      element: <ProfilePage/>
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
