import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  //!add todo funkcija
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          complete: false,
        },
      ];
    });
  }
  //!funkcija za toogle todoje

  function toggleTodo(id, complete) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete };
        }
        return todo;
      });
    });
  }
  //!delete funkcija
  //!use currentTodos and filter them with all of todos except of the ones i want to remove
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      {/* //!mapa skoz vse todoje ter vnese novi todo v array */}
      <TodoList todos={todos} />
    </>
  );
}
