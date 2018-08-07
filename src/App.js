import React, { Component } from 'react';
import './App.css';
import List from "./List";
export default class App extends Component {
  constructor(props) {
    super(props);

    function group(list) {  
      return list.items.reduce(function(grouped, item) {
          var key = item.group
          var tasks = grouped[key] || []
          tasks.push(item)
          grouped[key] = tasks
          return grouped;
      }, {});
    }

    var listOfTasks = {
        items: [
          {
              id: 1,
              group: "Purchases",
              task: "Go to the bank",
              dependencyIds: [],
              completedAt: null
          },
          {
              id: 2,
              group: "Purchases",
              task: "Buy hammer",
              dependencyIds: [1],
              completedAt: null
          },
          {
              id: 3,
              group: "Purchases",
              task: "Buy wood",
              dependencyIds: [1],
              completedAt: null
          },
          {
              id: 4,
              group: "Purchases",
              task: "Buy nails",
              dependencyIds: [1],
              completedAt: null
          },
          {
              id: 5,
              group: "Purchases",
              task: "Buy paint",
              dependencyIds: [1],
              completedAt: null
          },
          {
              id: 6,
              group: "Build Airplane",
              task: "Hammer nails into wood",
              dependencyIds: [2, 3, 4],
              completedAt: null
          },
          {
              id: 8,
              group: "Build Airplane",
              task: "Paint wings",
              dependencyIds: [5, 6],
              completedAt: null
          },
          {
              id: 8,
              group: "Have a snack",
              task: "Have a snack",
              dependencyIds: [],
              completedAt: null
          },
      ]
    };

    this.state = { items: group(listOfTasks) }
  }



  render() {
    return (
      <div>
        <List items={this.state.items} />
      </div>
    );
  }
}
