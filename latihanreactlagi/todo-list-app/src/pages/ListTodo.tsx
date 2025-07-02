// src/pages/ListTodo.tsx
import '../index.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoItem } from '../components/TodoItem.tsx';
import supabase from '../utils/supabase.ts';
import type { tododto } from '../dtos/todos.dto';

export default function ListTodo() {
  const [todos, setTodos] = useState<tododto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getTodos() {
      const { data: dataTodos, error } = await supabase.from('todos').select();
      if (error) console.log('error', error);
      if (dataTodos) setTodos(dataTodos);
    }
    getTodos();
  }, []);

  const onHandleMarkDone = async (id: number) => {
    await supabase.from('todos').update({ status: 1 }).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: 1 } : todo)));
  };

  const onHandleDelete = async (id: number) => {
    await supabase.from('todos').update({ is_deleted: 1 }).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, is_deleted: 1 } : todo)));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => navigate('/add')}>+ Add Todo</button>
      <ul>
        {todos
          .filter(todo => todo.is_deleted === 0)
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
