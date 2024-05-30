import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return 0;
      }
      return newIndex;
    });
  };

  const checkNumber = (index) => {
    if (index < 0) {
      return 0;
    }
    if (index > people.length - 1) {
      return 0;
    }

    return index;
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon"></span>
          <FaQuoteRight />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
