import React, { useState } from "react";
import { dummyData } from "../data/todos";
import TodoItem from "../components/TodoItem";
import AddTodoForm from "../components/AddTodoForm";

function HomePage() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    if (!id) return;
    setTodos((prevTodos) =>
      prevTodos.map((items) =>
        items.id === id ? { ...items, completed } : items,
      ),
    );
  }
  function addTodo(title: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, title, completed: false },
    ]);
  }
  return (
    <div className="py-10 h-screen space-y-4">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>

      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <AddTodoForm onSubmit={addTodo} />
        <div className="space-y-4 pt-4">
          {todos.map((todos) => (
            <TodoItem
              key={todos.id}
              todo={todos}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
