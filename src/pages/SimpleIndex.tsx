import { useState } from "react";

const SimpleIndex = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold mb-4">RunnerMetrics Dashboard</h1>
      <p className="text-lg mb-4">Biometric feedback system for teen distance runners</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Count: {count}
      </button>
    </div>
  );
};

export default SimpleIndex;