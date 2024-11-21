import { useParams } from "react-router-dom";
import vocabularies from "../data/vocabulary.json";

const LessonDetails = () => {
  const { lesson_no } = useParams(); // Get the lesson number from the URL
  const lessonVocabularies = vocabularies.filter(
    (vocab) => vocab.lesson_no === parseInt(lesson_no)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center py-10">
      {/* Lesson Title */}
      <h1 className="text-5xl font-bold mb-8 text-center text-white">
        Lesson {lesson_no}
      </h1>

      {/* Vocabulary Card */}
      <div className="flex flex-wrap justify-center gap-8">
        {lessonVocabularies.map((vocab) => (
          <div
            key={vocab.id}
            className={`relative bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all max-w-sm w-full`}
          >
            {/* Ribbon for Difficulty */}
            <div
              className={`absolute top-0 left-0 px-4 py-1 text-white text-sm font-semibold rounded-br-lg ${
                vocab.difficulty === "easy"
                  ? "bg-green-500"
                  : vocab.difficulty === "medium"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {vocab.difficulty.charAt(0).toUpperCase() +
                vocab.difficulty.slice(1)}{" "}
              Difficulty
            </div>

            {/* Word and Pronunciation */}
            <h2 className="text-3xl font-bold mb-2">{vocab.word}</h2>
            <p className="italic text-gray-600 mb-4">
              Pronunciation:{" "}
              <span className="text-gray-800">{vocab.pronunciation}</span>
            </p>

            {/* Vocabulary Details */}
            <p className="text-base mb-2">
              <strong>Meaning:</strong> {vocab.meaning}
            </p>
            <p className="text-base mb-2">
              <strong>Part of Speech:</strong> {vocab.part_of_speech}
            </p>
            <p className="text-base mb-2">
              <strong>When to Say:</strong> {vocab.when_to_say}
            </p>
            <p className="text-base">
              <strong>Example:</strong> {vocab.example}
            </p>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <a
          href="/start-learning"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Lessons
        </a>
      </div>
    </div>
  );
};

export default LessonDetails;
