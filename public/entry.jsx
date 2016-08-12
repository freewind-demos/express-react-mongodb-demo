import StudentTable from './student-table.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

ReactDOM.render(
  <StudentTable dataSource="/students" />,
  document.getElementById("content")
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
