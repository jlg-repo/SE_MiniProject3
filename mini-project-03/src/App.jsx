import "./App.css";
import CountingComponent from "./components/CountingComponent";

const App = () => {
  const inputs = [
    [true, 10],
    [false, 5],
    [true, 12],
    [true, 9],
  ];

  return (
    <>
      {inputs.map(([a, b], index) => (
        <CountingComponent
          key={index}
          upOrDown={a}
          valueBy={b}
        ></CountingComponent>
      ))}
    </>
  );
};

export default App;
