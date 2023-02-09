import React, { useReducer } from "react";

interface State {
  count: number;
}

enum Types {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

type Action = { type: Types.INCREMENT } | { type: Types.DECREMENT };

const reducer = (state: State, action: Action) => {
  const { INCREMENT, DECREMENT } = Types;
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const initialState: State = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = Types;
  return (
    <div className="counter">
      <h3>
        Counter: <strong style={{color: '#810b11'}}>{state.count}</strong>
      </h3>
      <button
        className="btn-success"
        onClick={() => dispatch({ type: INCREMENT })}
      >
        Increment
      </button>
      <button
        className="btn-danger"
        onClick={() => dispatch({ type: DECREMENT })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;