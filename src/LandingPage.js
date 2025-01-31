import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.scss";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main ">
      <h1 className="heading">Welcome to 100 Word Thoughts</h1>
      {/* //---------------------------- */}
      <section className="section">
        <p className="paracontent">
          A website to share your thoughts in 100 words. Explore articles or
          write your own!
        </p>
      </section>
      {/* //---------------------------- */}
      <section className="section">
        <h3>How to contribute?</h3>
        <p className="paracontent">
          Have a thought that you want to share? It's easy! Simply click on
          'Create Article,' write your thoughts in 100 words or less, and
          publish your article for the world to read. Whether it's a life
          lesson, a piece of advice, or just a funny observation, your 100 words
          can make a difference.
        </p>
      </section>
      {/* //---------------------------- */}
      <section className="section">
        <h3>Why 100 words??</h3>
        <p className="paracontent">
          In a world full of long-winded opinions, we decided to bring back
          brevity. 100 words force you to be creative and precise with your
          thoughts. It’s an exercise in clarity and focus, and it’s perfect for
          today’s fast-paced world.
        </p>
      </section>
      {/* //---------------------------- */}
      <div className="buttonsec">
        <section className="section">
          <h3>Ready to share your thoughts???</h3>
          <p className="paracontent">
            Don’t keep your ideas to yourself. Share them with the world in 100
            words. Click below to start writing!
          </p>
          <div className="buttonsec">
            <button className="landingbtn" onClick={() => navigate("/create")}>
              Write an Article
            </button>
          </div>
        </section>
        <section className="section">
          <h3>Explore Articles</h3>
          <p className="paracontent">
            Well click the below button to see what others have created with
            their words!!
          </p>
          <div className="buttonsec">
            <button
              className="landingbtn"
              onClick={() => navigate("/articles")}
            >
              View Articles
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
