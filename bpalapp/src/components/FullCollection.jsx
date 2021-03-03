import React, { Component } from "react";
import BPALService from "../services/BPALService.js";
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class FullCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
    };

    this.addPerfume = this.addPerfume.bind(this);
    this.editPerfume = this.editPerfume.bind(this);
    this.deletePerfume = this.deletePerfume.bind(this);
  }

  deletePerfume(id) {
    BPALService.deletePerfume(id).then((res) => {
      this.setState({
        perfume: this.state.perfume.filter((perfume) => perfume.id !== id),
      });
    });
  }

  editPerfume(id) {
    this.props.history.push(`/add-perfume/${id}`);
  }

  componentDidMount() {
    BPALService.getPerfumes().then((res) => {
      this.setState({ collection: res.data });
    });
  }

  addPerfume() {
    this.props.history.push("/add-perfume/_add");
  }

  render() {
    return (
      <div>
        <h1>Here is your perfume collection in all its glory!</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Discontinued?</th>
                <th>Size</th>
                <th>Limited Edition?</th>
                <th>Collection?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.collection.map((perfume) => (
                <tr key={perfume.id}>
                  <td>{perfume.name}</td>
                  <td>{perfume.discont.toString()}</td>
                  <td>{perfume.size}</td>
                  <td>{perfume.limited.toString()}</td>
                  <td>{perfume.line}</td>
                  <td>
                    <button
                      onClick={() => this.editPerfume(perfume.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deletePerfume(perfume.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FullCollection;
