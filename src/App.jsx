import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Diego Fernandes"
            contents="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis labore error deserunt dolorem laboriosam consectetur molestias, repudiandae quidem distinctio perspiciatis deleniti ea cum cupiditate, rem necessitatibus tenetur dicta laborum?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
