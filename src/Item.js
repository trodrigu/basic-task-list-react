import React, { Component } from 'react';

 
export default class Item extends Component  {
    constructor(props) {
        super(props);

        this.state = 
            {completedAt: null}
    }

    itemFinished = () => {
        var dependencies = this.props.dependencies
        for (let i of dependencies) {
            if (!this.props.finished.includes(i)) {
                return false
            }
        }
        return true
    }

    handleClick = (e) => {
        e.preventDefault();
        if ( typeof this.state.completedAt === 'undefined' || this.state.completedAt === null ) {
            if (this.itemFinished()) {
                this.props.onItemFinish(this.props.id)
                this.setState((prevState, props) => {
                    return {completedAt: Date.now};
                });
            } else {
            }
        } else {
            this.props.onItemUnfinish(this.props.id)
            this.setState((prevState, props) => {
                return {completedAt: null};
            })
        }
    }


    render() {
        const completedAt = this.state.completedAt

        if ( typeof completedAt === 'undefined' || completedAt === null ) {
            return (
                <li className={ this.props.shouldHide ? 'hidden' : ''} onClick={this.handleClick}>{this.props.task}</li>
            )
        } else {
            return (
                <strike><li className={ this.props.shouldHide ? 'hidden' : ''} onClick={this.handleClick}>{this.props.task}</li></strike>
            )
        }
    }
}