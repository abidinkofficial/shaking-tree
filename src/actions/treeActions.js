export const SHAKE_TREE_ACTION = "SHAKE_TREE_ACTION" // Beginning of the shaking
export const SHAKE_TREE_ACTION_SUCCESS = "SHAKE_TREE_ACTION_SUCCESS" // End of the shaking

export const shakeTreeAction = () => ({ type: SHAKE_TREE_ACTION })
export const shakeTreeActionSuccess = () => ({ type: SHAKE_TREE_ACTION_SUCCESS })

// Action creator to shake the tree for 3 seconds
export const shakeTree = () => {
  return async (dispatch) => {
    dispatch(shakeTreeAction())
    setTimeout(() => dispatch(shakeTreeActionSuccess()), 3000)
  }
}
