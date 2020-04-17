import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer"
import Menu from "./components/Menu"
export default class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data:json
        })
        console.log(this.state.data)
      });
  }

  render() {
    return (
      <>
        <Header />
        <Menu />
        <Footer />
        {/* <Switch>
          <Route path="/test-component1" render={() => <Test />} />
          <Route path="/todo-list" render={() => <TodoList />} />
        </Switch> */}
      </>
    );
  }
}
