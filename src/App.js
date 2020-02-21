import React from "react";
import Chart from "chart.js";

function App() {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const myChart = new Chart(canvasRef.current.getContext("2d"), {
      type: "line",
      data: [],
      options: {
        responsive: false
      }
    });
  }, [canvasRef]);

  return (
    <div className="App">
      <canvas ref={canvasRef} width="400" height="400" />
    </div>
  );
}

export default App;
