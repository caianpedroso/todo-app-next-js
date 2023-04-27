import Todo from "@/app/todo";

const getTodos = async () => {
  let todos = await fetch("https://6449df59a8370fb3213feeda.mockapi.io/list", {
      method: 'GET',
      headers: {'content-type':'application/json'},
      next: { revalidate: 0 }
    }).then(res => {
    if (res.ok) {
      return res.json();
    }})
  return todos;
}
export default async function TodoList() {
  const todos = await getTodos();
  
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map(item => {
          return(
            <li key={item.id} style={{ padding: "5px 0"}}>
              <Todo todo={item}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}