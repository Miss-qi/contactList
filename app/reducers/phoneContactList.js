const phoneContactList = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CONTACT_LIST':
            return action.data;
        default:
            return state;
    }
};

export default phoneContactList;