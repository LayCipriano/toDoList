import { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("")
        setCategory("")
        console.log(value, category);
    }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Título da tarefa'
            value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Pensamentos">Pensamentos</option>
                <option value="Lembretes">Lembretes</option>
                <option value="Frases">Frases</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}