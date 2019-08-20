import React from "react";

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <div>
      <MDBFooter transparent scroll color="purple darken-3" className="">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol className="text-center">
              <a href="https://github.com/omarclzd" target="_blank">
                <MDBIcon fab icon="github" size="2x" className="m-3" />
              </a>
              <a href="https://www.instagram.com/oclzzd/?hl=en" target="_blank">
                <MDBIcon fab icon="instagram" size="2x" className="m-3" />
              </a>
              <a href="https://www.linkedin.com/in/omarclzd/" target="_blank">
                <MDBIcon fab icon="linkedin" size="2x" className="m-3" />
              </a>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-center font-weight-bold">
              <h5 className="title font-weight-bold">Get in touch</h5>
              <p>
                Say hi at{" "}
                <strong className="pink-text">sayhello@omarclzd.com</strong>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://github.com/omarclzd"> Omarclzd </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
