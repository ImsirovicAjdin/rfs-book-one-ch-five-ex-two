import Greet2 from "./Greet2";

export default function App() {
  return (
    <div className="App">
      <h1>Props example</h1>
      <Greet2 greeting="Good morning" name="Jane" />
      <Greet2 greeting="Good evening" name="Jack" />
      <Greet2 greeting="Hola" name="Linda" />
    </div>
  );
}