import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
    <div className="container mx-auto px-5 md:8 lg:10">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    );
};

export default MainLayout;