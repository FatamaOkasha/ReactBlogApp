// Custom hook
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could Not Fetch Data From That Resource");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setError(null);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
        console.log(error.message);
      });
  }, [url]);
  return { blogs, isPending, error };
};

export default useFetch;
