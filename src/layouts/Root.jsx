import { Outlet } from "react-router-dom";

const Root = () => {
    return(
        <div className="max-w-6xl-auto">
         <Outlet></Outlet>   
        </div>
    );
};
export default Root;