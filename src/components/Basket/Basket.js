import { useDispatch, useSelector } from "react-redux"
import { shakeTree } from "../../actions/applicationActions"
import Apple from "../Apple"
import styles from "./Basket.module.scss"

const Basket = () => {
  const { dropAppleStatusSuccess } = useSelector(state => state.applicationState)
  const dispatch = useDispatch()

  return (
    <div className={styles.Basket}>
      { dropAppleStatusSuccess && <Apple dropAppleStatusSuccess={dropAppleStatusSuccess} /> }
      <button onClick={() => dispatch(shakeTree())}>Click to shake & collect</button>
    </div>
  )
}

export default Basket