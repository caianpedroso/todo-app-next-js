import Image from 'next/image'
import styles from './page.module.css'
import AddNewTodo from "@/app/add-new-todo";
import TodoList from "@/app/todo-list";

export default function Home() {
  return (
   <div>
     <AddNewTodo />
     <TodoList />
   </div>
  )
}
