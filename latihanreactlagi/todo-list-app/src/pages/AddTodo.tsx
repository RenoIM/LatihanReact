// src/pages/AddTodo.tsx

import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabase.ts';

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const onHandleAddTodo = async () => {
    if (newTodo.trim() === '') {
      alert('Todo tidak boleh kosong');
      return;
    }

    const { error } = await supabase.from('todos').insert({
      todo: newTodo,
      status: 0,
      is_deleted: 0,
    });

    if (!error) {
      navigate('/'); // Navigate back to list after adding
    }
  };

  return (
    <div>
      <h2>Tambah Todo</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Masukkan todo"
      />
      <br />
      <button onClick={onHandleAddTodo}>Simpan</button>
      <button onClick={() => navigate('/')}>Batal</button>
    </div>
  );
}
