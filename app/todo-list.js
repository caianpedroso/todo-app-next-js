const getTodos = async () => {
  let todos = await fetch("https://6449df59a8370fb3213feeda.mockapi.io/list", {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
    if (res.ok) {
      return res.json();
    }})
  return todos;
}
export default async function TodoList() {
  const todos = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ padding: "5px 0"}}>Todo 1</li>
        <li style={{ padding: "5px 0"}}>Todo 2</li>
        <li style={{ padding: "5px 0"}}>Todo 2</li>
      </ul>
    </div>
  )
}