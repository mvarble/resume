import React from 'react';

import Sheet from '../sheet';
import Backdrop from './backdrop';
import Content from './content';
import Contact from './contact';
import Academics from './academics';
import ResumeBlock from './resume-block';
import coffeeCupSrc from './coffee-mug.png';
import pencilSrc from './pencil.png';
import coffeeStainSrc from './coffee-stain.png';

import {
  app,
  resumeContainer,
  resume,
  pad,
  objective,
  coffeeCup,
  pencil,
  coffeeStain,
  message,
} from './riddler.module.css';

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
    <div className={ app }>
      <div className={ message }>
        <div/>
        <div>
          It looks like your window is a bit small!
          Take a look at the <a href="/resume.pdf">pdf file</a>, instead!
        </div>
        <div/>
      </div>
      <div className={ resumeContainer }>
        <div className={ pad }>
          <img className={ pencil } src={ pencilSrc }/>
        </div>
        <Sheet className={ resume }>
          <Backdrop />
          <Content>
            <img className={ coffeeStain } src={ coffeeStainSrc }/>
            <Contact { ...contact } />
            <div className={ objective }>
              <div>
                <h1>Objective</h1>
                <StatementBody />
              </div>
              <div>
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
        <div className={ pad }>
          <img className={ coffeeCup } src={ coffeeCupSrc }/>
        </div>
      </div>
    </div>
  );
}
