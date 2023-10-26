import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Componant/Layout/Layout";
import Home from "./Componant/Home/Home";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Products from "./Componant/Products/Products";
import Cart from "./Componant/Cart/Cart";
import Contact from "./Componant/Contact/Contact";
import Rigester from "./Componant/Rigester/Rigester";
import Login from "./Componant/Login/Login";
import Populer from "./Componant/Populer/Populer";
import Catigory from "./Componant/Catigory/Catigory";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path:"/HOME", element: <Home /> },
        { path:"/Products", element: <Products /> },
        { path:"/CART", element: <Cart /> },
        { path:"/CONTACT", element: <Contact /> },
        { path:"/LOGIN", element: <Login /> },
        { path:"/RIGISTER", element: <Rigester /> },
        { path:"/CATIGORY", element: <Catigory /> },
        { path:"/POPULER", element: <Populer /> },
      
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
};

export default App;
