import React from "react";
import Navbar from "./components/Navbar/navbar";
import SummarizationContainer from "./components/Summarizations/summarizationContainer";
import "./app.css";

class App extends React.Component {
  render() {
    return <div className="App">
        <Navbar />
        <SummarizationContainer />
      </div>;
  }
}

export default App;
