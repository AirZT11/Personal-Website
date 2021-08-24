import React from 'react';
import { DiFirebase, DiReact, DiRuby, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider /><br />
    <SectionTitle>Technologies</SectionTitle>
    {/* <SectionText>
    I am a self-taught web developer with experience in HTML, CSS, JavaScript, React, Redux, Ruby, Ruby on Rails, SQL, PostgreSQL, and Firebase
    </SectionText> */}
    <List>
      <ListItem>
        {/* <DiReact size='3rem' /> */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {/* Experience with: <br /> */}
            React.js <br />
            Redux <br />
            Javascript <br />
            Ruby <br />
            HTML <br />
            CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        {/* <DiRuby size='3rem' /> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {/* Experience with: <br /> */}
            Ruby on Rails <br />
            Firebase <br />
            Heroku <br />
            SQL <br />
            PostgreSQL <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
