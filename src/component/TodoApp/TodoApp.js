import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  //Add items Method 1

  //   storeItems = event => {
  //     event.preventDefault();
  //     const {input} = this.state;
  //     const allItems = this.state.items;

  //     allItems.push(input);

  //     this.setState({
  //         items : allItems
  //     });
  //   };

  //Add items Method 2
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    // Can use spread operator for above code
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  //Edit items

  updateItem = (event, index) => {
    event.preventDefault();
    const updatedItems = [...this.state.items]; // Copy the items array

    // Get the new value of the item from the user
    const newValue = prompt("Enter the new value:");

    // Update the corresponding item with the new value
    updatedItems[index] = newValue;

    // Update the state with the updated items array
    this.setState({
      items: updatedItems,
    });
  };

  // Delete items Method 1

  //   deleteItem = key =>{
  //     const allItems = this.state.items;

  //     allItems.splice(key,1)
  //     this.setState({
  //         items: allItems
  //     })
  //   };

  // Delete items Method 2 using filter
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    // destructure the state
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <h1>TodoApp</h1>
        <form className="input-section" onSubmit={this.storeItems}>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <span>
              <i
                className="fa-solid fa-trash-can"
                onClick={() => this.deleteItem(index)}
              ></i>
              <i
                className="fa-regular fa-edit"
                onClick={(event) => this.updateItem(event, index)}
              ></i></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
