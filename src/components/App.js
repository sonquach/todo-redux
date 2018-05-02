import React from 'react';
import NewTodo from './NewTodo';
import List from './List';

const todoList = [
    {
      id: 1,
      text: "Learning React"
    },
    {
      id: 2,
      text: "Learning English"
    }
  ];

class App extends React.Component {
    render() {
        return (
            <div>
                <NewTodo />
                <hr/>
                <List />
            </div>
        );
    }


}

export default App;