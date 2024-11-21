import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Contact us</h2>
          <p>Franklin St, Greenpoint Ave</p>
          <p>+2342 5446 67</p>
          <p>Monday - Friday: 8 AM - 5 PM</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-700 hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/blog" className="text-gray-700 hover:underline">
                Read our Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-700 hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-700 hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">About</h2>
          <ul>
            <li className="mb-2">
              <a href="/about-us" className="text-gray-700 hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/courses" className="text-gray-700 hover:underline">
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="/events" className="text-gray-700 hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/workshop" className="text-gray-700 hover:underline">
                Workshop
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Newsletter</h2>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-500">
        © 2024 Lingo Bingo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
