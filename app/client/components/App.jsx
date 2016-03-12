App = React.createClass({
    getTasks() {
        return [
            { _id: 1, text: "This is task 1" },
            { _id: 2, text: "This is task 2" },
            { _id: 3, text: "This is task 3" }
        ];
    },

    renderTasks() {
        return this.getTasks().map((task) => {
            return <Task key={task._id} task={task} />;
        });
    },
    playerAdded(event) {
        console.log(event);
        console.log(this.refs.foobar);
        console.log(this.refs.foobar.props.player);
        this.setState({player: this.refs.foobar.props.player});
        console.log(this.state);
    },

    render() {
        return (
            <div className="container">
                <AddPlayer
                    ref="foobar"
                    player={{name: 'JohnB', email: 'john.baylor@gmail.com'}}
                    />
                <SuggestDate />
                <span className='showData'>
                    <button onClick={this.playerAdded}>test Player added</button>
                </span>
            </div>
        );
    }
});
