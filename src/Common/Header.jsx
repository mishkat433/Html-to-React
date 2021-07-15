import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Link,NavLink,Route} from 'react-router-dom'
import About from '../Components/About';
import Blog from '../Components/Blog';
import Gallery from '../Components/Gallery';
import Home from '../Components/Home'
import Services from '../Components/Services';
import Skills from '../Components/Skills';


 class Header extends Component {
    render() {
        return (
          <Router>
            <div>
            <section id="top-bar">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <div class="top-left">
                        <a href="mailto:mishkat433@gmail.com"><i class="far fa-envelope"></i>mishkat433@gmail.com</a>
                    <a href="tel:01829169870"><i class="fas fa-phone-alt"></i>01829169870</a>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <div class="top-right">
                        <a href="https://facebook.com/MdMishkat"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.google.com/"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.google.com/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.google.com/"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.google.com/"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

                 <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 ">
                    <nav class="navbar navbar-expand-lg  logo-part ">
                        <Link  class="navbar-brand" to="/" ><img src="images/mishkat-logo-5.png" alt="logo not found"></img></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"><i class="fas fa-angle-down"></i></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                          <div class="navbar-nav options">
                            <NavLink exact activeStyle={{color: "#7f18ce"}} className="nav-item nav-link" to ="/">home</NavLink>
                            <NavLink activeStyle={{color:"#7f18ce"}} className="nav-item nav-link" to="/about">about</NavLink>
                            <NavLink activeStyle={{color:"#7f18ce"}} className="nav-item nav-link" to="/services">services</NavLink>
                            <NavLink activeStyle={{color: "#7f18ce"}} className="nav-item nav-link " to="/skills">skills</NavLink>
                            <NavLink activeStyle={{color: "#7f18ce"}} className="nav-item nav-link " to="/gallery">gallery</NavLink>
                            <NavLink activeStyle={{color: "#7f18ce"}} className="nav-item nav-link " to="/blog">blog</NavLink>
                            
                          </div>
                        </div>
                      </nav>
                </div>
                </div>
              </div>
              </header>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/skills" component={Skills}/>
                <Route  path="/services" component={Services}/>
                <Route  path="/gallery" component={Gallery}/>
                <Route  path="/blog" component={Blog}/>
                
              </Switch>
          </div>
  </Router>
        )
    }
}
export default Header;