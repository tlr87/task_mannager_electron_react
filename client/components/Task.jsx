import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'
import { browserHistory } from 'react-router'


export default class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: {}
    }
    this.submit = this.submit.bind(this)
    this.updateNewDetails = this.updateNewDetails.bind(this)
  }
  updateNewDetails(e) {
    let newTask = this.state.newTask
    newTask[e.target.name] = e.target.value
    //do something
    this.setState({newTask: newTask})
  }
  submit(e) {
    e.preventDefault()
    console.log(this.state.newTask);
    request
      .post('http://localhost:3000/v1/tasks/')
      .send(this.state.newTask)
      .end((err, res) => {
        console.log(err, res);
        this.props.history.push('/')
    })
  }
  render() {
    return (
      <div className="New-Task Component">
    <h2> Make a New task </h2>
      <form onSubmit={this.submit}>
        <input name="Project_Name" placeholder="Project Name" type="text" onChange={(e) => this.updateNewDetails(e)}/>
        <input name="Task" placeholder="Task" type="text" onChange={(e) => this.updateNewDetails(e)}/>
        <input name="Priority" placeholder="Priority" type="text" onChange={(e) => this.updateNewDetails(e)}/>
        <select name="Colour" onChange={(e) => this.updateNewDetails(e)}>
            <option selected disabled>Colour</option>
            <option value={"blue"}>Blue</option>
            <option value={"yellow"}>Yellow</option>
            <option value={"green"}>Green</option>
            <option value={"red"}>Red</option>
            <option value={"deepskyblue"}>Deep Sky Blue</option>
            <option value={"orangered"}>Orange</option>
            <option value={"lime"}>Lime</option>
            <option value={"salmon"}>Salmon</option>
        </select>
        <input name="Details" placeholder="Details" type="text" onChange={(e) => this.updateNewDetails(e)}/>
        <select name="Compleated" onChange={(e) => this.updateNewDetails(e)}>
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
