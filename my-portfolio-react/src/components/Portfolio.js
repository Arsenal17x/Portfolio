import React from 'react';
import '../style.css'; // Assuming your styles are in a file named style.css

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="assets/work-1.png" alt="Social Media App" />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>The app that connects you to the people around the world. Download it form the Play Store.</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="assets/work-2.png" alt="Music App" />
            <div className="layer">
              <h3>Music App</h3>
              <p>The Music app that lets you play and groove with your favourite playlist. Download it form the Play Store.</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="assets/work-3.png" alt="Tours & Travel App" />
            <div className="layer">
              <h3>Tours & Travel App</h3>
              <p>The app that lets you Travel and Explore the world. Download it form the Play Store.</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See More</a>
      </div>
    </div>
  );
}

export default Portfolio;