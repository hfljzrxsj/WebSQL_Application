import type {
  // RRN_,
  // RRNReactElementGenericity,
  RRNboolean,
  // RRNnumber,
  // RRNstring
  // anyReactElementGenericity
} from '@/types';
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { actionInterface, TypedUseSelectorHookState } from '.';
import type { DBConfigData } from '@/components/Menu';
export enum enumActionName {
  SET = 'SET'
}
// eslint-disable-next-line no-shadow
export enum enumDB {
  config = 'config',
  index = 'index'
}
interface State {
  // readonly [enumAppBarTitle.title]: RRNstring;
  readonly [enumDB.config]?: DBConfigData;
  readonly [enumDB.index]?: RRNboolean;
}
// export type RRNState = RRN_<State>;
export type DBAction = actionInterface<State, enumActionName>;
const initialState = {
  [enumDB.config]: [],
  [enumDB.index]: false,
},
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/default-param-last, default-param-last
  reducer = (state = initialState, action: DBAction) => {
    const { type, payload = {} } = action;
    switch (type) {
      case enumActionName.SET:
        return ({
          ...state,
          ...payload,
        });
      default:
        return state;
    }
  };
export const useDBTypedSelector: TypedUseSelectorHook<TypedUseSelectorHookState<State>> = useSelector;
export default reducer;