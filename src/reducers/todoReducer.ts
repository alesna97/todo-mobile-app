export enum TTodoReducerAction {
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  SELECT = 'SELECT',
  UNSELECT = 'UNSELECT',
  TOGGLE_INPUT = 'TOGGLE_INPUT',
}

export type TTodoItem = {todo: string; id: number; completed: boolean};

export type TTodoAction =
  | {
      type: TTodoReducerAction;
      payload: TTodoItem;
    }
  | {
      type: TTodoReducerAction.UNSELECT;
    }
  | {
      type: TTodoReducerAction.TOGGLE_INPUT;
      payload: boolean;
    };

export type TTodos = TTodoItem[];

export type TTodoState = {
  todos: TTodos;
  selectedTodo: null | TTodoItem;
  openModal: boolean;
};

export const initialTodo: TTodoState = {
  openModal: false,
  selectedTodo: null,
  todos: [
    {
      id: 1,
      todo: 'finish project report',
      completed: false,
    },
    {
      id: 2,
      todo: 'Grocery Shopping',
      completed: false,
    },
    {
      id: 3,
      todo: 'Call with Client',
      completed: false,
    },
    {
      id: 4,
      todo: 'Update Portfolio Website',
      completed: false,
    },
    {
      id: 5,
      todo: 'Plan Weekend Trip',
      completed: false,
    },
  ],
};

const todoReducer = (state: TTodoState, action: TTodoAction) => {
  switch (action.type) {
    case TTodoReducerAction.ADD: {
      const newTodos = [...state.todos];

      newTodos.unshift(action.payload);

      return {
        ...state,
        todos: newTodos,
      };
    }
    case TTodoReducerAction.DELETE: {
      const newTodos = state.todos.filter(
        item => item.id !== action.payload.id,
      );

      return {
        ...state,
        todos: newTodos,
      };
    }
    case TTodoReducerAction.EDIT: {
      const todoIndex = state.todos.findIndex(
        item => item.id === action.payload.id,
      );

      const newTodos = [...state.todos];

      newTodos[todoIndex] = action.payload;

      return {
        ...state,
        todos: newTodos,
      };
    }
    case TTodoReducerAction.SELECT: {
      return {
        ...state,
        selectedTodo: action.payload,
      };
    }
    case TTodoReducerAction.UNSELECT: {
      return {
        ...state,
        selectedTodo: null,
      };
    }
    case TTodoReducerAction.TOGGLE_INPUT: {
      return {
        ...state,
        openModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
