import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>

                </div>
                <div>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default News;