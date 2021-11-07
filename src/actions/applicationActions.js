export const SHAKE_TREE_ACTION = "SHAKE_TREE_ACTION"
export const SHAKE_TREE_ACTION_SUCCESS = "SHAKE_TREE_ACTION_SUCCESS"
export const DROP_APPLE_ACTION = "DROP_APPLE_ACTION"
export const DROP_APPLE_ACTION_SUCCESS = "DROP_APPLE_ACTION_SUCCESS"

export const shakeTreeAction = () => ({ type: SHAKE_TREE_ACTION })
export const shakeTreeActionSuccess = () => ({ type: SHAKE_TREE_ACTION_SUCCESS })
export const dropAppleAction = () => ({ type: DROP_APPLE_ACTION })
export const dropAppleActionSuccess = () => ({ type: DROP_APPLE_ACTION_SUCCESS })

export const shakeTree = () => {
  return async (dispatch) => {
    dispatch(shakeTreeAction())
    setTimeout(() => dispatch(shakeTreeActionSuccess()), 3000)
  }
}

export const dropApple = () => {
  return async (dispatch) => {
    dispatch(dropAppleAction())
    setTimeout(() => dispatch(dropAppleActionSuccess()), 1500)
  }
}
