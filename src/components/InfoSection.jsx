import {
  FaBookmark,
  FaSchool,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

const InfoSection = () => {
  const infoData = [
    {
      icon: <FaBookmark size={40} className="text-red-500" />,
      title: "METHODOLOGY",
      description:
        "Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam tousled sustainable.",
      link: "Learn More",
    },
    {
      icon: <FaBuilding size={40} className="text-red-500" />,
      title: "FACILITY",
      description:
        "Authentic vexillologist incididunt adipisicing blog occupy williamsburg four dollar.",
      link: "Learn More",
    },
    {
      icon: <FaMapMarkerAlt size={40} className="text-red-500" />,
      title: "LOCATION",
      description:
        "Tote bag trust fund tacos organic four dollar toast kickstarter pork belly meggings fingerstache.",
      link: "Learn More",
    },
    {
      icon: <FaSchool size={40} className="text-red-500" />,
      title: "COURSES",
      description:
        "Kitsch food truck franzen 3 wolf moon four loko palo santo. Asymmetrical artisan pok pok.",
      link: "Learn More",
    },
  ];

  return (
    <section className="py-10 px-5 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {infoData.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a
              href="#"
              className="text-red-500 font-semibold hover:underline flex items-center justify-center"
            >
              {item.link} <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
