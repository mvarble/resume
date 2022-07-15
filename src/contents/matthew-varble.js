// statement
import { Body as statement } from './statements/probability-and-programming.md';

// experiences
import * as toyon from './experiences/toyon.md';

// projects
import * as websites from './projects/websites.md';
import * as genTransportMCMC from './projects/gen-transport-mcmc.md';
import * as partyServer from './projects/party-server.md';

// publications
import * as multipath from './publications/multipath.md';
import * as affineLDP from './publications/affine-large-deviations.md';
import * as affineIS from './publications/affine-importance-sampling.md';

// contents
export default {
  statement,
  contact: {
    firstName: 'Matthew',
    lastName: 'Varble',
    email: 'matthew@rodent.club',
    website: 'https://rodent.club',
    github: 'mvarble',
    linkedin: 'matthew-varble',
    phone: '+1 714-833-7017',
    location: 'Santa Barbara, CA',
  },
  academics: [
    {
      degree: 'Ph.D. in Applied Mathematics',
      institution: 'UC Santa Barbara',
      date: '2016-2022',
    },
    {
      degree: 'Bachelors of Science in Mathematics',
      institution: 'Cal Poly',
      date: '2012-2016',
    },
  ],
  experiences: [
    toyon,
  ],
  projects: [
    websites,
    genTransportMCMC,
    partyServer,
  ],
  publications: [
    multipath,
    affineLDP,
    affineIS,
  ]
};
