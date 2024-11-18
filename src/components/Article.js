// src/components/Article.js
import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
  // Calculate the emoji based on the minutes to read
  const calculateReadingTime = (minutes) => {
    let emoji = '';
    if (minutes < 30) {
      // Each 5 minutes gets a coffee emoji
      const cups = Math.ceil(minutes / 5);
      emoji = '☕️'.repeat(cups);
    } else {
      // Each 10 minutes gets a bento box emoji
      const boxes = Math.ceil(minutes / 10);
      emoji = '🍱'.repeat(boxes);
    }
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <footer>
        <p>{calculateReadingTime(minutesToRead)}</p>
      </footer>
    </article>
  );
};

export default Article;
