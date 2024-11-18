// src/components/ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutesToRead={post.minutesToRead}
        />
      ))}
    </main>
  );
};

export default ArticleList;
