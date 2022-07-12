const initState = {
        search: '',
        status: 'All',
        priority: []
}
const filtersReducer = (state = initState, action) => {
    console.log(state, action);
    switch(action.type){
        case 'filters/searchTextChange':
            return{
                ...state,
                search: action.payload
            }
        case 'filters/statusChange':
            return{
                ...state,
                status: action.payload
            }
        case 'filters/prioritiesChange':
            return {
                ... state,
                priority: action.payload
            }
        default:
            return state;
    }   
}
export default filtersReducer;