SuggestDate = React.createClass({
    sendInvites: function(event) {
        console.log('sendInvites');
        console.log(this.refs.datepicker.getDate());
        this.setState({date: this.refs.datepicker.getDate()});
        console.log(this.state);
    },
    firstFriday: function() {
        const friday_day_of_week = 5;
        var fFriday = moment().endOf('month');
        if(fFriday.day() < friday_day_of_week) {
            fFriday = fFriday.add(friday_day_of_week - fFriday.day(), 'days')
        } else if(fFriday.day() > friday_day_of_week) {
            fFriday = fFriday.add(6, 'days')
        }
        fFriday = fFriday.format('MM/DD/YYYY');
        console.log(fFriday);
        return fFriday;
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
                        defaultDate={this.firstFriday()}
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
