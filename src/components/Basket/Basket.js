import { useDispatch } from "react-redux"
import { shakeTree } from "../../actions/applicationActions"
import styles from "./Basket.module.scss"

const Basket = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.Basket}>
      <button onClick={() => dispatch(shakeTree())}>Click to shake & collect</button>
    </div>
  )
}

export default Basket