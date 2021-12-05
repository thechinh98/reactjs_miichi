import React, { Component } from "react";
import '../../css/app.css';
class TableSample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: [
        { id: 1, name: 'bun dau', price: 21, img: 'https://cdn.cet.edu.vn/wp-content/uploads/2017/12/bun-dau-mam-tom-1.jpg' },
        { id: 2, name: 'bun dau', price: 19, img: 'https://cdn.cet.edu.vn/wp-content/uploads/2017/12/bun-dau-mam-tom-1.jpg' },
        { id: 3, name: 'bun dau', price: 16, img: 'https://cdn.cet.edu.vn/wp-content/uploads/2017/12/bun-dau-mam-tom-1.jpg' },
        { id: 4, name: 'bun dau', price: 25, img: 'https://cdn.cet.edu.vn/wp-content/uploads/2017/12/bun-dau-mam-tom-1.jpg' },
      ],
    }
  }

  renderTableData() {
    return this.state.foods.map((food, index) => {
      const { id, name, price, img } = food
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td id = "bundau"><img src={img} alt={name}></img></td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.foods[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
      <div>
        <table id ="foods">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableSample
