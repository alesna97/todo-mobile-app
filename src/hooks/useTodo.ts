import {TodoContext, TodoDispatchContext} from '../components/TodoProvider';
import {TTodoItem, TTodoReducerAction} from '../reducers/todoReducer';
import {useCallback, useContext, useMemo} from 'react';

const useTodo = (props: {search: string} = {search: ''}) => {
  const todo = useContext(TodoContext);
  const dispatch = useContext(TodoDispatchContext);

  const createTodo = useCallback(
    (value: string) => {
      if (!value) {
        return;
      }

      const payload: TTodoItem = {
        id: Date.now(),
        todo: value,
        completed: false,
      };

      dispatch && dispatch({type: TTodoReducerAction.ADD, payload});
    },
    [dispatch],
  );

  const selectTodo = useCallback(
    (todo: TTodoItem) =>
      dispatch && dispatch({type: TTodoReducerAction.SELECT, payload: todo}),
    [dispatch],
  );

  const unSelectTodo = useCallback(
    () => dispatch && dispatch({type: TTodoReducerAction.UNSELECT}),
    [dispatch],
  );

  const updateTodo = useCallback(
    (value: Partial<TTodoItem>) => {
      const payload: TTodoItem = {
        ...(todo?.selectedTodo as TTodoItem),
        ...value,
      };

      dispatch && dispatch({type: TTodoReducerAction.EDIT, payload});
    },
    [dispatch, todo?.selectedTodo],
  );

  const deleteTodo = useCallback(
    (todo: TTodoItem) => {
      dispatch && dispatch({type: TTodoReducerAction.DELETE, payload: todo});
    },
    [dispatch],
  );

  const data = useMemo(() => {
    return props.search
      ? todo?.todos?.filter(item =>
          item.todo?.toLocaleLowerCase().includes(props.search?.toLowerCase()),
        )
      : todo?.todos;
  }, [props.search, todo?.todos]);

  return {
    data,
    selectedTodo: todo?.selectedTodo,
    createTodo,
    selectTodo,
    unSelectTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodo;
