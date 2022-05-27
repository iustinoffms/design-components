import "./App.css";
import Header from "./Header";
import SpeakersListFunctionalities from "./SpeakersListFunctionalities";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout startingTheme="light">
        <div>
          <Header />
          <SpeakersListFunctionalities />
        </div>
      </Layout>
    </div>
  );
}

export default App;
