import React, { useEffect, useRef } from "react";
import "./BlogSection.css";

// Dummy data for blog posts
const blogPosts = [
  {
    date: "JUNE 01, 2020",
    admin: "ADMIN",
    comments: "3",
    title: "Make Peace With Your Broken Pieces",
    image: "/src/assets/images/plan1.jpg",
  },
  {
    date: "JUNE 02, 2020",
    admin: "ADMIN",
    comments: "5",
    title: "The Road to Recovery",
    image: "/src/assets/images/plan2.jpg",
  },
  {
    date: "JUNE 03, 2020",
    admin: "ADMIN",
    comments: "8",
    title: "Embracing Change",
    image: "/src/assets/images/plan3.jpg",
  },
  {
    date: "JUNE 04, 2020",
    admin: "ADMIN",
    comments: "2",
    title: "Finding Inner Peace",
    image: "/src/assets/images/plan4.jpg",
  },
];

const BlogSection = () => {
  const blogRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = blogRef.current.querySelectorAll(
      ".blog-section h1, .blog-section h2, .blog-card"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="blog-section" ref={blogRef}>
      <h1>Blog</h1>
      <h2>Recent Blog</h2>
      <div className="blog-images">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-info">
              <div className="info-line">
                <div className="date">{post.date}</div>
                <div className="admin">{post.admin}</div>
                <div className="comment">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-dots"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "8px" }}
                  >
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V10.5h1a1.5 1.5 0 0 0 1.5-1.5V1.5A1.5 1.5 0 0 0 13.5 0h-12zM1 1.5A.5.5 0 0 1 1.5 1h12A.5.5 0 0 1 14 1.5v11a.5.5 0 0 1-.5.5h-10.5l-1.55 1.55a.5.5 0 0 1-.85-.353V13H1.5a.5.5 0 0 1-.5-.5V1.5zM13 4H3a.5.5 0 0 0-.5.5V5h11V4.5a.5.5 0 0 0-.5-.5zM3 7h11V6H3v1zM3 9h11V8H3v1z" />
                  </svg>
                  {post.comments}
                </div>
              </div>
              <div className="title">{post.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
