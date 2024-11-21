import { Link } from "react-router-dom";

const Tutorials = () => {
  const videos = [
    "https://www.youtube.com/embed/BgC3chV7l3s", // Example Video 1
    "https://www.youtube.com/embed/Xsk_AuQ1r0U", // Example Video 2
    "https://www.youtube.com/embed/3LbS1pkVtKc", // Example Video 3
    "https://www.youtube.com/embed/mZ7Rh6O84rw", // Example Video 4
    "https://www.youtube.com/embed/Ulz7fjVgypY", // Example Video 5
    "https://www.youtube.com/embed/yZfzbgZpC60", // Example Video 6
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center py-10">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center mb-10">Tutorials</h1>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-5xl">
        {videos.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              src={video}
              title={`Tutorial Video ${index + 1}`}
              className="w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Learn Vocabularies Button */}
      <div className="mt-10">
        <Link
          to="/start-learning"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
