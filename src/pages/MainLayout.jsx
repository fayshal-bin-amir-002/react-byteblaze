import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const MainLayout = () => {
    return (
        <div>
            <header className="h-16">
                <Nav></Nav>
            </header>
            <div className="min-h-[calc(100vh-116px)] ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;