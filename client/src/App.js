
import React, { Component } from 'react'
import Offices from './Offices';
import './App.css';
import $ from 'jquery';

export default class App extends Component {

  componentDidMount(){
     
       $("a").on("click",function(event){
                event.preventDefault();
                var target = $(this).data("target");
                $('html,body').animate({scrollTop: $(target).offset().top - 150},'slow');
       });
  
  }

  render() {

    return (
      <>
        <header>
            <div id="nav">
                <a class="link" data-target="#properties">Properties</a>
                <a class="link" data-target="#about-tell">About Us</a>
                <a class="link" id="logo"></a>
                <a class="link" data-target="#careers-tell">Career</a>
                <a class="link" data-target="#contact-us">Contact Us</a>
            </div>
            <div class="colors">
               <div id="color-1" class="color"></div>
               <div id="color-2" class="color"></div>
               <div id="color-3" class="color"></div>
               <div id="color-4" class="color"></div>
            </div>
        </header>
        <section id="body-logo">
            <img src="/images/slider.jpg" />
        </section>
        <section id="properties">
             <div id="name">Our Properties</div>
             <div class="underline blue"></div>
             <div id="p-desc">
                Here at Tell, we believe in producing high-quality, engaging content for a wide variety of topics. Whether you’re looking for the latest in luxury watches, the chicest interior design trends, or the secrets to wealth management - we have it all.
             </div>
             <div id="p-images">
                  <div class="p-row">
                      <img src="/images/prop-1.jpg" />
                      <img src="/images/prop-2.jpg" />
                      <img src="/images/prop-3.jpg" />
                  </div>
                  <div class="p-row">
                      <img src="/images/prop-4.jpg" />
                      <img src="/images/prop-5.jpg" />
                      <img src="/images/prop-6.jpg" />
                  </div>
                  <div class="p-row">
                      <img src="/images/prop-7.jpg" />
                      <img src="/images/prop-8.jpg" />
                      <img src="/images/prop-9.jpg" />
                  </div>
             </div>
        </section>
        <div class="seperation"></div>
        <section id="about-tell">
           <div id="about-name">About Tell</div>
           <div class="underline red"></div>
           <div id="about-img"></div>
           <div id="about-content1">
              Not only do we pride ourselves in keeping up-to-date with the latest happenings, it is also our policy to deliver this information to the masses in a way that’s easy to understand. No more struggling to understand finance articles or scouring the internet searching for the best kept travel secrets.
           </div>
           <div id="about-content2">
              In a nutshell, Tell is an umbrella publication. And under this broad umbrella we have made it our goal to provide content that caters to a vast range of readers.
           </div>
        </section>
        <div class="seperation"></div>
        <section id="careers-tell">
            <section id="career-name">Careers At Tell</section>
            <div class="underline orange"></div>
            <div class="content">
                Not only do we pride ourselves in keeping up-to-date with the latest happenings, it is also our policy to deliver this information to the masses in a way that’s easy to understand. No more struggling to understand finance articles or scouring the internet searching for the best kept travel secrets.
            </div>
            <div class="content">
                In a nutshell, Tell is an umbrella publication. And under this broad umbrella we have made it our goal to provide content that caters to a vast range of readers.
            </div>
            <div id="c-images">
                  <div class="c-row">
                      <div class="icon-wrapper">
                           <div class="icon-text week"></div>
                           <div class="icon-name week-text">Five-day work week</div>
                      </div>
                      <div class="icon-wrapper">
                           <div class="icon-text medical"></div>
                           <div class="icon-name medical-text">Medical & dental insurance</div>
                      </div>
                      <div class="icon-wrapper">
                           <div class="icon-text job"></div>
                           <div class="icon-name job-text">On-job training</div>
                      </div>
                  </div>
                  <div class="c-row">
                      <div class="icon-wrapper">
                           <div class="icon-text maternity"></div>
                           <div class="icon-name maternity-text">Maternity / Paternity leave</div>
                      </div>
                      <div class="icon-wrapper">
                           <div class="icon-text comp"></div>
                           <div class="icon-name comp-text">Competitive compensation & packages</div>
                      </div>
                      <div class="icon-wrapper">
                           <div class="icon-text causal"></div>
                           <div class="icon-name causal-text">Casual dress code</div>
                      </div>
                  </div>
                  
             </div>
        </section>
        <div class="seperation"></div>
        <section id ="contact-us">
                <div id="contact-name">Contact Us</div>
                <div class="underline green"></div>
                <div class="contact-wrapper">
                    <Offices/>
                </div>
        </section>
        <div class="seperation footer"></div>
        <section id="footer">
             <div id="footer-icon"></div>
             <div id="footer-content">© 2020 tell.com. All Rights Reserved.</div>
        </section>  
      </>
    )
  }
}
