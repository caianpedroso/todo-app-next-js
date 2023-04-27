"use client";

export default function Todo({todo}) {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.isDone}
      />
      {todo.name}
      <button>Delete</button>
    </>
  )
}