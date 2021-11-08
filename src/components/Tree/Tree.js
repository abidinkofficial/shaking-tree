import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { dropApple } from "../../actions/appleActions"
import styles from "./Tree.module.scss"

import Apple from "../Apple"

const Tree = () => {
  const { shakingTree, shakingTreeSuccess } = useSelector(state => state.treeState)
  const { apples } = useSelector(state => state.appleState)
  const dispatch = useDispatch()

  // Drop apples every 0.3 seconds after tree shakes
  useEffect(() => {
    if (shakingTreeSuccess) {
      dispatch(dropApple(2))
      setTimeout(() => {
        dispatch(dropApple(1))
        setTimeout(() => {
          dispatch(dropApple(0))
        }, 300)
      }, 300)
    }
    // eslint-disable-next-line
  }, [shakingTreeSuccess])

  return (
    <div className={`${styles.Tree} ${shakingTree ? styles.ShakingAnimation : ""}`}>
      <div className={styles.Apples}>
        {/* Render the apples that are not in the basket */}
        {apples.map(apple => !apple.basket && <Apple apple={apple} key={apple.id} />)}
      </div>
    </div>
  )
}

export default Tree