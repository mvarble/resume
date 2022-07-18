import { createRoot } from 'react-dom/client';

import '../index.css';
import resumeElement from '../resume';

document.body.className = 'letter';
const div = document.createElement('div');
document.body.appendChild(div);

const root = createRoot(div)
root.render(resumeElement);
