import React from 'react';
import { content } from './riddler.module.css';

export default function Content(props) {
  return (
    <div className={ content }>
      <div { ...props } />
    </div>
  );
}
