import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ChatsPage from "../Pages/ChatsPage/ChatsPage";
import ChatConversation from "../Pages/ChatConversation/ChatConversation";

const router=createBrowserRouter([{
    path:"/",
    element:<Root/>,
    children:[{
        path:"/",
        element:<ChatsPage/>},
        {
            path:"/chatconversation/:id",
            element:<ChatConversation/>
        }
        ]

}])
export default router