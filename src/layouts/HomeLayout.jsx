import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar-bak"; // Replace with unique Navbar if required
import Footer from "../components/Footer"; // Replace with unique Footer if required

const DefaultLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        {/* Unique Header for other pages */}
        <Navbar></Navbar>
      </header>

      <main className="w-11/12 mx-auto pt-5">
        {/* Page Content */}
        <Outlet></Outlet>
      </main>

      <footer>
        {/* Unique Footer for other pages */}
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default DefaultLayout;
