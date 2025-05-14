import './App.css'
import { TodoItem } from './components/TodoItem.tsx';

function App() {
  const todos = [
    { id: 1, todo: 'Belajar React', status: 1, isDeleted: 0},
    { id: 2, todo: 'Ngoding Project', status: 0, isDeleted: 0},
    { id: 3, todo: 'Belajar Vite', status: 1, isDeleted: 0},
    { id: 4, todo: 'Belajar JS', status: 0, isDeleted: 0,}
  ];

  const onHandleMarkDone = (id: number) => {
    console.log(`Todo with id: ${id} is marked to Done`);
  }

  const onHandleDelete = (id: number) => {
    console.log(`Todo with id: ${id} is Deleted`);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => {}}>+ Add Todo</button>
      <ul>
        {todos
          .filter(todo => todo.isDeleted === 0)
          .map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onMarkDone={onHandleMarkDone}
              onDelete={onHandleDelete}
            />
          ))}
      </ul>
    </div>
  );
}

export default App
