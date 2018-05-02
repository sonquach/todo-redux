const todos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TODO': 
            return action.todos || []
            
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
     
        default:
            return state
    }
  }
  
  export default todos