import React, { Component } from 'react';




class Film extends Component {
  constructor(props){
    super(props)
    this.state = {
      results:[],
      backdrop: '',
      title: ''
    }
  }

  componentDidMount(){
    // ttps://api.themoviedb.org/3/search/movie?api_key=process.env.API_KEYed&language=en-US&page=1&include_adult=false
    fetch("https://api.themoviedb.org/3/search/movie?api_key=&query=ghostbusters&language=en-US&page=1&include_adult=false")
    .then(res => res.json())
    .then(d => {
      console.log("d",d.results)
      (this.setState({results: d.results, backdrop: d.backdrop_path, title: d.title}))
    })
  }
  
  render(){
    return (
      <div>
       <span>
       
       </span>
        </div>
    )
  }
}

export default Film;