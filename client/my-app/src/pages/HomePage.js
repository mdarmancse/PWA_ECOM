import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";

class HomePage extends Component {
    render() {
        return (
            <>
                <NavMenuDesktop/>
                <HomeTop/>
                <NewArrival/>
                <FeaturedProducts/>
                <Collection/>
                <Categories/>


            </>
        );
    }
}

export default HomePage;