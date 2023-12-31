import P from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";

const Post = ({ post, onClick }) => {
  return (
    <div key={post.id} className="post">
      <h3 onClick={() => onClick(post.title)}>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const input = useRef(null);
  const contador = useRef(0);

  // Component did mount
  useEffect(() => {
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current.value);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h2>useMemo e useRef</h2>
      <h3>Renderizou: {contador.current}x</h3>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} onClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
