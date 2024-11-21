import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile({ displayName: name, photoURL });
      alert("Profile updated successfully!");
      navigate("/my-profile");
    } catch (error) {
      alert("Failed to update profile: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Update Profile</h1>

      <form onSubmit={handleUpdate} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-sm font-medium text-gray-300">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full hover:bg-blue-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
