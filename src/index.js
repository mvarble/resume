import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import contents from './contents/matthew-varble';
import Resume from './components/riddler';

document.body.className = 'letter';
const div = document.createElement('div');
document.body.appendChild(div);

const root = createRoot(div)
root.render(<Resume contents={ contents }/>);
