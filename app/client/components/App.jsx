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

    render() {
        return (
            <div className="container">
                <header>
                    <h1>something important here</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
                <AddPlayer player={{name: 'JohnB', email: 'john.baylor@gmail.com'}} />
                <SuggestDate />
            </div>
        );
    }
});
