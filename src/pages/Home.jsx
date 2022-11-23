import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { motion } from 'framer-motion';
import { Col, Container, Row } from 'reactstrap';

// import data
import productsData from '../assets/data/products';

//import images
import counterImg from '../assets/images/counter-timer-img.png';
// import heroImg from '../assets/images/hero-img.png';
import heroImg from '../assets/images/heroImg.png';

//import UI
import Clock from '../components/UI/Clock';
import ProductsList from '../components/UI/ProductsList';
import Services from '../services/Services';

const Home = () => {


  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = productsData.filter((item) => item.category === 'chair')

    const filteredBestSalesProducts = productsData.filter((item) => item.category === 'sofa')

    const filteredMobileProducts = productsData.filter((item) => item.category === 'mobile')

    const filteredWirelessProducts = productsData.filter((item) => item.category === 'wireless')

    const filteredPopularProducts = productsData.filter((item) => item.category === 'watch')

    
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  }, [])

  return (
    <Helmet title={'Home'}> 
    <section className="hero__section">
      <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className="hero__content">
          <p className="hero__subtitle">Trending product in {year}</p>
          <h2>Make Your Interior More Minimalistic & Modern</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus sunt a quae, aspernatur eveniet eos in quisquam minima cupiditate?</p>
          <motion.button whileTap={{scale : 1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
        </div>
      </Col>

      <Col lg='6' md='6'>
        <div className="hero__img">
          <img src={heroImg} alt="hero" />
        </div>

      </Col>
    </Row>
      </Container>
    </section>

    <Services />

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Trending Products</h2>
          </Col>
          <ProductsList products={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best__sales">
    <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Best Sales</h2>
          </Col>

          <ProductsList products={bestSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>

            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
              <h3 className='text-white fs-5 mb-2'>Quality Armchair</h3>
            </div>

            <Clock />

            <motion.button whileTap={{scale : 1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>

          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt="timer-img" />
          </Col>
        </Row>

      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">New Arrivals</h2>
          </Col>

          <ProductsList products={mobileProducts} />
          <ProductsList products={wirelessProducts} />

        </Row>
      </Container>
    </section>

    <section className="popular__category">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title">Popular in Category</h2>
          </Col>

          <ProductsList products={popularProducts} />

        </Row>
      </Container>
    </section>

    </Helmet>
  )
}

export default Home