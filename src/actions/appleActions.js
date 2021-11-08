export const DROP_APPLE_ACTION = "DROP_APPLE_ACTION" // Apple, in the dropping phase
export const DROP_APPLE_ACTION_SUCCESS = "DROP_APPLE_ACTION_SUCCESS" // Apple, on the ground phase
export const DROP_APPLE_TO_BASKET_ACTION = "DROP_APPLE_TO_BASKET_ACTION" // Apple, in the basket phase

export const dropAppleAction = (id) => ({ type: DROP_APPLE_ACTION, id })
export const dropAppleActionSuccess = (id) => ({ type: DROP_APPLE_ACTION_SUCCESS, id })
export const dropAppleToBasketAction = (id) => ({ type: DROP_APPLE_TO_BASKET_ACTION, id })

// Action creator to put an apple to dropping phase for 0.5 seconds,
// and send it in to the basket 1 seconds after dropping.
export const dropApple = (id) => {
  return async (dispatch) => {
    dispatch(dropAppleAction(id))
    setTimeout(() => dispatch(dropAppleActionSuccess(id)), 500)
    setTimeout(() => dispatch(dropAppleToBasketAction(id)), 1000)
  }
}
