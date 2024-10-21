import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandes" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate itaque dolore similique quia saepe, libero excepturi provident exercitationem autem laborum culpa aut iure nulla quidem ut fuga maiores magnam fugiat!"  
          />
          <Post 
            author="Gabriel Buzzi" 
            content="Um novo post muito legal"  
          />
          <Post />
        </main>
      </div>
    </div>
  )
}

