import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">No user information found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center py-10">
      {/* Welcome Section */}
      <h1 className="text-5xl font-bold mb-6">
        Welcome, {user.displayName || "User"}!
      </h1>

      {/* User Information */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <img
          src={user.photoURL || userIcon}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p className="text-xl font-semibold">
          {user.displayName || "Name not provided"}
        </p>
        <p className="text-sm text-gray-400">{user.email}</p>

        {/* Update Profile Button */}
        <Link
          to="/update-profile"
          className="bg-blue-600 text-white py-2 px-4 rounded mt-6 inline-block hover:bg-blue-700 transition"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
