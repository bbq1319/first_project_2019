import React from 'react';

class App2 extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState(cur => ({count:cur.count+1}));
    };
    minus = () => {
        this.setState(cur => ({count:cur.count-1}));
    };

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("i'm rendered");
        return (
            <div>
                <h2>The number is : {this.state.count}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App2;