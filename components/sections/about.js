import React from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { useEffect, useRef } from 'react';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: flex;
    flex-direction: column;
  }

  .about-text {
    p {
      margin: 0 0 15px;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Us</h2>

      <div className="inner">
        <div className="about-text">
          <p>
            At the Human Molecular Genetics Lab, we are passionate about delving into the intricate world of human genetics. Our team of researchers is focused on exploring the genetic variations, hereditary factors, and molecular mechanisms underlying human traits and diseases.
          </p>
          <p>
            We aim to contribute to the advancement of medical knowledge and the development of potential therapies through our rigorous and innovative research efforts.
          </p>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
