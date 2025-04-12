import React, { Component } from "react";
import ComplexHeader from './header/ComplexHeader';
import { Routes, Route } from 'react-router-dom';

import Attraction from "./attraction/attraction";

import MainResponsiveLayout from "./main-responsive-layout/MainResponsiveLayout";
import './CMSRoute.scss';
import PageNotFound from './components/PageNotFound'

const CMSRoute = () => {
    const Mega_Menu = [
        { id: 1, name: 'Home', url: '/cms/home' },
        { id: 2, name: 'Attraction', url: '/cms/attraction' },
        { id: 3, name: 'Facility', url: '/cms/facility' }
    ]
    

    return (

        <div>
            {/* <ComplexHeader /> */}
            <div className='complex-main-route-section1'>
                {/* <nav className='tab-list'>
                    <ul className="cms-meganav-section">
                       {
                        Mega_Menu.map((link)=>(
                            <li key={link.id} className="meganav-sublist">
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}                      

                    </ul>                    
                </nav> */}
                <div className='tab-list'>
                    {/* <div className='link-button'><a href='/cms/home'>Home</a></div>
                    <div className='link-button'><a href='/cms/attraction'>Attraction</a></div>
                    <div className='link-button'> <a href='/cms/facility'>Facility</a></div> */}
                </div>

            </div>

            <Routes>
                <Route path="*" element={<MainResponsiveLayout />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
                {/* <Route path="/cms/home" element={<Home />} />
                <Route path="/cms/attraction" element={<Attraction />} />
                <Route path="/cms/facility" element={<Facility />} /> */}
            </Routes>
        </div>
    )
}

export default CMSRoute;