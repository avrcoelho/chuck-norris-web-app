export const Types = {
  REQUEST: 'CATEFGORIES_REQUEST',
  SUCCESS: 'CATEFGORIES_SUCCESS',
  FAILURE: 'CATEFGORIES_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
};

export default function categories(state = INITIAL_STATE, action) {
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
      };
    default:
      return state;
  }
}

export const Creators = {
  categoriesRequest: () => ({
    type: Types.REQUEST,
  }),
  categoriesSuccess: (data) => ({
    type: Types.SUCCESS,
    payload: {
      data,
    },
  }),
  categoriesFailure: (error) => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};
