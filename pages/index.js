/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import c from 'cassowary';

export default class extends Component {


  render() {

    //a = sweetness, b = fatContent
    let database = {
      milk: {a: 0, b: 0.037},
      cream: {a: 0, b: 0.40},
      sucrose: {a: 1, b: 0},
      eggYolk: { a: 0, b: 0.33}
    };

    // Create the simplex solver
    var solver = new c.SimplexSolver();

    // Declare variables
    var x = new c.Variable({ value: 3 });
    var y = new c.Variable({ value: 3 });
   
    console.log(x.value === y.value);
    console.log(c.times(x.value, y.value));

    
    return (
      <div>
        <h1>Jonny Shakes...</h1>
        <p>Coming soon.</p>
      </div>
    );
  }

}





