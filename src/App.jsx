import { useState, useEffect } from 'react';
import '../src/App.css';
import {Todo} from './assets/components/Todo.jsx';
import {TodoForm} from './assets/components/TodoForm';
import {Search} from './assets/components/Search';
import {Filter} from './assets/components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Se você iluminar apenas suas imperfeições, todas as suas qualidades ficarão na sombra",
      category: "Frases",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fique firme e acredite em Cristo s2",
      category: "Lembretes",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Acreditar que é possível é motivo suficiente para não desistir.",
      category: "Pensamentos",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A - Z");


  const addTodo = (text, category) => {
    const newTodo = 
      {
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted: false,
      };
      const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todosFromLocalStorage);
  });


  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className='todo-list'>
          {todos
          .filter((todo) => filter === "All" 
          ? true //sem filtros, todos os itens
          : filter === "Completed" //itens concluídos
          ? todo.isCompleted 
          : !todo.isCompleted) //itens ñ concluídos

          .filter((todo) => todo.text.toLowerCase()
          .includes(search.toLowerCase()))

          .sort((a, b) => sort === "A - Z" 
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text))

          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
