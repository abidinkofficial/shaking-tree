import { useDispatch, useSelector } from "react-redux"
import { shakeTree } from "../../actions/treeActions"
import Apple from "../Apple"
import styles from "./Basket.module.scss"

const Basket = () => {
  const { apples } = useSelector(state => state.appleState)
  const dispatch = useDispatch()

  return (
    <div className={styles.Basket}>
      <div className={styles.Apples}>
        {/* Render apples if they are in the basket  */}
        {apples.map(apple => apple.basket && <Apple apple={apple} key={apple.id} />)}
      </div>
      <button onClick={() => dispatch(shakeTree())}>Click to shake & collect</button>
    </div>
  )
}

export default Basket