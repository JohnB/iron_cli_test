AddPlayer = React.createClass({
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    addThisPlayer: function(event) {
        console.log('addThisPlayer?');
        console.log(this.state);
    },
    handleNameChange: function(event) {
        this.setState({name: event.target.value});
    },
    handleEmailChange: function(event) {
        this.setState({email: event.target.value});
    },
    render() {
        return (
            <div>
                <span className='playerName'>
                    <input type="text"
                           defaultValue={this.props.player.name}
                           placeholder='Name'
                           onChange={this.handleNameChange}
                        />
                </span>
                <span className='playerEmail'>
                    <input type="text"
                           defaultValue={this.props.player.email}
                           placeholder='Email'
                           onChange={this.handleEmailChange}
                        />
                </span>
                <span className='addPlayerButton'>
                    <button onClick={this.addThisPlayer}>Add Player</button>
                </span>
            </div>
        );
    }
});
