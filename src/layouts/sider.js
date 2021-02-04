import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaDesktop, FaDollarSign, FaDollyFlatbed, FaStore } from 'react-icons/fa';

const routeMenu = [
    {
        label: 'Overview',
        path: '/',
        icon: <FaDesktop />
    },
    {
        label: 'Penjualan',
        path: '#',
        icon: <FaDollarSign />
    },
    {
        label: 'Pesanan',
        path: '#',
        icon: <FaDollyFlatbed />
    },
    {
        label: 'Marketplace',
        path: '#',
        icon: <FaStore />
    }
]

export default function(props){
    return(
        <div className="sider">
            <div className="nav">
                <button className="btn btn-secondary" onClick={props.handleCollapse}>
                    {props.collapse ? <FaAngleRight /> : <FaAngleLeft />}
                </button>
                <ul className="nav-ul">
                    {routeMenu.map((item, key) => <Link to={item.path} key={key}><li className={`list-item ${window.location.pathname.startsWith(item.path) ? "active-item" : null}`}><span className="btn-icon">{item.icon}</span><span style={{display: props.collapse ? "none" : "inline-block"}}>{item.label}</span></li></Link> )}
                </ul>
            </div>
        </div>
    );
}