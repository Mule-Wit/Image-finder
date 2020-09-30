import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBRow, MDBAnimation } from "mdbreact";
import Card from "./card";

class Display extends Component {
  render() {
    let imageListContent;

    const { images } = this.props;

    if (images) {
      imageListContent = (
        <div className="container">
          <div className="">
            {images.map((img, key) => (
              // <a href={img.main} data-lightbox="mygallery" data-title={img.by}>
              //    </a>
              <div className="img-container" >
                <MDBAnimation reveal type="fadeInLeft">
                  <Card
                    key={key}
                    small={img.tumb}
                    large={img.main}
                    user={img.by}
                    id={img.id}
                  />
                </MDBAnimation>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      imageListContent = null;
    }

    return (
      <MDBRow>
        <div>{imageListContent}</div>
      </MDBRow>
    );
  }
}
Display.propTypes = {
  images: PropTypes.array.isRequired
};
export default Display;
