import React, { useState } from 'react';
import './BlogSection.css';

const blogPosts = [
  {
    title: 'Title',
    description: 'description.',
    image: '/blog1.jpg',
    link: '#'
  },
  {
    title: 'Title',
    description: 'description.',
    image: '/blog2.jpg',
    link: '#'
  },
  {
    title: 'Title',
    description: 'description.',
    image: '/blog3.jpg',
    link: '#'
  },
  {
    title: 'Title',
    description: 'description.',
    image: '/blog4.jpg',
    link: '#'
  },
  {
    title: 'Title',
    description: 'description.',
    image: '/blog5.jpg',
    link: '#'
  }
];

function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 4);

  return (
    <section className="blog-section" id="blog">
      <h2 className="section-title">Latest From Our Blog</h2>
      <div className="blog-grid">
        {visiblePosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" loading="lazy" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="blog-view-more">
          <button onClick={() => setShowAll(true)}>View More</button>
        </div>
      )}
    </section>
  );
}

export default BlogSection;
