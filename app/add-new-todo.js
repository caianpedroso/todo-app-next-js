"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

async function addTodo(name, refresh, reSetName) {
  await fetch('https://6449df59a8370fb3213feeda.mockapi.io/list/', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({ name }),
    next: { revalidate: 0 }
  })
  
  reSetName();
  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  const [name, setName] = useState("");
  
  const reSetName = () => setName("");
  
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => addTodo(name, router.refresh, reSetName)}>
        Add
      </button>
    </div>
  )
}