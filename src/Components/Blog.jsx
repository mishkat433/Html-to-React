import React, { Component } from 'react'
import Bred from './Bred'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Bred name="Blog" />

    <section id="gallery" class="testomonial-area " style={{backgroundImage: "url(images/students-working-on-project.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="testomonials owl-carousel">
                    <div class="single-testomonial">
                        <img src="images/download.png" alt="images not found" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo, labore velit fugit consequatur temporibus magni laborum corporis voluptate doloribus.</p>
                        <h4>jone doe <span>web developer</span></h4>
                    </div>
                    <div class="single-testomonial">
                        <img src="images/sumit-kapoor.png" alt="images not found" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo, labore velit fugit consequatur temporibus magni laborum corporis voluptate doloribus.</p>
                        <h4>jone lee<span>web designer</span></h4>
                    </div>
                    <div class="single-testomonial">
                        <img src="images/young-woman-in-sunglasses-with-rings.png" alt="images not found" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo, labore velit fugit consequatur temporibus magni laborum corporis voluptate doloribus.</p>
                        <h4>algin alina<span>programer</span></h4>
                    </div>
                    <div class="single-testomonial">
                        <img src="images/one.jpg" alt="images not found" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo, labore velit fugit consequatur temporibus magni laborum corporis voluptate doloribus.</p>
                        <h4>mark snith <span>codder</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        )
    }
}
