import React from "react";
import OnlyCv from "./OnlyCv";

function App() {
  return (
    <div className="relative bg-neutral-200 dark:bg-neutral-800 dark:text-white h-screen w-screen flex justify-center items-center overflow-auto">
      <OnlyCv className="h-full" />
    </div>
  );
}

export default App;
