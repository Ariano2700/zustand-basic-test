import { shallow } from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";
import { useEffect } from "react";

function App() {
  //Desestructuracion atomicamente
  /*const count = useCounterStore((state) => state.count);
  const title = useCounterStore((state) => state.title);*/

  //Objetos en grupo y no atomico
  const { count, title, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  //const increment = useCounterStore((state) => state.increment)
  const { increment, getPost, multiply } = useCounterStore();

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="min-h-screen bg-slate-800">
      <div className="">
        <div className="flex flex-col text-white gap-10 items-center min-h-full justify-center">
          <h1 className="text-2xl text-white">HELLO WORLD</h1>
          <h1>Title: {title}</h1>
          <h1>Counter: {count}</h1>
          <div className="flex gap-5">
            <button
              className="p-2 bg-amber-700 rounded-md"
              onClick={() => {
                increment(10);
              }}
            >
              <span>Aumentar 10</span>
            </button>
            <button
              className="p-2 bg-amber-700 rounded-md"
              onClick={() => {
                multiply(2);
              }}
            >
              <span>Multiplica x2</span>
            </button>
          </div>
          <hr />
          {JSON.stringify(posts)}
        </div>
      </div>
    </div>
  );
}

export default App;
