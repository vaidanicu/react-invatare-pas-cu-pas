function Greeting(props) {
  return (
    <div>
      <h2>Salut,{props.name}</h2>
      <p>Ai {props.age} ani.</p>
    </div>
  );
}

export default Greeting;
