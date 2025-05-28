import { useState } from 'react';
import TodoList from './components/TodoList';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  const addTodo = () => {
    if (title.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title,
        completed: false
      };
      setTodos([newTodo, ...todos]);
      setTitle('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <input
        className="border px-2 py-1 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
        Ajouter
      </button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
