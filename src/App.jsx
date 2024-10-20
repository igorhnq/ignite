import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate itaque dolore similique quia saepe, libero excepturi provident exercitationem autem laborum culpa aut iure nulla quidem ut fuga maiores magnam fugiat!"  
      />
      <Post 
        author="Gabriel Buzzi" 
        content="Um novo post muito legal"  
      />
      <Post />
    </div>
  )
}

