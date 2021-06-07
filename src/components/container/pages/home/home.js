import React, { useRef } from 'react'
import Header from '../../../layout/header/header'
import Slider from "react-slick";
import './home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const Home = () => {
    const sliderRef= useRef();
    const sliderRef2=useRef();
     const gotoNext = () => {
        sliderRef.current.slickNext();
    }
      const previous=()=> {
        sliderRef.current.slickPrev();
      }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className="container-fluid" style={{ background: '#f2f2f2' }}>
            <div className="row">
                <Header />
                <div className="col-md-10 col-sm-12 col-xs-12 ml-auto mr-auto " style={{marginTop:'5rem'}} >
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" style={{ border: '2px solid #515244', borderRadius: '10px' }}>
                            <div className="carousel-item active">
                            <img src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-school-season-back-to-school-cartoon-poster-background-student-image_13753.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="display-4">Hello, world!</h1>
                                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-school-season-back-to-school-season-blue-cartoon-image_11842.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className="display-4">First Slide</h2>
                                    <p className="lead">This is a description for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-welcome-new-students-blackboard-hand-painted-image_12937.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className="display-4">First Slide</h2>
                                    <p className="lead">This is a description for the first slide.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12 col-xs-12 mr-auto ml-auto mt-4 mb-4 "  >
                    <div className="row m-auto" >
                        <div className='col-md-12 col-sm-12 col-lg-12 col-xs-12  ' style={{ background: '#fff', borderRadius: '5px' }}>
                            <div className='row'>
                                <div className="col-5 col-sm-6">
                                    <label className="col-form-label col-form-label-lg"> All COURSE</label>
                                </div>
                                <div className="col-7 col-sm-6 mt-2 mb-2 " style={{ textAlign: 'right' }}>
                                    <p className="display-5 mr-4" style={{ display: 'inline' }}>See All</p>
                                    <Link  to="#" onClick={previous} className="btn btn-primary  btn-circle mr-2"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
                                    <Link  to="#" onClick={gotoNext} className="btn btn-primary  btn-circle"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-10 col-sm-12 col-xs-12 mr-auto ml-auto mb-4" >
                    <div className="row m-0">
                        <Slider {...settings} ref={sliderRef}>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.This is a description for the first slideThis is a description for the first slide</p>
                                        <button className="btn btn-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                            <div className="card">
                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                <div className="card-body">
                                    <h4 className="card-title">Special title treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                </div>
                            </div>
                            </div>
                        </Slider>
                    </div>
                </div>


                 <div className="col-md-10 col-sm-12 col-xs-12 mr-auto ml-auto mt-4 mb-4 "  >
                    <div className="row m-auto" >
                        <div className='col-md-12 col-sm-12 col-lg-12 col-xs-12 ' style={{ background: '#fff', borderRadius: '5px' }}>
                            <div className='row'>
                                <div className="col-5 col-sm-6">
                                    <label className="col-form-label col-form-label-lg"> All COURSE</label>
                                </div>
                                <div className="col-7 col-sm-6 mt-2 mb-2 " style={{ textAlign: 'right' }}>
                                    <p className="display-5 mr-4" style={{ display: 'inline' }}>See All</p>
                                    <Link  to="#" onClick={()=>{sliderRef2.current.slickPrev();}} className="btn btn-primary  btn-circle mr-2"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
                                    <Link  to="#"  onClick={()=>{sliderRef2.current.slickNext();}} className="btn btn-primary  btn-circle"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-10 col-sm-12 col-xs-12 mr-auto ml-auto mb-4" >
                    <div className="row m-0">
                        <Slider {...settings} ref={sliderRef2}>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12'>
                            <div className="card">
                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" />
                                <div className="card-body">
                                    <h4 className="card-title">Special title treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                </div>
                            </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Home;