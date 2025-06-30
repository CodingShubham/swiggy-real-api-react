// import React from "react";
// import ReactDOM from "react-dom/client";


// const App=() => <h1>Hellow Shubham</h1>            // component



// const elemnt=document.querySelector('.root');
// const reactr=ReactDOM.createRoot(elemnt);


// reactr.render(<App/>);



import React from "react";
import ReactDOM from "react-dom/client"
import Apparea from "./src/Apparea";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./About";
import BodyContent from "./src/BodyContent";
import Contact from "./src/Contact";
import Offers from "./src/Offers";
import Cart from "./src/Cart";
import RestrauntsMenu from "./src/RestrauntsMenu";



const routes=createBrowserRouter([

    {
        path:"/",
        element:<Apparea/>,
        children:[


            {
                path:"/",
                element:<BodyContent/>,

            },
            
    {
        path:"/about",
        element:<About/>
    },


    {
        path:"/contact",
        element:<Contact/>,
    },


        
            {
                path:"/cart",
                element:<Cart/>,

            },



            
            {
                path:"/offers",
                element:<Offers/>,

            },


            {
                path:"/restraunts/:resid",
                element:<RestrauntsMenu/>
            }


            
           


        ]
    },


])


const elemnt=document.querySelector(".root");
const react=ReactDOM.createRoot(elemnt);
react.render(<RouterProvider router={routes}/>);





