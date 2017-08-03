import React from 'react'
import {Link} from 'react-router-dom'


export default class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: {}
    }
    this.submitCat = this.submitCat.bind(this)
    this.updateNewCatDetails = this.updateNewCatDetails.bind(this)
  }
  updateNewCatDetails(e) {
    let newTask = this.state.newTask
    newTask[e.target.name] = e.target.value
    //do something
    this.setState({newTask: newTask})
  }
  submitCat(e) {
    e.preventDefault()
    console.log({e});
    console.log("the cat is", this.state.newTask);
  }
  render() {
    return (
      <div className="New-Task Component">
    <h2> Make a New task </h2>
      <form onSubmit={this.submitCat}>
        <input name="Project Name" placeholder="Project Name" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
        <input name="Priority" placeholder="Priority" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
        <input name="Deatails" placeholder="Deatails" type="text" onChange={(e) => this.updateNewCatDetails(e)}/>
        <select name="Is Compleated" onChange={(e) => this.updateNewCatDetails(e)}>
          <option selected disabled>Is Compleated?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="submit" />
        <p>{this.state.newTask.name}</p>
      </form>
      </div>
    )
  }
}
