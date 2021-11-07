export const SHAKE_TREE_ACTION = "SHAKE_TREE_ACTION"
export const SHAKE_TREE_ACTION_SUCCESS = "SHAKE_TREE_ACTION_SUCCESS"
export const DROP_APPLE_ACTION = "DROP_APPLE_ACTION"
export const DROP_APPLE_ACTION_SUCCESS = "DROP_APPLE_ACTION_SUCCESS"
export const DROP_APPLE_TO_BASKET_ACTION = "DROP_APPLE_TO_BASKET_ACTION"

export const shakeTreeAction = () => ({ type: SHAKE_TREE_ACTION })
export const shakeTreeActionSuccess = () => ({ type: SHAKE_TREE_ACTION_SUCCESS })
export const dropAppleAction = (id) => ({ type: DROP_APPLE_ACTION, id })
export const dropAppleActionSuccess = (id) => ({ type: DROP_APPLE_ACTION_SUCCESS, id })
export const dropAppleToBasketAction = (id) => ({ type: DROP_APPLE_TO_BASKET_ACTION, id })

export const shakeTree = () => {
  return async (dispatch) => {
    dispatch(shakeTreeAction())
    setTimeout(() => dispatch(shakeTreeActionSuccess()), 3000)
  }
}

export const dropApple = (id) => {
  return async (dispatch) => {
    dispatch(dropAppleAction(id))
    setTimeout(() => dispatch(dropAppleActionSuccess(id)), 500)
    setTimeout(() => dispatch(dropAppleToBasketAction(id)), 1000)
  }
}
