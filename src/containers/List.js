import { connect } from 'react-redux'
import List from '../components/List'
import { fetchToDos } from '../actions'

const mapStateToProps = state => {
    // return {list: getFilteredList(state.todos, state.filters)}
    return {todos: fetchTodos()}
  }
  
  export default connect(
    mapStateToProps,
    null
  )(List)


