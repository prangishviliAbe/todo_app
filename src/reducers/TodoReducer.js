export const TodoReducer = (state, action) => {
     switch (action.type){
         case 'ADD_TODO':
             return (
                 [...state, {title: action.title, date: action.date, id: 2}]
             )
         case 'DELETE_TODO':
             return (
                 state.filter(todo=> todo.id !== action.id)
             )
         default:
             return state
     }
}