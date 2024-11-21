import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-gray-100 py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Lingo Bingo
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/start-learning" className="hover:text-blue-400 transition">
            Start Learning
          </Link>
          <Link to="/tutorials" className="hover:text-blue-400 transition">
            Tutorials
          </Link>
          <Link to="/about-us" className="hover:text-blue-400 transition">
            About Us
          </Link>
          {user && user?.email && (
            <Link to="/my-profile" className="hover:text-blue-400 transition">
              My Profile
            </Link>
          )}
        </div>

        {/* User Info Section */}
        <div className="flex items-center space-x-4">
          {user && user?.email ? (
            <div className="flex items-center gap-2">
              {/* User Avatar */}
              <img
                src={user?.photoURL || userIcon}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-600"
              />
              {/* Display Name */}
              <p className="hidden md:block text-sm font-medium">
                {user.displayName || "User"}
              </p>
            </div>
          ) : (
            <img
              src={userIcon}
              alt="Default User"
              className="w-10 h-10 rounded-full border border-gray-600"
            />
          )}
          {/* Login/Logout Button */}
          {user && user?.email ? (
            <button
              onClick={logOut}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-toggle"
            className="text-gray-100 hover:text-blue-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div id="menu-dropdown" className="hidden md:hidden bg-gray-700 py-4">
        <Link
          to="/"
          className="block px-6 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/start-learning"
          className="block px-6 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
        >
          Start Learning
        </Link>
        <Link
          to="/tutorials"
          className="block px-6 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
        >
          Tutorials
        </Link>
        <Link
          to="/about-us"
          className="block px-6 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
        >
          About Us
        </Link>
        {user && user?.email && (
          <Link
            to="/my-profile"
            className="block px-6 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
          >
            My Profile
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
s