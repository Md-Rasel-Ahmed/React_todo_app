import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Counter;