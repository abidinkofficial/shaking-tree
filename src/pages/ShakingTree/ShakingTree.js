import styles from "./ShakingTree.module.scss"
import { ReactComponent as Ground } from "./Ground.svg"

import Tree from "../../components/Tree"
import Basket from "../../components/Basket"

const ShakingTree = () => {
  return (
    <div className={styles.ShakingTree}>
      <Tree />
      <Basket />
      <Ground className={styles.Ground} />
    </div>
  )
}

export default ShakingTree