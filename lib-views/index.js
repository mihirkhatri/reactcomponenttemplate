'use strict';

React.render(React.createElement(
  'div',
  null,
  React.createElement(Board, null),
  React.createElement(Square, null)
), document.getElementById('app-container'));