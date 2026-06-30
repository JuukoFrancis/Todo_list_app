import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }
  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="rounded-s-md  grow border border-gray-400 p-2"
          placeholder="What needs to be done"
        />
        <button
          type="submit"
          className="rounded-md w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
