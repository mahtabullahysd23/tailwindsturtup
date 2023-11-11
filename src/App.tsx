import Button from "./Components/atoms/Button";
import Forminput from "./Components/atoms/Forminput";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center w-full">
        Hello world!
      </h1>
      <Forminput label="Username" type="text" placeholder="Username" value="" onChange={() => console.log("Changed!")} />
      <Forminput label="Password" type="password" placeholder="Password" value="" onChange={() => console.log("Changed!")} />
      <Button text="Click me" onClick={() => console.log("Clicked!")} />
    </>
  );
}

export default App;
