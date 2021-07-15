import React, { Component } from 'react'
import Bred from './Bred'

export default class Skills extends Component {
    render() {
        return (
            <div>

                <Bred name="Skills" />
    
    <section id="skill">
        <div class="back-img" style={{backgroundImage: "url(images/RW.jpg)"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 middle">
                        <h5 class="niche">Faq</h5>
                        <div class="accordien-skill">
                            <button class="acordion" data-target="#collapse-1" aria-expanded="true" data-toggle="collapse" >Lorem ipsum dolor sit</button>
                            <div class="collapse" id="collapse-1">
                                <p class="acor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, qui? In ratione eum laudantium tenetur odio. Odio cumque quod possimus nihil ut placeat, veritatis, facere perspiciatis sapiente esse vel quo eum a quisquam ea labore illum similique necessitatibus officiis. Debitis.</p>
                            </div>
                            <button class="acordion" data-target="#collapse-2" data-toggle="collapse" >Lorem ipsum dolor sit</button>
                            <div class="collapse" id="collapse-2">
                                    <p class="acor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, qui? In ratione eum laudantium tenetur odio. Odio cumque quod possimus nihil ut placeat, veritatis, facere perspiciatis sapiente esse vel quo eum a quisquam ea labore illum similique necessitatibus officiis. Debitis.</p>
                            </div>
                            <button class="acordion" data-target="#collapse-3" data-toggle="collapse" >Lorem ipsum dolor sit</button>
                            <div class="collapse" id="collapse-3">
                                    <p class="acor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, qui? In ratione eum laudantium tenetur odio. Odio cumque quod possimus nihil ut placeat, veritatis, facere perspiciatis sapiente esse vel quo eum a quisquam ea labore illum similique necessitatibus officiis. Debitis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 middle">
                        <h5 class="niche">Our skills</h5>
                        <div class="single-progress">
                            <h4>html</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                              </div>
                        </div>
                        <div class="single-progress">
                            <h4>css</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "82%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                              </div>
                        </div>
                        <div class="single-progress">
                            <h4>JavaScript</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                              </div>
                        </div>
                        <div class="single-progress">
                            <h4>React js</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                              </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        )
    }
}
