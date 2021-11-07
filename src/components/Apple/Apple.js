import styles from "./Apple.module.scss"

const Apple = ({ dropAppleStatus, dropAppleStatusSuccess }) => {
  return (
    <div className={`${styles.Apple} ${dropAppleStatus ? styles.Dropping : ""} ${dropAppleStatusSuccess ? styles.Dropped : ""}`}>

    </div>
  )
}

export default Apple