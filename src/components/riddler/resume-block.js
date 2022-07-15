import React from 'react';
import {
  resumeBlock,
  resumeBlockCircle,
  resumeBlockHeader,
  resumeBlockBody,
} from './riddler.module.css';

export default function ResumeBlock({ title, subtitle, date, children }) {
  let parsedSubtitle = (
    Array.isArray(subtitle) 
    ? subtitle.join(', ')
    : (typeof subtitle === 'string' ? subtitle : null)
  );
  return (
    <div className={ resumeBlock } key={ title }>
      <svg viewBox="0 0 100 100" width="15" height="15" className={ resumeBlockCircle }>
        <circle cx={ 50 } cy={ 50 } r={ 30 } fill="white" />
        <path 
          stroke="var(--alt)" 
          strokeWidth={ 10 } 
          strokeLinecap="square"
          fill="white" 
          d="M50 80 A30 30, 0, 0 0, 50 20" />
      </svg>
      <div className={ resumeBlockHeader }>
        <span>{ title }</span>
        { parsedSubtitle && <span>({ parsedSubtitle })</span> }
        <span>{ date }</span>
      </div>
      <div className={ resumeBlockBody } children={ children }/>
    </div>
  );
}
