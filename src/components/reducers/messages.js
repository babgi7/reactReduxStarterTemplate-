const MESSAGE_SHOW = 'MESSAGE_SHOW';
const MESSAGE_HIDE = 'MESSAGE_HIDE';

export const showMessage = (msg = 'msg') => ({ type: MESSAGE_SHOW, payload: msg });
export const hideMessage = () => ({ type: MESSAGE_HIDE, payload: false });


export default (state = '', action) => {
    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload
        case MESSAGE_HIDE:
            return action.payload
        default:
            return state;
    }
}
