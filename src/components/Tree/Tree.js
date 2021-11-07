import { useSelector } from "react-redux"
import styles from "./Tree.module.scss"

import Apple from "../Apple"

const Tree = () => {
  const { shakingTree } = useSelector(state => state.applicationState)

  return (
    <div className={`${styles.Tree} ${shakingTree ? styles.ShakingAnimation : ""}`}>
      <Apple />
    </div>
  )
}

export default Tree