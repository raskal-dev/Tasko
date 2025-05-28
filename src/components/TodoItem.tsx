import type { Todo } from '../App';

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <li
      className={`cursor-pointer p-2 border-b ${
        todo.completed ? 'line-through text-gray-500' : ''
      }`}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
