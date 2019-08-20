import React, { Component } from "react";
import Omar from "../../assets/img/images/omar1.png";
import Keyboard from "../../assets/img/images/keyboard.jpg";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBAnimation,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBNavbar
            color="purple darken-3"
            fixed="top"
            dark
            expand="md"
            scrolling
            transparent
          >
            <MDBNavbarBrand>
              <p>
                <a href="#Top">
                  <strong>OmarClzd</strong>
                </a>{" "}
                | <a href="#main">About</a> | <a href="#pro">Projects</a>
              </p>
            </MDBNavbarBrand>
          </MDBNavbar>

          <MDBView src={Keyboard}>
            <MDBMask
              overlay="purple-light"
              className="flex-center flex-column text-white text-center"
            >
              <MDBAnimation type="bounceInLeft" delay=".3s">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <h1 className="font-weight-bold">
                        Hello, <br /> I'm{" "}
                        <strong className="pink-text">Omar Calzada</strong>.
                      </h1>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBAnimation>
              <MDBAnimation type="bounceInRight" delay="1.5s">
                <MDBRow>
                  <MDBCol>
                    <h3 align="justify" className="font-weight-bold ">
                      I am a Software Developer.
                    </h3>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>
              <MDBAnimation type="bounceInLeft" delay="3s">
                <MDBRow>
                  <MDBCol>
                    <h3 align="justify" className="font-weight-bold">
                      Scroll down to learn more.
                    </h3>
                    <MDBAnimation type="fadeOutDown" delay="4s">
                      <MDBIcon size="3x" icon="angle-double-down" />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>
            </MDBMask>
          </MDBView>
        </header>

        <main id="main">
          <MDBContainer
            className="text-center white-text  my-4"
            align="justify"
          >
            <h1 className="pink-text mb-5 font-weight-bold">ABOUT</h1>
            <Roll left>
              <img
                src={Omar}
                width="300vmin"
                className="img-fluid rounded-circle mb-3 z-depth-2"
                alt="Omar"
              />
            </Roll>
            <Fade right>
              <p className="font-weight-bold">
                "If there were more food and fewer people, this would be a
                perfect party."
              </p>
              <p className="font-weight-bold">— Ron Swanson</p>
            </Fade>
            <br />
            <Fade left>
              <p className="font-weight-bold" id="red">
                I am a solution-driven software developer with a passion for
                understanding new concepts and ideas. Due to my extensive
                experience as a historical researcher, I excel in data analysis
                and pride myself in having an analytical interpretation of
                abstract information. I understand how best to extract imperfect
                data to return an objective solution and, as a result, I am
                adaptable and thrive by finding efficient solutions for any
                concept.
              </p>
            </Fade>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Navigation;
