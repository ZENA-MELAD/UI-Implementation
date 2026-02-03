import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ChatsPage from "../Pages/ChatsPage/ChatsPage";
import Search from "../Pages/Search/Search";
import IndividualChat from "../Pages/IndividualChat/IndividualChat";

const router=createBrowserRouter([{
    path:"/",
    element:<Root/>,
    children:[{
        path:"/",
        element:<ChatsPage/>},
        {
            path:"/individualchat/:id",
            element:<IndividualChat/>
        },
        {
            path:"/search",
            element:<Search/>
        }
        ]

}])
export default router