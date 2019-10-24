export const Types = {
  REQUEST: 'FACTS_REQUEST',
  SUCCESS: 'FACTS_SUCCESS',
  FAILURE: 'FACTS_FAILURE',
  UPDATE: 'UPDATE_FAILURE',
};

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: true,
  updating: false,
};

export default function facts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case Types.UPDATE:
      return {
        ...state,
        updating: true,
      };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
        updating: false,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        data: null,
        updating: false,
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
  factsUpdate: (category) => ({
    type: Types.UPDATE,
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
