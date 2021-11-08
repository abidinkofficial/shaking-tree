import * as actions from "../actions/appleActions"

export const initialState = {
  apples: [
    {
      id: 0,
      dropping: false,
      dropped: false,
      basket: false
    },
    {
      id: 1,
      dropping: false,
      dropped: false,
      basket: false
    },
    {
      id: 2,
      dropping: false,
      dropped: false,
      basket: false
    }
  ]
}

const appleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DROP_APPLE_ACTION:
      let droppingApples = state.apples.map(apple => (apple.id === action.id) ? ({ ...apple, dropping: true }) : apple)
      return { ...state, apples: [...droppingApples] }
    case actions.DROP_APPLE_ACTION_SUCCESS:
      let droppedApples = state.apples.map(apple => (apple.id === action.id) ? ({ ...apple, dropping: false, dropped: true }) : apple)
      return { ...state, apples: [...droppedApples] }
    case actions.DROP_APPLE_TO_BASKET_ACTION:
      let applesAddedToBasket = state.apples.map(apple => (apple.id === action.id) ? ({ ...apple, basket: true }) : apple)
      return { ...state, apples: [...applesAddedToBasket] }
    default:
      return state
  }
}

export default appleReducer
