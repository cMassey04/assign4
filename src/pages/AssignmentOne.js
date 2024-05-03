import React, { Component } from "react";

class Assin1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ["Click this button if you hate the celtics!!!!"],
      };
    }
  
    render() {
      return (
        <div className="ui unstackable items" style={{ textAlign: 'left', marginLeft: '20px' }}> 
          {this.state.items.map((item, index) => (
            <ChildComponent
              key={index}
              item={item}
              changeColor={() => this.changeColor(index)}
            />
          ))}
          <button className="add-item-btn" onClick={this.addItem}>
            Add New Item
          </button>
        </div>
      );
    }
  
    addItem = () => {
      const newItem = `Go Nuggets!!! ${this.state.items.length + 1}`;
      this.setState(prevState => ({
        items: [...prevState.items, newItem]
      }));
    };
  
    changeColor(index) {
      const items = [...this.state.items]; 
      items[index] = (
        <span style={{ color: this.getRandomColor() }}>{items[index]}</span>
      ); 
      this.setState({ items }); 
    }
  
    getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
  
  class ChildComponent extends React.Component {
    render() {
      const { item } = this.props;
      return (
        <div className="ui centered card">
          <div className="field">
            <label>{item}</label>
          </div>
          <button className="change-color-btn" onClick={this.handleChangeColor}>
            Click button
          </button>
        </div>
      );
    }
  
    handleChangeColor = () => {
      this.props.changeColor();
    };
  }

export default Assin1;
