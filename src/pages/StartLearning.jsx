import { Link } from "react-router-dom";
import vocabularies from "../data/vocabulary.json";

const StartLearning = () => {
  const lessons = Array.from({ length: 10 }, (_, i) => i + 1); // Generate lessons 1-10

  // Filter vocabulary by lesson number
  const getVocabularyByLesson = (lesson_no) =>
    vocabularies.filter((vocab) => vocab.lesson_no === lesson_no);

  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Let’s Learn</h1>

      {/* Lesson Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <div
            key={lesson}
            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            {/* Ribbon */}
            <div
              className={`absolute top-0 right-0 px-4 py-1 text-white text-sm font-semibold ${
                lesson === 1
                  ? "bg-red-500"
                  : lesson === 2
                  ? "bg-blue-500"
                  : "bg-green-500"
              } rounded-bl-lg`}
            >
              Lesson {lesson}
            </div>

            {/* Lesson Header */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              {lesson === 1 ? "Basic" : lesson === 2 ? "Standard" : "Premium"}
            </h2>
            <p className="text-center text-gray-700 font-medium mb-4">
              Unlock vocabulary for Lesson {lesson}
            </p>

            {/* Vocabulary Details */}
            <ul className="space-y-2 mb-6">
              {getVocabularyByLesson(lesson)
                .slice(0, 3)
                .map((vocab, index) => (
                  <li
                    key={vocab.id}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <span
                      className={`inline-block w-4 h-4 rounded-full ${
                        vocab.difficulty === "easy"
                          ? "bg-green-400"
                          : vocab.difficulty === "medium"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }`}
                    ></span>
                    <span>{vocab.word}</span>
                  </li>
                ))}
              {getVocabularyByLesson(lesson).length > 3 && (
                <li className="text-sm text-gray-500">+ More...</li>
              )}
            </ul>

            {/* Button */}
            <Link
              to={`/lesson/${lesson}`}
              className={`block text-center py-2 rounded-lg text-white font-medium ${
                lesson === 1
                  ? "bg-red-500 hover:bg-red-600"
                  : lesson === 2
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-500 hover:bg-green-600"
              } transition`}
            >
              Select Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartLearning;
