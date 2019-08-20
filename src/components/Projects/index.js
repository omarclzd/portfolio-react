import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import Klean from "../../assets/img/images/bigklean.png";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBAnimation,
  MDBBtn,
  MDBCol
} from "mdbreact";

const arrIn = [
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInLeft",
  "fadeInRight",
  "fadeInUp",
  "flipInX",
  "flipInY",
  "rotateIn",
  "rotateInDownLeft",
  "rollIn	",
  "zoomIn	",
  "zoomInDown",
  "zoomInLeft	",
  "lightSpeedIn"
];

const arrOut = [
  "bounceOutDown",
  "bounceOutLeft",
  "bounceOutRight",
  "bounceOutUp",
  "fadeOut",
  "fadeOutDown	",
  "fadeOutLeft",
  "fadeOutRight",
  "fadeOutUp",
  "flipOutX",
  "flipOutY",
  "lightSpeedOut",
  "rotateOut",
  "rotateOutDownLeft",
  "rotateOutDownRight",
  "rotateOutUpLeft",
  "rotateOutUpRight",
  "rollOut",
  "zoomOut",
  "zoomOutDown",
  "zoomOutLeft"
];
const getRan = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      display: "d-none"
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  // handleScroll() {
  //   console.log("active");

  //   this.setState({
  //     type: "zoomInDown",
  //     display: "d-block"
  //   });
  // }
  handleScroll() {
    this.setState({
      type: arrIn[getRan(17)],
      display: "d-block"
    });

    console.log(JSON.stringify(arrIn[getRan(13)]));
  }

  handleMouseLeave() {
    this.setState({
      type: arrOut[getRan(21)]
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleScroll}
        onMouseLeave={this.handleMouseLeave}
        id="pro"
        style={{ backgroundColor: "#321b45 " }}
      >
        <MDBRow className="text-center">
          <MDBCol>
            <Zoom>
              <p className=" white-text">
                ---- Warning animation may happen beyon this line! ----
              </p>
            </Zoom>
          </MDBCol>
        </MDBRow>
        \
        <div className="d-flex justify-content-center">
          <MDBContainer className="my-5 text-center">
            <MDBBtn
              color="pink"
              size="sm"
              style={{ height: "75px" }}
              className=" white-text "
            >
              <h3 className="mt-1 font-weight-bold">Projects</h3>
              <p className="d-lg-none">Click me</p>
            </MDBBtn>

            <MDBRow center className="text-center">
              <div className="d-flex flex-column m-3">
                <MDBAnimation
                  type={this.state.type}
                  className={this.state.display}
                >
                  <MDBCard
                    id="card"
                    style={{
                      width: "22rem",
                      marginTop: "1rem"
                    }}
                    color="purple-gradient"
                    text="white"
                    className="card-body m-3 z-depth-3"
                  >
                    <MDBCardTitle>Snack Stalker</MDBCardTitle>
                    <MDBCardText>
                      This project was made with a Django frontend and
                      PostgresQL for my backend.
                    </MDBCardText>
                    <div className="flex-row">
                      <a
                        href="https://snackstalker1.herokuapp.com"
                        target="_blank"
                      >
                        <MDBIcon size="2x" icon="link" className="m-3" />
                      </a>
                      <a href="https://github.com/omarclzd" target="_blank">
                        <MDBIcon fab size="2x" icon="github" className="m-3" />
                      </a>
                    </div>
                  </MDBCard>
                </MDBAnimation>
              </div>
              <div className="d-flex flex-column m-3">
                <MDBAnimation
                  className={this.state.display}
                  type={this.state.type}
                  delay=".2s"
                >
                  <MDBCard
                    id="card"
                    style={{
                      width: "22rem",
                      marginTop: "1rem"
                    }}
                    color="purple-gradient"
                    text="white"
                    className="card-body m-3 z-depth-3"
                  >
                    <MDBCardTitle>F1 Tracker</MDBCardTitle>
                    <MDBCardText>
                      This project was build with React.js frontend and
                      express/Node.js backend.
                    </MDBCardText>
                    <div className="flex-row">
                      <a href="https://dj-styles.herokuapp.com" target="_blank">
                        <MDBIcon size="2x" icon="link" className="m-3" />
                      </a>
                      <a href="https://github.com/omarclzd" target="_blank">
                        <MDBIcon fab size="2x" icon="github" className="m-3" />
                      </a>
                    </div>
                  </MDBCard>
                </MDBAnimation>
              </div>
              <div className="d-flex flex-column m-3">
                <MDBAnimation
                  className={this.state.display}
                  type={this.state.type}
                  delay=".6s"
                >
                  <MDBCard
                    id="card"
                    style={{
                      width: "22rem",
                      marginTop: "1rem"
                    }}
                    color="purple-gradient"
                    text="white"
                    className="card-body m-3 z-depth-3"
                  >
                    <MDBCardTitle>Commute</MDBCardTitle>
                    <MDBCardText>
                      Commute is a game in which the user will try to commute to
                      work alive. Build with HTML5, CSS3, and JavaScript
                    </MDBCardText>
                    <div className="flex-row">
                      <a
                        href="https://omarclzd.github.io/commute-game/"
                        target="_blank"
                      >
                        <MDBIcon size="2x" icon="link" className="m-3" />
                      </a>
                      <a href="https://github.com/omarclzd" target="_blank">
                        <MDBIcon fab size="2x" icon="github" className="m-3" />
                      </a>
                    </div>
                  </MDBCard>
                </MDBAnimation>
              </div>
              <div className="d-flex flex-column m-3">
                <MDBAnimation
                  className={this.state.display}
                  type={this.state.type}
                  delay="1s"
                >
                  <MDBCard
                    id="card"
                    style={{
                      width: "22rem",
                      marginTop: "1rem"
                    }}
                    color="purple-gradient"
                    text="white"
                    className="card-body m-3 z-depth-3"
                  >
                    <MDBCardTitle>React Teacher</MDBCardTitle>
                    <MDBCardText>
                      A simple teacher website for enhancing parent-teacher
                      communication and the overall student experience.
                    </MDBCardText>
                    <div className="flex-row">
                      <a href="http://typical-bite.surge.sh/" target="_blank">
                        <MDBIcon size="2x" icon="link" className="m-3" />
                      </a>
                      <a href="https://github.com/omarclzd" target="_blank">
                        <MDBIcon fab size="2x" icon="github" className="m-3" />
                      </a>
                    </div>
                  </MDBCard>
                </MDBAnimation>
              </div>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Projects;
