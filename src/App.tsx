import Button from "./Components/atoms/Button";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center w-full">
        Hello world!
      </h1>
      <Button text="Click me" outline onClick={() => console.log("Clicked!")} />
      <Button text="Click me" onClick={() => console.log("Clicked!")} />
    </>
  );
}

export default App;
