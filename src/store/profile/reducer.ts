import { ProfileActions } from './typs';
import { TOGGLE_PROFILE, CHANGE_NAME } from './actions';
import { Reducer } from 'redux';

export interface ProfileState {
  visible: boolean;
  name: string;
}

const initialState: ProfileState = {
  visible: true,
  name: 'default name',
};

export const profileReducer: Reducer<ProfileState, ProfileActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }

    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }

    default:
      return state;
  }
};
