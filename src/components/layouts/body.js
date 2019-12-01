import React, { Component } from 'react'
import showcase from '../layouts/banner.jpg';

export default function Body() {
        return (
    <div className="main-wrapper">
    <section className = "banner" style = {{ backgroundImage: `url(${showcase})` }}> 

    <div class="banner-text" >
    <h1>WELCOME TO FORTUNE MEDIA, WE GIVE YOU THE BEST WEBSITE</h1>
 
     <h2> WE GIVE YOU LATEST GIST AROUND THE WORLD OF TECHNOLOGY AND OUR SERVICES ARE AMAZING</h2>
</div>

</section>
            <div className="show-text"> <h3>our services</h3></div>
           <section class="tabs">
            <div class="grid">  
            <div class="border-tab tabItem"><i class="">tech</i> </div>
            <div class=" tabItem"><i class="">fashion </i></div>
            <div class="tabItem"><i class=""> Business</i></div>
            </div>
            </section>

            <section class="tab-content">
            <div>
            
            <div id="tab-1-content" class="tab-content-item  show">
            <div class="tab-1-content-inner"> 
                <div>
                    <p class="text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                         repellendus rerum tempora vel cupiditate quibusdam voluptas nihil
                    </p>
                    <a href="" class="btn"> attend this program ></a>
                </div>
                <img src="../images/meetup1.jpeg" alt=""></img>
            
            </div>
            </div>
           

           <div id="tab-2-content" class="tab-content-item">
           <div class="tab-2-content-inner"> 
               <div>
                   <p class="text-lg">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                        repellendus rerum tempora vel cupiditate quibusdam voluptas nihil
                   </p><br/>
                   <a href="" class="btn"> attend this program ></a>
               </div>
               <div><img src="../images/meetup1.jpeg" alt=""></img>
               </div>
               </div>
               <br/>
               </div>
               <div id="tab-3-content" class="tab-content-item">
               <div class="tab-3-content-inner"> 
                   <div>
                       <p class="text-lg">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                            repellendus rerum tempora vel cupiditate quibusdam voluptas nihil
                       </p><br/>
                       <a href="" class="btn"> attend this program ></a>
                   </div>
       <img src="../images/meetup1.jpeg" alt=""> </img>
               </div>
           </div>
           </div>
        </section>
        </div>
        
)
}
