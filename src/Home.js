import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  const { error, isPending, blogs } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <p>Loading...</p>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
