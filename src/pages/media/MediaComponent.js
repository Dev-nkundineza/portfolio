import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import MediaImg from "./MediaImg";
import { Fade } from "react-reveal";
import "./MediaComponent.css";
import { mediaPageData } from "../../portfolio.js";

class Media extends Component {
  render() {
    const theme = this.props.theme;
    const { mediaHeader, conferences } = mediaPageData;
    
    return (
      <div className="media-main">
        <Header theme={theme} />
        <div className="basic-media">
          <Fade bottom duration={1000} distance="40px">
            <div className="media-heading-div">
              <div className="media-heading-img-div">
                <MediaImg theme={theme} />
              </div>
              <div className="media-heading-text-div">
                <h1
                  className="media-heading-text"
                  style={{ color: theme.text }}
                >
                  {mediaHeader.title}
                </h1>
                <p
                  className="media-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {mediaHeader.description}
                </p>
              </div>
            </div>
          </Fade>

          {/* Conferences Section */}
          <div className="conferences-container">
            {conferences.map((conference) => (
              <Fade bottom duration={1000} distance="40px" key={conference.id}>
                <div className="conference-section" style={{ backgroundColor: `${theme.imageHighlight}0d` }}>
                  <div className="conference-header">
                    <h2 
                      className="conference-name"
                      style={{ color: theme.text }}
                    >
                      {conference.name}
                    </h2>
                    <p 
                      className="conference-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {conference.location}
                    </p>
                    <p 
                      className="conference-description"
                      style={{ color: theme.secondaryText }}
                    >
                      {conference.description}
                    </p>
                  </div>
                  <div className="conference-images-grid">
                    {conference.images.map((imagePath, index) => (
                      <div key={index} className="conference-image-card">
                        <img
                          src={require(`../../assests/images/${imagePath}`)}
                          alt={`${conference.name} - ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Media;
