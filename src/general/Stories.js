import React, { Component } from 'react';
import Story from './Story';
import stories from './tweets';

class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            stories: stories.statuses
        }
    }

    render() {
        var rows = [];
        var stories = this.state.stories;
        for (var i=0; i < stories.length; i++) {
            if(!stories[i].retweeted_status){
                rows.push(<Story data={stories[i]} key={i} />);
            }
        }

        return (
            <div className="list">
                <div className="list-header">
                    <div className="font-x-large">Stories in #Bangalore </div>
                </div>
                <div className="list-body">
                    {rows}
                </div>
            </div>
        );
    }
}

export default List;