import React from "react";

class App3 extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 3000);
    }

    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Just Loading" : "We are ready"}</div>;
    }
}

export default App3;