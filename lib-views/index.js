'use strict';

React.render(React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hi this is the Board Game'
  ),
  React.createElement(Board, null),
  React.createElement(Square, null)
), document.getElementById('app-container'));