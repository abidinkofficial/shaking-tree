import styles from "./Apple.module.scss"

const Apple = ({ apple }) => {
  const { dropping, dropped, basket } = apple
   
  return (
    <div className={`${styles.Apple} ${dropping ? styles.Dropping : ""} ${dropped ? styles.Dropped : ""} ${basket ? styles.Basket : ""}`}>
    
    </div>
  )
}

export default Apple