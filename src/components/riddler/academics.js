import React from 'react';

import { 
  academicItem,
  academicItemIcon,
  academicItemInfo,
} from './riddler.module.css';

export default function Academics({ academics }) {
  return (
    <>{ 
      academics.map(({ degree, institution, date }) => (
        <div key={ date } className={ academicItem }> 
          <div className={ academicItemInfo }>
            <ul>
              <li style={{ color: 'var(--alt)' }}><b>{ degree }</b></li>
              <li><i>{ institution }</i></li>
              <li>{ date }</li>
            </ul>
          </div>
          <div className={ academicItemIcon }>
            <i className="fa-solid fa-graduation-cap" />
          </div>
        </div>
      ))
    }</>
  );
}
