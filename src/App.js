import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <UserCard NAME="Aurel" age={30} />
      <UserCard NAME="Vaida" age={10} />
      <UserCard NAME="Nicu" age={20} />
    </div>
  );
}
export default App;
