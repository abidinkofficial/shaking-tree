export const SHAKE_TREE_ACTION = "SHAKE_TREE_ACTION"
export const SHAKE_TREE_ACTION_SUCCESS = "SHAKE_TREE_ACTION_SUCCESS"

export const shakeTreeAction = () => ({ type: SHAKE_TREE_ACTION })
export const shakeTreeActionSuccess = () => ({ type: SHAKE_TREE_ACTION_SUCCESS })

export const shakeTree = () => {
  return async (dispatch) => {
    dispatch(shakeTreeAction())
    setTimeout(() => dispatch(shakeTreeActionSuccess()), 3000)
  }
}
