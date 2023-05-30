import { Routes, Route } from "react-router-dom";

import Navigation from "./navigation/navigation.component";
import Home from "./routes/home.component";
import About from "./routes/about.component";
import Projects from "./routes/projects.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default App;
