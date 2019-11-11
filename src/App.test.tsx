import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './routres/AppRouter'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
