import React, { Component } from 'react'
import Bred from './Bred'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Bred name="Gallery"/>
    <section id="creative">
        <div class="container">
            <div class="row section-title ptb">
                <div class="col-lg-6 end">
                    <span>who we are?</span>
                    <h4>creative team</h4>
                </div>
                <div class="col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe cupiditate eligendi eius 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="single-card">
                        <img name="laksf" src="images/navy-floral-men-s-casual-fashion.png" alt="image not found" />
                        <div class="upper">
                            <h4>jone done</h4>
                            <span>web developer</span>
                            <div class="upper-icon">
                                <a href="https://www.facebook.com/Md Mishkat"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>                 
                </div>
                <div class="col-lg-4">
                    <div class="single-card">
                        <img src="images/sumit-kapoor.png" alt="image not found"/>
                        <div class="upper">
                            <h4>mark smith</h4>
                            <span>web designer</span>
                            <div class="upper-icon">
                                <a href="https://www.facebook.com/Md Mishkat" target="blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.google.com/"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.google.com/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.google.com/"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="single-card">
                        <img src="images/young-woman-in-sunglasses-with-rings.png" alt="image not found" />
                        <div class="upper">
                            <h4>benqula</h4>
                            <span>programer</span>
                            <div class="upper-icon">
                                <a href="https://www.facebook.com/Md Mishkat"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.google.com/"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.google.com/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.google.com/"><i class="fab fa-youtube"></i></a>        
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
