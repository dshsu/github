import React, { Component } from "react";
import BPALService from "../services/BPALService";

class CreateNewBPAL extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      name: "",
      line: "",
      size: "",
      disc: false,
      limited: false,
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeLineHandler = this.changeLineHandler.bind(this);
    this.changeSizeHandler = this.changeSizeHandler.bind(this);
    this.changeDiscHandler = this.changeDiscHandler.bind(this);
    this.changeLimitedHandler = this.changeLimitedHandler.bind(this);
    this.saveOrUpdatePerfume = this.saveOrUpdatePerfume.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      BPALService.getPerfumeById(this.state.id).then((res) => {
        let perfume = res.data;
        this.setState({
          name: perfume.name,
          line: perfume.line,
          size: perfume.size,
          disc: perfume.disc,
          limited: perfume.limited,
        });
      });
    }
  }
  saveOrUpdatePerfume = (e) => {
    e.preventDefault();
    let perfume = {
      name: this.state.name,
      line: this.state.line,
      size: this.state.size,
      disc: this.state.disc,
      limited: this.state.limited,
    };
    console.log("Perfume => " + JSON.stringify(perfume));

    // step 5
    if (this.state.id === "_add") {
      BPALService.createPerfume(perfume).then((res) => {
        this.props.history.push("/display");
      });
    } else {
      BPALService.updatePerfume(perfume, this.state.id).then((res) => {
        this.props.history.push("/display");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeLineHandler = (event) => {
    this.setState({ line: event.target.value });
  };

  changeSizeHandler = (event) => {
    this.setState({ size: event.target.value });
  };
  changeDiscHandler = (event) => {
    this.setState({ disc: event.target.value });
  };
  changeLimitedHandler = (event) => {
    this.setState({ limited: event.target.value });
  };

  cancel() {
    this.props.history.push("/display");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Perfume</h3>;
    } else {
      return <h3 className="text-center">Update Perfume</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Perfume Name </label>
                    <input
                      placeholder="Perfume Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Perfume Line </label>
                    <input
                      placeholder="Ars Amatoria, Excolo, etc."
                      name="line"
                      className="form-control"
                      value={this.state.line}
                      onChange={this.changeLineHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Size </label>
                    <input
                      placeholder="Imp's Ear, Bottle"
                      name="size"
                      className="form-control"
                      value={this.state.size}
                      onChange={this.changeSizeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Discontinued? </label>
                    <input
                      name="size"
                      type="radio"
                      value={this.state.disc}
                      onChange={this.changeDiscHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Limited Edition? </label>
                    <input
                      name="limited"
                      type="radio"
                      className="form-control"
                      value={this.state.limited}
                      onChange={this.changeLimitedHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPerfume;
