import React, { Component } from 'react'

export default class Sidebar extends Component {
	  render() {
		      return (
			            <div>
			              <div>
			                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
			                <aside id="colorlib-aside" className="border js-fullheight">
			                  <div className="text-center">
			                    <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
			                    <h1 id="colorlib-logo"><a href="index.html">Miles Kramer</a></h1>
			                    <span className="email"><i className="icon-mail"></i>milesbuckkramer@gmail.com</span>
			                  </div>
			                  <nav id="colorlib-main-menu" role="navigation" className="navbar">
			                    <div id="navbar" className="collapse">
			                      <ul>
			                        <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
			                        <li><a href="#about" data-nav-section="About">About</a></li>
			                        {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
							                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
			                        <li><a href="#timeline" data-nav-section="timeline">Jobs</a></li>
			                      </ul>
			                    </div>
			                  </nav>
			                  <nav id="colorlib-main-menu">
			                    <ul>
			                      <li><a href="https://youtube.com/shorts/f2l-sG5Y_WM?feature=share" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a></li>
			                      <li><a href="https://github.com/kramermiles" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></li>
			                      <li><a href="https://pin.it/3xnjsUm" target="_blank" rel="noopener noreferrer"><i className="icon-pinterest" /></a></li>
			                      <li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7FhEu7hMA9Bp8UY4xg8inSGuBKTlpvAkbg&usqp=CAU" target="_blank" rel="noopener noreferrer"><i className="icon-roblox" /></a></li>
			                    </ul>
			                  </nav>
			                  <div className="colorlib-footer">
			                    <p><small>
			                        Made with <i className="icon-heart" aria-hidden="true" /><i className="icon-sleep" aria-hidden="true"></i><br></br>
			                         <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"></a> 
			                    </small></p>
			                    <p><small>
			    
			                    </small></p>
			                  </div>
			                </aside>
			              </div>
			            </div>
			          )
		    }
}
