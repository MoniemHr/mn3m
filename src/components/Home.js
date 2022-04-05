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
                        <p className='Ptext'>We worked to provide the best innovative perfumes that suit all tastes and different cultures, by continuing to develop our perfumes and inventing what is new and distinctive.
                            We rely on high credibility and a continuous study to understand the market needs, through qualified and trained cadres, to reach an advanced position in foreign markets and to compete in different perfume markets.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 text-center mt-3">
                        <img className='LogoHeader' src='../../MoniemHr/mn3m.git/assesst/Logo.png' />
                    </div>
                </div>
            </div>
            <div className="row SecondSections">
                <div className="col-xs-12 col-md-12 WhoContainer">
                    <h1 className="whotitle"> Who are we ?</h1>
                    <p className="TextWho">It is one of the leading companies in the field of perfumes since the beginning of the twentieth century
                        At the end of 2009, Aroma Best Perfume started its activity in the Lebanese market, and in 2015 it started its activity in a ready-made perfume filling factory in Sudan,
                        And follow-up to its path of expansion outside the Arab markets
                        In 2022, it started its activity in the Turkish market to meet market demands, and to be present in the global perfume markets.</p>
                </div>
                <div className="col-xs-12 col-md-12 text-center">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                        <img className='WhoImg' src='../../MoniemHr/mn3m.git/assesst/matrial11.jpg' />
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-8">
                        <img className='WhoImg2' src='../../MoniemHr/mn3m.git/assesst/perfumesizes.jpg' />
                        </div>
                    </div>
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
                        <h1 className='Product1Ttile'>Perfume Glass</h1>
                        <h4 className='Product1Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices congue pellentesque tristique amet, aenean. In aenean eleifend donec odio. Lobortis ac in in amet rutrum id. Hac eget pellentesque odio aenean id tortor lorem senectus. Diam, orci, aliquet id condimentum quisque fermentum malesuada. Diam augue potenti id neque augue vel in. Id convallis cum mi volutpat vel augue. Urna, a velit nec nulla. Ac consectetur mauris nullam tincidunt libero leo eget pulvinar pharetra.</h4>
                    </div>
                </div>

            </div>

          
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                        
                            <img src="../../MoniemHr/mn3m.git/assesst/perfumem1.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../MoniemHr/mn3m.git/assesst/perfumem2.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../MoniemHr/mn3m.git/assesst/perfumem3.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
           
            <div className="OurVision text-center">
                <h1 className='FollowTitle'>Our specialty</h1>

                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <h3 className='OurSpecialtyP'>Aroma Best Perfume has started selling essential oils and empty perfume glass, and after many years of experience gained,
                            They started packing their own ready-made perfume.
                            The company has also expanded its business by starting to manufacture and supply body and skin care materials</h3>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-6">
                        <img className='OurMissionImg' src='../../MoniemHr/mn3m.git/assesst/OurMission.png' />
                    </div>

                </div>
            </div>






        </div>
    )
}

export default Home