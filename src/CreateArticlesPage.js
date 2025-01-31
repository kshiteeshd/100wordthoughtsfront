import React, { useState } from 'react';
import './App.scss';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  
  // Calculate the word count
  const wordCount = content.trim().split(/\s+/).length;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if content exceeds 100 words
    if (wordCount > 100) {
      alert("Exceeds 100 Words!");
      return;
    }

    try {
      // Send data to the backend to save the article
      const response = await fetch('http://localhost:5000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Article created successfully');
        setTitle('');
        setContent('');
        
      } else {
        alert(result.error || 'Failed to create article');
      }
    } catch (error) {
      alert('Error creating article');
    }
  };

  return (
    <div className="main bgshift">
      <h1 className='heading'>Create Article</h1>
      <section className='createbox'>

      <form onSubmit={handleSubmit}>
        <div className='title'>
          <label className='label'>Title:</label>
          <input
          className='input icolor'
            type="text"
            placeholder='Enter a cool title!'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </div>
        <div className='content'>
          <label className='label'>Content:</label>
          <textarea className='textarea icolor'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Write your article here (max 100 words)"
            />
        </div>
        <div className='message'>

        {/* Display the word count live */}
        <p className='paracontent'>Word Count: {wordCount}</p>

        {/* Display error message if word count exceeds 100 */}
        {wordCount > 100 && <p className="error">Content exceeds 100 words!</p>}

        {/* Submit button is disabled if word count exceeds 100 */}
        <button type="submit" className='landingbtn' disabled={wordCount > 100}>Submit</button>
        </div>
      </form>
            </section>
    </div>
  );
};

export default CreateArticle;
