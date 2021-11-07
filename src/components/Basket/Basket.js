import { useDispatch, useSelector } from "react-redux"
import { shakeTree } from "../../actions/applicationActions"
import Apple from "../Apple"
import styles from "./Basket.module.scss"

const Basket = () => {
  const { apples } = useSelector(state => state.applicationState)
  const dispatch = useDispatch()

  return (
    <div className={styles.Basket}>
      <div className={styles.Apples}>
        {apples.map(apple => apple.basket && <Apple apple={apple} key={apple.id} />)}
      </div>
      <button onClick={() => dispatch(shakeTree())}>Click to shake & collect</button>
    </div>
  )
}

export default Basket