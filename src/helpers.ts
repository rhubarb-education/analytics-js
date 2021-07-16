import store from "store2";

const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 12);
};

export const getId = () => {
    if (!store('re_uid')) {
        store('re_uid', generateId())
    }
    return store('re_uid');
};