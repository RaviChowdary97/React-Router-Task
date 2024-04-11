import "./App.css";

import ALLList from "./Components/ALLList";
import ALLone from "./Components/ALLone";
import ALLtwo from "./Components/ALLtwo";
import AllComponnet from "./Components/AllComponents";
import Cyber from "./Components/Cyber";
import Cyberone from "./Components/Cyberone";
import Cyberthree from "./Components/Cyberthree";
import Cybertwo from "./Components/Cybertwo";
import DATAone from "./Components/DATAone";
import DATAthree from "./Components/DATAthree";
import DATAtwo from "./Components/DATAtwo";
import Datascience from "./Components/Datascience";
import FULLone from "./Components/FULLone";
import FULLthree from "./Components/FULLthree";
import FULLtwo from "./Components/FULLtwo";
import FullStack from "./Components/FullStack";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <br />

        <Routes>
          <Route path="/ai" element={<ALLList />} />
          <Route path="/details/one" element={<ALLone />} />
          <Route path="/details/two" element={<ALLtwo />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/fullstack/one" element={<FULLone />} />
          <Route path="/fullstack/two" element={<FULLtwo />} />
          <Route path="/fullstack/three" element={<FULLthree />} />
          <Route path="/datascience" element={<Datascience />} />
          <Route path="/datascience/one" element={<DATAone />} />
          <Route path="/datascience/two" element={<DATAtwo />} />
          <Route path="/datascience/three" element={<DATAthree />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/cyber/one" element={<Cyberone />} />
          <Route path="/cyber/two" element={<Cybertwo />} />
          <Route path="/cyber/three" element={<Cyberthree />} />
          <Route path="/" element={<AllComponnet />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
