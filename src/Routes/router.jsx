import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ChatsPage from "../Pages/ChatsPage/ChatsPage";

const router=createBrowserRouter([{
    path:"/",
    element:<Root/>,
    children:[{
        path:"/",
        element:<ChatsPage/>
        
    }]

}])
export default router