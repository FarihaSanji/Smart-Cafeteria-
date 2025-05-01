import React from "react";

import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  // const { blog } = props;
  // console.log()



  return (
    <div className="m-2">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className="w-16" src={blog.author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}>
              {" "}
              <FaBookmark size={25} />
            </button>
          </div>

          <h2 className="card-title ">{blog.title} </h2>

          <p>
          Espresso is a coffee prepared by forcing hot water through finely-ground coffee beans. It is known for its robust flavour and bold, concentrated taste. 
          </p>

          <div className="flex">
            {blog.hashtags.map((has,i) => (
              <p key={i}> {has} </p>
            ))}
          </div>

          <div className="card-actions justify-end">
            <button 
              onClick={() => handleMarkAsRead(blog.Saved_Items, blog.id)}
              className="btn btn-primary bg-amber-800"
            >
              {" "}
              order now {" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
