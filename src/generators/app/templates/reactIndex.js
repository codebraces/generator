module.exports =
`import * as React from 'react';
import { render } from 'react-dom';
import Routes from './Routes/Routes';

render(
  <Routes />,
  document.getElementById('app')
);
`;