import BatFromIndia from "./component/component-1";

function App() {
  return (
    <>
      <BatFromIndia />
      <BatFromIndia /> {/* don't get children property in the props object */}
      <BatFromIndia />
      {/* get children property in the props object */}
    </>
  );
}

export default App;
