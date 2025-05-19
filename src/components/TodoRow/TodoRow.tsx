import { Todo } from '../../types/Todo';
import React, { useContext } from 'react';
import classNames from 'classnames';
import { DispatchContext } from '../../store/Store';

interface TodoRowProps {
  todo: Todo;
  isSelected: boolean;
}

export const TodoRow: React.FC<TodoRowProps> = ({ todo, isSelected }) => {
  const dispatch = useContext(DispatchContext);
  const { id, completed, title } = todo;

  return (
    <tr
      data-cy="todo"
      className={classNames(isSelected && 'has-background-info-light')}
      key={id}
    >
      <td className="is-vcentered">{id}</td>

      <td className="is-vcentered">
        {completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>

      <td className="is-vcentered is-expanded">
        <p
          className={classNames(
            !completed ? 'has-text-danger' : 'has-text-success',
          )}
        >
          {title}
        </p>
      </td>

      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => dispatch({ type: 'SET_SELECTED', payload: id })}
        >
          <span className="icon">
            <i
              className={classNames(
                isSelected ? 'far fa-eye-slash' : 'far fa-eye',
              )}
            />
          </span>
        </button>
      </td>
    </tr>
  );
};
