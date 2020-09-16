import React from "react";
import ReactDOM from "react-dom";
import Seasondis from "./seasondis";
import Loader from "./loader";
import "./index.css";
class App extends React.Component {
  state = { lat: null, err: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ err: err.message })
    );
  }
  renderContent() {
    if (this.state.lat && !this.state.err) {
      return <Seasondis lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.err) {
      return <div>Error : {this.state.err}</div>;
    }
    return <Loader message="please acept location request" />;
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
