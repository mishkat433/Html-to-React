import React, { Component } from 'react';
import Services from './Services'

export default class Bred extends Component {
    
    render() {
        return (
           <div>
                 <div class="bread-come">
        <div class="container">
            <div class=" text-center brad">
                <h1>{this.props.name}</h1>
                   <a href="alluseproject.html">home</a>
                   <a href="/about"> / about</a>
            </div>
        </div>
    </div>

           </div>
        )
    }
}
