import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

function App() {
    let routes = createHashRouter([
    {path:"", element : <Layout/> , children:[
        {path:"", element:<Home/>},
        {path:"home", element:<Home/>},
        {path:"Portfolio", element:<Portfolio/>},
        {path:"about", element:<About/>},
        {path:"contact", element:<Contact/>},
        {path:"*", element:<NotFound/>},
    ]},
    ])
    return (
    <RouterProvider router={routes}/>
    ); 
}

export default App;
