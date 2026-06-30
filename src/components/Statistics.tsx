import React from "react";
import type { Todo } from "../types/todo";
interface stats {
  todos: Todo[];
}

export default function Statistics({ todos }: stats) {
  const total = todos.length;
  const finishedItems = todos.filter((i) => i.completed === true).length;

  return (
    <div className="text-center pt-2 text-md">
      {finishedItems === total ? (
        <p>You have completed all the items</p>
      ) : (
        <p>
          You have {finishedItems} completed this out of {total} items
        </p>
      )}
    </div>
  );
}
