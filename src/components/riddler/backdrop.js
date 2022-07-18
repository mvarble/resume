import React from 'react';
import { backdrop } from './riddler.module.css';

export default function Backdrop({ children }) {
  return (
    <div className={ backdrop } >
      <div />
      <div />
    </div>
  );
}
