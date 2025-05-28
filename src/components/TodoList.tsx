import TodoItem from './TodoItem';
import { Todo } from '../App';

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo }: Props) => {
  return (
    <ul className="mt-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
    
  );
};

export default TodoList;
