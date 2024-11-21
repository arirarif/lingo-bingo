import banner01 from "../assets/banner01.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner01} alt="Slide 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h2 className="text-4xl font-bold">Welcome to Lingo Bingo</h2>
            <p className="text-lg">
              Learn languages in a fun and interactive way with our expertly
              curated lessons.
            </p>
            <a href="/start-learning">
              <button className="btn btn-primary">Start Learning</button>
            </a>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner01} alt="Slide 2" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h2 className="text-4xl font-bold">Expand Your Vocabulary</h2>
            <p className="text-lg">
              Discover new words and practice their usage in real-life
              situations.
            </p>
            <a href="/start-learning">
              <button className="btn btn-primary">Start Learning</button>
            </a>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
