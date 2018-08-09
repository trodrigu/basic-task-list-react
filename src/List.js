import React, { Component } from 'react';
import Group from './Group';


export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = 
            {finishedItems: []}
    }

    createGroups = (items) => {
        let list = []
        for (var item in items) {
            list.push(<Group key={item} items={items[item]} name={item} onUnfinish={this.removeFromFinished} onFinish={this.addToFinished} finished={this.state.finishedItems}  />)
        };
        return list;
    }

    removeFromFinished = (id) => {
        this.setState((preState, props) => {
            var index = preState.finishedItems.indexOf(id)
            if (index > -1) {
                return preState.finishedItems.splice(index, 1)
            }
        })
    }


    addToFinished = (id) => {
        this.setState((prevState, props) => {
            return prevState.finishedItems.push(id)
        })
    }


    render() {
        return (
            <ul className="ul-for-group">
                { this.createGroups(this.props.items) }
            </ul>
        )

    }
}