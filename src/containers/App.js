import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Header from '../components/Header';
import ImageList from '../components/ImageList';
import SearchBox from '../components/SearchBox';
import { courses } from '../courses';

class App extends Component {
  constructor() {
    super()
    this.state = {
      courses: courses,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredCourses = this.state.courses.filter(courses => {
      return courses.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div>
        <Header />
        <ImageList />
        <SearchBox searchChange={this.onSearchChange} />
        <CardList courses={filteredCourses} />
      </div >
    );
  }
}
export default App;
