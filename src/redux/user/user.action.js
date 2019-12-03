
import { userActionType} from './user.type';

export const setCurrentUser = user => ({
    type: userActionType.SET_CRRENT_USER,
    payload: user
});