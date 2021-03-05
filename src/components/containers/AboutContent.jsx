import React from 'react';
import '../../styles/containers/aboutContent.css';
import { Me } from '../atoms';
import { Skills } from '../molecules';

const AboutContent = () => {
  return (
    <main className="AboutContent">
      <div className="AboutContent-first">
        <Me />
        <h1>Hello im Rogelio Samuel</h1>
        <p>
          Web developer, intern at EDteam, MERN stack. Always learning and open
          to working with other people.
        </p>
      </div>
      <div className="AboutContent-whoAmI">
        <h2>Who am i?</h2>
        <p>
          A developer from mexico who likes math and programming, im 18 years
          old, currently im learning web development but i’d like to learn about
          data science and machine learning. I enjoy teaching my knowledge and
          working with other people. i have a blog and im working in T-Rex Codes
          :)
        </p>
      </div>
      <div className="AboutContent-skills">
        <h2>Tecnical skills</h2>
        <p>
          I work with MERN stack but also i know other tecnologies and other
          skills thant just coding
        </p>
        <Skills />
      </div>
      <div className="AboutContent-interests">
        <h2>Interests</h2>
        <p>
          out of coding, maths and learning, i like play videogrames which has
          history, i watch streams and i practice jiu-jitsu. I like chemistry
          and psicology.
        </p>
      </div>
    </main>
  );
};

export default AboutContent;
