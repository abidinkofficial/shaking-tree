import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { dropApple } from "../../actions/applicationActions"
import styles from "./Tree.module.scss"

import Apple from "../Apple"

const Tree = () => {
  const {
    shakingTree, shakingTreeSuccess, apples } = useSelector(state => state.applicationState)
  const dispatch = useDispatch()

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
        {apples.map(apple => !apple.basket && <Apple apple={apple} key={apple.id} />)}
      </div>
    </div>
  )
}

export default Tree