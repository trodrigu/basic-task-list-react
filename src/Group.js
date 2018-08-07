import React, { Component } from 'react';
import Item from './Item';


export default class Group extends Component {
    constructor(props) {
        super(props);

        this.state = {shouldHide: true}
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            return {shouldHide: !prevState.shouldHide};
        });
    }

    onGroupFinish = (id) => {
        this.props.onFinish(id)
    }
    onGroupUnfinish = (id) => {
        this.props.onUnfinish(id)
    }

    render() {
        return (
            <ul>
            <a onClick={this.handleClick}>{this.props.name}</a>
            {
                this.props.items && this.props.items.map((item, index) => <Item key={item.id} id={item.id} task={item.task} dependencies={item.dependencyIds} onItemUnfinish={this.onGroupUnfinish} onItemFinish={this.onGroupFinish} shouldHide={this.state.shouldHide} finished={this.props.finished}/>)
            }
            </ul>
        )

    }

}