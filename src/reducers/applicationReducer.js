import * as actions from "../actions/applicationActions"

export const initialState = {
  shakingTree: false,
  shakingTreeSuccess: false
}

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHAKE_TREE_ACTION:
      return { ...state, shakingTree: true }
    case actions.SHAKE_TREE_ACTION_SUCCESS:
      return { ...state, shakingTree: false, shakingTreeSuccess: true }
    default:
      return state
  }
}

export default applicationReducer
