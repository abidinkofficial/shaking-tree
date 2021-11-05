import styles from "./ShakingTree.module.scss"

import Tree from "../../components/Tree"

const ShakingTree = () => {
  return (
    <div className={styles.ShakingTree}>
      <Tree />
    </div>
  )
}

export default ShakingTree