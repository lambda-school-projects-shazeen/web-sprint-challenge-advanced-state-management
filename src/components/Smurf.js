import React from "react";
import { connect } from "react-redux";

class Smurf extends React.Component {
  render() {
    const { smurfInfo, error } = this.props;

    return (
      <div data-testid="smurf" className="card">
        {smurfInfo.map((smurf) => {
          return (
            <div key={smurf.id}>
              <h1>{smurf.name.length === 0 ? error : smurf.name}</h1>
              <p>{smurf.nickname.length === 0 ? error : smurf.nickname}</p>
              <p>{smurf.position.length === 0 ? error : smurf.position}</p>
              <p>{smurf.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfInfo: state.smurfInfo,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
