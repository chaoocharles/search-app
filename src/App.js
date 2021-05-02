import React, { useState, useEffect } from "react";
import "./App.css";
import ListPosts from "./components/ListPosts";
import Search from "./components/Search";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [keyword]);
  console.log(posts);
  const filterPosts = () => {
    const filteredPosts = posts.filter((post) => {
      if (keyword === "") {
        return post;
      }

      const newPost = post.title.toLowerCase().includes(keyword.toLowerCase());

      return newPost;
    });

    setPosts(filteredPosts);
  };

  return (
    <div className="App">
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        filterPosts={filterPosts}
      />
      <ListPosts posts={posts} />
    </div>
  );
};

export default App;
