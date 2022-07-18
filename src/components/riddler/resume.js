import React from 'react';

import Sheet from '../sheet';
import Backdrop from './backdrop';
import Content from './content';
import Contact from './contact';
import Academics from './academics';
import ResumeBlock from './resume-block';
import coffeeCupSrc from '../../../static/coffee-mug.png';
import pencilSrc from '../../../static/pencil.png';
import coffeeStainSrc from '../../../static/coffee-stain.png';

import { resume, coffeeCup, pencil, coffeeStain } from './riddler.module.css';

export default function Resume({ contents }) {
  // open up the contents
  const { 
    statement: StatementBody,
    contact,
    academics,
    experiences,
    projects,
    publications,
  } = contents;

  // render into various components
  return (
    <>
      <Sheet className={ resume }>
        <Backdrop />
        <Content>
          <img className={ coffeeStain } src={ coffeeStainSrc }/>
          <img className={ coffeeCup } src={ coffeeCupSrc }/>
          <img className={ pencil } src={ pencilSrc }/>
          <Contact { ...contact } />
          <div style={{ display: 'flex', width: '100%', alignItems: 'baseline', marginBottom: '0.75em' }}>
            <div style={{ width: '70%' }}>
              <h1>Objective</h1>
              <StatementBody />
            </div>
            <div style={{ width: '30%' }}>
              <Academics academics={ academics }/>
            </div>
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Experiences</h1>
            <div>
              { 
                experiences.map(({ company, title, date, Body }) => 
                  <ResumeBlock 
                    key={ title } 
                    title={ title } subtitle={ company } date={ date }>
                    <Body />
                  </ResumeBlock>
                )
              }
            </div>
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Projects</h1>
            <div>
              { 
                projects.map(({ title, skills, date, Body }) => 
                  <ResumeBlock 
                    key={ title } 
                    title={ title } subtitle={ skills } date={ date }>
                    <Body />
                  </ResumeBlock>
                )
              }
            </div>
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Publications</h1>
            <div>
              { 
                publications.map(({ journal, title, url, Body }) => 
                  <ResumeBlock 
                    key={ title } 
                    title={ title } subtitle={ journal } date="">
                    <Body />
                  </ResumeBlock>
                )
              }
            </div>
          </div>
        </Content>
      </Sheet>
    </>
  );
}
