import React from 'react';

export default function Sheet({ className, ...props }) {
  let changedClassName = className ? `${className} sheet` : 'sheet';
  return <div className={ changedClassName } {...props} />;
}
