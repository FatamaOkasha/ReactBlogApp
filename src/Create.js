//New blog
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
      console.log("new blog is created ");
      console.log(JSON.parse(JSON.stringify(blog)));
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {isPending ? <button>Loading...</button> : <button>Add Blog</button>}

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
