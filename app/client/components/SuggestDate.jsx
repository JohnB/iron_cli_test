SuggestDate = React.createClass({
    sendInvites: function(event) {
        console.log('sendInvites');
        console.log(this.refs.datepicker.getDate());
        this.setState({date: this.refs.datepicker.getDate()});
        console.log(this.state);
    },
    handleInviteTextChange: function(event) {
        this.setState({inviteText: event.target.value});
    },
    render() {
        return (
            <div>
                <span className='gameDate'>
                    <DatePicker
                        ref="datepicker"
                        />
                </span>
                <span className='inviteText'>
                    <input type="textArea"
                           defaultValue=''
                           placeholder='Pleading request here'
                           onChange={this.handleInviteTextChange}
                        />
                </span>
                <span className='players'>
                    players
                </span>
                <span className='sendInvites'>
                    <button onClick={this.sendInvites}>Test</button>
                </span>
            </div>
        );
    }
});
