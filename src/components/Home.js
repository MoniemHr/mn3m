import React from 'react'
import Card from './Card'

import Data from './Apidata'
const Home = () => {
    return (
        <div>
            <div className="homeContainer ">
                <div className="row ">
                    <div className="col-xs-12 col-sm-6 HeaderText ">
                        <h3 className='WelcomeSen'>Welcome</h3>
                        <h1 className='CompanyTitle'>Aroma Best <span> Perfume </span> </h1>
                        <p className='Ptext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, pellentesque convallis venenatis tincidunt etiam elit, ut. Morbi turpis vulputate tortor id nibh tristique diam. Massa sit malesuada mattis gravida amet egestas erat. Sed mi vestibulum varius sit. Elementum ultrices ut phasellus dui ac nisl. Ornare nec vestibulum porta ipsum. Eget gravida quis cras quam enim viverra lorem dui.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 text-center mt-3">
                        <img className='LogoHeader' src='../../MoniemHr/mn3m.git/assesst/Logo.png' />
                    </div>
                </div>
            </div>
            <div className="row SecondSections">
                <div className="col-xs-12 col-md-6 WhoContainer">
                    <h1 className="whotitle"> Who are we ?</h1>
                    <p className="TextWho">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet imperdiet ante blandit tempus, malesuada vestibulum. Turpis sodales et sit id neque. Adipiscing iaculis libero pretium, orci quis consectetur convallis. Mauris a purus pretium morbi amet. Libero ipsum at scelerisque nibh gravida duis sociis massa. Fames eget nulla donec cras tristique sit lacinia. Ac fusce cursus lacus malesuada ac. Et placerat a, porta sed lectus malesuada.</p>
                </div>
                <div className="col-xs-12 col-md-6 text-center">
                    <img className='WhoImg' src='../../MoniemHr/mn3m.git/assesst/img1.jpg' />
                </div>
            </div>


            <div className="ProductsContainer">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <h1 className='Product1Ttile'>Perfume Oil</h1>
                        <h4 className='Product1Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices congue pellentesque tristique amet, aenean. In aenean eleifend donec odio. Lobortis ac in in amet rutrum id. Hac eget pellentesque odio aenean id tortor lorem senectus. Diam, orci, aliquet id condimentum quisque fermentum malesuada. Diam augue potenti id neque augue vel in. Id convallis cum mi volutpat vel augue. Urna, a velit nec nulla. Ac consectetur mauris nullam tincidunt libero leo eget pulvinar pharetra.</h4>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <img className='ProductImg1' src='../../MoniemHr/mn3m.git/assesst/Product1Home.svg' />
                    </div>
                </div>
                </div>
                <div className="ProductsContainer">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <img className='ProductImg1' src='../../MoniemHr/mn3m.git/assesst/Product1Home.svg' />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <h1 className='Product1Ttile'>Perfume Oil</h1>
                            <h4 className='Product1Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices congue pellentesque tristique amet, aenean. In aenean eleifend donec odio. Lobortis ac in in amet rutrum id. Hac eget pellentesque odio aenean id tortor lorem senectus. Diam, orci, aliquet id condimentum quisque fermentum malesuada. Diam augue potenti id neque augue vel in. Id convallis cum mi volutpat vel augue. Urna, a velit nec nulla. Ac consectetur mauris nullam tincidunt libero leo eget pulvinar pharetra.</h4>
                        </div>
                    </div>

                </div>

                <div className="ProductsCardContainer">
                    <div className="row">
                        {Data.map((values)=>{
                            return(
                                <>
                                <Card/>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="FollowContainer text-center">
                    <h1 className='FollowTitle'>Follow Us On Social Media</h1>
                    <div className="row">
                        <div className="col-xm-12 col-sm-6 col-md-4 socialDiv">
                            Facebook
                        </div>
                        <div className="col-xm-12 col-sm-6 col-md-4 socialDiv">
                            instagram
                        </div>
                        <div className="col-xm-12 col-sm-6 col-md-4 socialDiv">
                            Facebook
                        </div>
                        <div className="col-xm-12 col-sm-6 col-md-4 socialDiv">
                            instagram
                        </div>
                    
                    </div>
                </div>

           




        </div>
    )
}

export default Home