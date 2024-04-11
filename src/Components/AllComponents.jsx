import ALLList from "./ALLList";
import Cyber from "./Cyber";
import Datascience from "./Datascience";
import FullStack from "./FullStack";

const AllComponnet = () => {
  return (
    <div style={{ display: "grid", flexWrap: "wrap", gap: "20px" }}>
      <Cyber />
      <FullStack />
      <Datascience />
      <ALLList />
    </div>
  );
};
export default AllComponnet;
