import React from 'react';
// import Resume from '../../../public/SKResume.pdf'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// const pdfWindow = window.open("")
// const resume = pdfWindow.document.write(
//     "<iframe width='100%' height='100%' src='data:public/SKResume.pdf;base64, " +
//     encodeURI(yourDocumentBase64VarHere) + "'></iframe>"
// )

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          World!
        </SectionTitle>
        <SectionText>
          My name is Sam Kim. I am a self-taught full stack developer eager to contribute to a team's success by diligently focusing on the task at hand, learning and absorbing knowledge from experienced developers, and collaborating effectively with team members. Extremely motivated to learn, grow, and excel in the tech industry.
        </SectionText>
        <Button onClick={() => window.open("https://drive.google.com/file/d/1vzpt5CJjCIFm5vhyFZb32Qdr1VRD33Yk/view?usp=sharing")}>Resume</Button>
        
      </LeftSection>
    </Section>
  </div>
);

export default Hero;