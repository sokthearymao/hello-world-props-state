import React, { Component } from 'react';

// props
// class Welcome extends Component {
//     render() {
//     return <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
//     }
// }

// state
// class Welcome extends Component {
//     render() {
//     return <h1>Welcome {this.props.name} a.k.a {this.props.heroName} </h1>
//     }
// }

// destructuring props in class components
class Welcome extends Component {
    render() {
    const {name, heroName} = this.props
    //const  {state1, state2} = this.state
    return <h1>Welcome {name} a.k.a {heroName} </h1>
    }
}

export default Welcome