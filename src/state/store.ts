import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';
// todo: delete the following dummy data code
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// todo: delete the following dummy data code

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content:
      '`"JBook". This is online code editor for fast testing your code and text editor for some notes. Click here or any text-cell to edit. You can add, delete or move up and down text and code cells. The code editor is all joined together into one file.`',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
    content: `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 style={{ color: 'red' }}>Hello</h1>
      <h2> CodeSandJBook</h2>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount(count + 1)}>And one</button>
      <h3>Count : {count}</h3>
    </div>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode><App /></StrictMode>);
    `,
  },
});
