import React from 'react';
import { contact, name, contactInfo } from './riddler.module.css';

export default function Contact({ 
  firstName, 
  lastName, 
  email,
  website,
  github,
  linkedin,
  phone,
  location,
}) {
  return (
    <section className={ contact }>
      <span className={ name }>{ `${firstName} ${lastName}` }</span>
      <ul className={ contactInfo }>
        <li>
          <i className="fa-solid fa-envelope" />
          <span><a href={ `mailto:${email}` }>{ email }</a></span>
        </li>
        <li>
          <i className="fa-solid fa-globe" />
          <span><a href={ website }>{ website }</a></span>
        </li>
        <li>
          <i className="fa-brands fa-github" />
          <span><a href={ `https://github.com/${github}` }>{ github }</a></span>
        </li>
        <li>
          <i className="fa-brands fa-linkedin-in" />
          <span>
            <a href={ `https://linkedin.com/in/${linkedin}` }>{ linkedin }</a>
          </span>
        </li>
        <li>
          <i className="fa-solid fa-phone" />
          <span>{ phone }</span>
        </li>
        <li>
          <i className="fa-solid fa-home" />
          <span>{ location }</span>
        </li>
      </ul>
    </section>
  );
}
