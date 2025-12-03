import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting name="Aurel" age={30} />
      <Greeting name="Vasile" age={20} />
      <Greeting name="Nicu" age={18} />
    </div>
  );
}
export default App;
