import React from "react";

const ListPosts = ({ posts }) => {
  return (
    <div>
      <h3>Posts - {posts.length}</h3>
      <div>
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListPosts;
