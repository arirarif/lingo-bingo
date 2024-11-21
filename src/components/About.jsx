import React from "react";
import about from "../assets/images.jpeg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Welcome to Lingo Bingo, your ultimate companion for mastering new
            languages. Our mission is to make language learning fun,
            interactive, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Lingo Bingo, we believe that learning a new language should be
              an enjoyable and enriching experience. Our platform is designed to
              help learners expand their vocabulary, enhance their communication
              skills, and connect with the world. Whether you're a beginner or
              an advanced learner, we are here to support your journey.
            </p>
          </div>
          <div>
            <img
              src={about}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alice Johnson", role: "Founder & CEO" },
              { name: "John Doe", role: "Lead Developer" },
              { name: "Sarah Smith", role: "Content Creator" },
            ].map((teamMember, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={about}
                  alt={teamMember.name}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold">{teamMember.name}</h3>
                <p className="text-gray-400">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us on Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Ready to explore the world of languages? Start your journey with
            Lingo Bingo today and unlock your potential.
          </p>
          <a
            href="/start-learning"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
