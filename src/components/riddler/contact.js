import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faGlobe,
  faPhone,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
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
          <FontAwesomeIcon icon={ faEnvelope } />
          <span><a href={ `mailto:${email}` }>{ email }</a></span>
        </li>
        <li>
          <FontAwesomeIcon icon={ faGlobe } />
          <span><a href={ website }>{ website }</a></span>
        </li>
        <li>
          <FontAwesomeIcon icon={ faGithub } />
          <span><a href={ `https://github.com/${github}` }>{ github }</a></span>
        </li>
        <li>
          <FontAwesomeIcon icon={ faLinkedinIn } />
          <span>
            <a href={ `https://linkedin.com/in/${linkedin}` }>{ linkedin }</a>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={ faPhone } />
          <span>{ phone }</span>
        </li>
        <li>
          <FontAwesomeIcon icon={ faHome } />
          <span>{ location }</span>
        </li>
      </ul>
    </section>
  );
}
