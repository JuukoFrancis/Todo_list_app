// import React from "react";
import { LucideDelete } from "lucide-react";
import type { Todo } from "../types/todo";
interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

function TodoItem({ todo, onCompletedChange }: TodoItemProps) {
  return (
    <div className="text-lg">
      <label className="flex gap-4 items-center border rounded-md  p-2 border-gray-500 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          className="scale-125 ml-2"
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through" : "text-gray-500"}>
          {todo.title}
        </span>
        <LucideDelete className="" />
      </label>
    </div>
  );
}

export default TodoItem;
