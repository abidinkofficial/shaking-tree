import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { dropApple } from "../../actions/applicationActions"
import styles from "./Tree.module.scss"

import Apple from "../Apple"

const Tree = () => {
  const { 
    shakingTree,
    shakingTreeSuccess,
    dropAppleStatus,
    dropAppleStatusSuccess } = useSelector(state => state.applicationState)
  const dispatch = useDispatch()

  useEffect(() => {
    shakingTreeSuccess && dispatch(dropApple())
    // eslint-disable-next-line
  }, [shakingTreeSuccess])

  return (
    <div className={`${styles.Tree} ${shakingTree ? styles.ShakingAnimation : ""}`}>
      { !dropAppleStatusSuccess && <Apple dropAppleStatus={dropAppleStatus} dropAppleStatusSuccess={dropAppleStatusSuccess} /> }
    </div>
  )
}

export default Tree