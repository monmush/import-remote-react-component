import { useState } from "react";

type Props = {
  initialCount?: number;
};

const App: React.FC<Props> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount || 0);

  return (
    <div style={{ textAlign: "center" }}>
      <p>The current count</p>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          gap: 5,
          justifyContent: "center",
        }}
      >
        <button
          style={{ width: 200, height: 36 }}
          type="button"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <button
          style={{ width: 200, height: 36 }}
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
