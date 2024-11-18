// src/components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import { posts } from '../data/blog'; // Assuming blog data is imported from blog.js

const App = () => {
  return (
    <div className="App"> {/* Added className="App" here */}
      <Header name="My Personal Blog" />
      <About
        image="https://via.placeholder.com/200"  // You can update this with a custom image
        about="This is a blog about React, JavaScript, and more!"
      />
      <ArticleList posts={posts} />  {/* Pass posts to ArticleList */}
    </div>
  );
};

export default App;
