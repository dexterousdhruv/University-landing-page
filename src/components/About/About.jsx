import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";
import Title from "../Title/Title";

const About = ({ setPlayState }) => {
  
  const playVideo = () => {
    setPlayState(true)
  }


  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} className="about-img" />
        <img src={playIcon} onClick={playVideo} className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        {/* <Title subtitle="ABOUT UNIVERSITY" title="Nurturing Tommorow's Leaders Today"/> */}
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
