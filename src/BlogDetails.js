import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { error, isPending, blogs } = useFetch(
    `http://localhost:8000/blogs/${id.substr(1, 2)}`
  );
  const handleDeleteBlog = (id) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log(id + "was deleted");
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <p>Loading...</p>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={() => handleDeleteBlog(blogs.id)}>
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
