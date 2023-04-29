"use client";
import { useRouter } from "next/navigation";

async function update(id, isDone, refresh) {
  await fetch(`https://6449df59a8370fb3213feeda.mockapi.io/list/${id}`, {
    method: 'PUT',
    headers: {'content-type':'application/json'},
    next: { revalidate: 0 },
    body: JSON.stringify({isDone: isDone})
  }).then(res => {
    if (res.ok) {
      return refresh();
    }
    // handle error
  }).then(task => {
    // Do something with updated task
  }).catch(error => {
    // handle error
  })
}

export default function Todo({todo}) {
  const router = useRouter();
  
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      {todo.name}
      <button>Delete</button>
    </>
  )
}