import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-100">
      {/* User Info */}
      <div className="text-sm">
        {user && user.email ? `Welcome, ${user.email}` : "Welcome, Guest"}
      </div>

      {/* Navigation Links */}
      <div className="nav space-x-5">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/start-learning" className="hover:text-blue-500">
          Start Learning
        </Link>
        <Link to="/tutorials" className="hover:text-blue-500">
          Tutorials
        </Link>
        <Link to="/about-us" className="hover:text-blue-500">
          About Us
        </Link>
      </div>

      {/* Login/Logout Section */}
      <div className="login flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL || userIcon}
                alt="User Avatar"
              />
              <p>{user.displayName || "User"}</p>
            </div>
          ) : (
            <img
              className="w-10 h-10 rounded-full"
              src={userIcon}
              alt="Default User"
            />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
