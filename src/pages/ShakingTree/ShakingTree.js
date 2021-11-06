import styles from "./ShakingTree.module.scss"

import Tree from "../../components/Tree"
import Basket from "../../components/Basket"

const ShakingTree = () => {
  return (
    <div className={styles.ShakingTree}>
      <Tree />
      <Basket />
    </div>
  )
}

export default ShakingTree