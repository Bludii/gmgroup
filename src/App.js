import React, { useEffect } from "react";
import { loadExternalScripts } from "./utils/loadScripts"; // Adjust path if needed

import Main from "./pages/Main";

const App = () => {
  useEffect(() => {
    loadExternalScripts();
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
