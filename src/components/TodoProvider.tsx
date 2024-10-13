import React from 'react';
import todoReducer, {
  TTodoAction,
  TTodoState,
  initialTodo,
} from '../reducers/todoReducer';
import {Dispatch, ReactNode, createContext, useReducer} from 'react';

export const TodoContext = createContext<TTodoState | null>(null);
export const TodoDispatchContext = createContext<Dispatch<TTodoAction> | null>(
  null,
);

const TodoProvider = ({children}: {children: ReactNode}) => {
  const [todo, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <TodoContext.Provider value={todo}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
