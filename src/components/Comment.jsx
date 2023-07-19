import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com./MikaelBraghini.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.autorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 21:47" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
