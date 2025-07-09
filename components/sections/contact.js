import React from 'react';
import styled from 'styled-components';
import { email } from '@config';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before,
    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => (
  <StyledContactSection id="contact">
    <h2 className="overline">What’s Next?</h2>

    <h2 className="title">Get in Touch</h2>

    <p>
      Welcome to the Human Molecular Genetics Lab! We are dedicated to advancing the field of molecular genetics through our cutting-edge research and innovative approach. Our team is committed to making groundbreaking discoveries that will shape the future of genetic research. Feel free to reach out to us with any inquiries or to learn more about our work.
    </p>

    <a className="email-link" href={`mailto:${email}`}>
      Say Hello
    </a>
  </StyledContactSection>
);

export default Contact;
