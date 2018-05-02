import React from 'react';

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {
    
    keydownHandler(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text === '') {
                return;
            }
            this.props.addItem(text);
            
            // clear input
            event.target.value = '';
        }
    }

    render() {
        return (
            <div  >
                <p>What do you want to get done?</p>
                <input type="text" id="text-todo" name="text-todo" size="50" onKeyDown={this.keydownHandler.bind(this)} />
            </div>
        );
    }
}

export default NewTodo;