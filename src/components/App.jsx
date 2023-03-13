import { BrowserRouter } from "react-router-dom";
import UserRoutes from "UserRoutes";
import Navbar from "./Navbar/Navbar";
export const App = () => {

  
  return <div>React homework template
    <BrowserRouter>
    <Navbar/>
    <UserRoutes/>
    </BrowserRouter>
  </div>;
};
