import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIframe, MDBCard } from "mdbreact";
import Wobble from "react-reveal/Wobble";

const Home = () => {
  return (
    <div>
      <MDBContainer className="white-text">
        <MDBRow className="mt-5">
          <MDBCol align="center" className=" ">
            <Wobble>
              <h2 className="font-weight-bold pink-text">Bored?</h2>
              <h3>Check out this cool game I made!</h3>
            </Wobble>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-5 mt-3">
          <MDBCol>
            <MDBCard className="z-depth-4">
              <MDBIframe src="https://omarclzd.github.io/commute-game/" />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
