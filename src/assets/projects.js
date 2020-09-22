import trinityLogo from './images/trinityLogo.png';
import bookFinderLogo from './images/bookFinderLogo.png';
import CsStudyLogo from './images/CsStudy.png';
import stockVizualizerLogo from './images/StockVizualizer.png';
import BudjetBuldogLogo from './images/BudjetBuldog.png';

export const myProjects = [
  {
    title: 'Trinity',
    description: 'Neo4j VS Code Extension for Cypher Query Testing and Graph Structure Exploration',
    github: 'https://github.com/oslabs-beta/Trinity',
    language: 'JAVASCRIPT',
    logo: trinityLogo,
    bullets: [
      'Utilized VSCode API to develop an extension which allows developers perform real-time Cypher queries and quickly identify all graph relationships and  properties using VSCode Explorer by removing the need for switching between VS Code and Neo4j Browser during the development process',
      'Integrated TypeScript by enforcing type annotations optimize the debugging process, providing consistent cross-development team code generation',
      'Wrote a recursive search algorithm to extract all Cypher queries, determining location and position of import declarations to identify possible errors',
      'Constructed configuration file to store a user’s Neo4j database credentials, persisting custom user views and eliminating the need of continuous login',
      'Implemented Promises to write the queries output from VS Code Channel  to a JSON file, providing intuitive, more readable code with modularity',
      'Customized Webpack configurations to run all assets, bundling files and dependencies to create a fluid development experience and debugging process',
      'Integrated Mocha testing into an existing codebase, ensuring a properly working VS Code extension, verifying correct information from the Neo4j database, displaying on the outline and sending to the output Channel to minimize the debugging of new features, and package functionality for engineers',

    ],
  },
  {
    title: 'Stock Visualizer',
    description: 'GUI based stock visualizer for daily stock data',
    github: 'https://github.com/Team-Red-Lipped-Batfish/StockVisualizer',
    logo: stockVizualizerLogo,
    language: 'JAVASCRIPT',
    tech: [
      'React',
      'Chart.js',
      'Express',
      'PostgreSQL',
    ],
  },
  {
    title: 'CS Study ',
    description: 'Flash Card App',
    github: 'https://github.com/Team-Uggs/CS-study',
    language: 'JAVASCRIPT',
    logo: CsStudyLogo,
    tech: [
      'React',
      'React-Router',
      'Express',
      'PostgreSQL',
      'Bcrypt',
    ],
  },
  {
    title: 'Budget Bulldog ',
    description: 'Expense Tracker app',
    github: 'https://github.com/team-bsaur/expense-tracker',
    logo: BudjetBuldogLogo,
    language: 'JAVASCRIPT',
    tech: [
      'React',
      'Redux',
      'Express',
      'PostgreSQL',
      'Bcrypt',
      'Node.js',
    ],
  },
  {
    title: 'Book-finder',
    description: 'Book-finder app',
    github: 'https://github.com/olenadanykh/Book-App',
    logo: bookFinderLogo,
    language: 'JAVASCRIPT',
    tech: [
      'React',
      'Express',
      'MongoDB',
      'Node.js',
      'Webpack',
    ],
  },
];
