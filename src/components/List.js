import React from 'react';
import Item from './Item';

class List extends React.Component {
    render () {
        return (
         <ul >
           {
             this.props.todos.map((item, id) => {
                return (<Item
                          item={item}
                          key={item.id}
                          index={id}
                          removeItem={this.props.removeItem}
                        />)
             })
           }
         </ul>
        )
    }
}

export default List;