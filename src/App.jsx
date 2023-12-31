import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        Count: {state.count}
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment it!
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement it!
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  );
}

export default App;
