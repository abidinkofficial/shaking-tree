import styles from "./Tree.module.scss"

import Apple from "../Apple"

const Tree = () => {
  return (
    <div className={styles.Tree}>
      <Apple />
    </div>
  )
}

export default Tree