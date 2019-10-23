export const Types = {
  REQUEST: 'CATEGORY_REQUEST',
  SUCCESS: 'CATEGORY_SUCCESS',
  FAILURE: 'CATEGORY_FAILURE',
};

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: true,
};

export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        data: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  categoryRequest: (categoryName) => ({
    type: Types.REQUEST,
    payload: {
      categoryName,
    },
  }),
  categorySuccess: (data) => ({
    type: Types.SUCCESS,
    payload: {
      data,
    },
  }),
  categoryFailure: (error) => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};
