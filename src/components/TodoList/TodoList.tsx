import React, { useContext } from 'react';
import { StateContext } from '../../store/Store';
import { Loader } from '../Loader';
import { TableHead } from '../TableHead';
import { TodoRow } from '../TodoRow';

export const TodoList: React.FC = () => {
  const { filteredTodos, selectedTodo, loading } = useContext(StateContext);

  return (
    <table className="table is-narrow is-fullwidth">
      {loading ? (
        <Loader />
      ) : (
        <>
          {' '}
          <TableHead />
          <tbody>
            {filteredTodos.map(todo => (
              <TodoRow
                key={todo.id}
                todo={todo}
                isSelected={todo.id === selectedTodo.id}
              />
            ))}
          </tbody>
        </>
      )}
    </table>
  );
};
