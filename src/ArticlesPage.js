import React, { useEffect, useState } from "react";
import "./App.scss";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]); // State for articles
  const [currentIndex, setCurrentIndex] = useState(0); // State for current article index
  const [error, setError] = useState(null); // State for error handling

  const fetchArticles = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/articles");
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Received data is not an array");
      }

      setArticles(data); // Update articles state
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError(err.message);
    }
  };

  // Fetch articles on component mount
  useEffect(() => {
    fetchArticles();
  }, []);

  // Display error message if any
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display loading message if articles are not yet fetched
  if (articles.length === 0) {
    return <p>Loading articles...</p>;
  }

  // Get the current article
  const currentArticle = articles[currentIndex];

  // Handlers for navigating articles
  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < articles.length - 1) setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="main-Article">
      <h1 className="heading wc">Articles</h1>

      <section className="artsection">
        {/* Single Article Display */}
        <div className="article-card" key={currentArticle._id}>
          <h4>{currentArticle.title}</h4>
          <p className="paracontent">{currentArticle.content}</p>
          <p className="timestamp">
            {new Date(currentArticle.timestamp).toLocaleString()}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="artnavbtns">
          <button onClick={handlePrevious} className="landingbtn" disabled={currentIndex === 0}>
            &lt;Prev
          </button>
          <button onClick={handleNext} className="landingbtn" disabled={currentIndex === articles.length - 1}>
            Next&gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
