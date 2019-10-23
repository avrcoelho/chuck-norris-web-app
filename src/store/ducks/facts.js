export const Types = {
  REQUEST: 'FACTS_REQUEST',
  SUCCESS: 'FACTS_SUCCESS',
  FAILURE: 'FACTS_FAILURE',
};

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: true,
};

export default function facts(state = INITIAL_STATE, action) {
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
  factsRequest: (category) => ({
    type: Types.REQUEST,
    payload: {
      category,
    },
  }),
  factsSuccess: (data) => ({
    type: Types.SUCCESS,
    payload: {
      data,
    },
  }),
  factsFailure: (error) => ({
    type: Types.FAILURE,
    payload: {
      error,
    },
  }),
};
