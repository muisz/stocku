import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Breadcrumb } from 'semantic-ui-react'

import Sider from './sider';

export default function(props){
    // states
    const [collapse, setCollapse] = useState(false);

    // others variable
    const trigger = (
        <span>
            <Icon name="user" /> Hello, Abdul Muis
        </span>
    )

    const options = [
        {
            key: 'profile',
            text: 'Profile',
            value: 'profile',
        },
        {
            key: 'help',
            text: 'Bantuan',
            value: 'help'
        },
        {
            key: 'settings',
            text: 'Pengaturan',
            value: 'settings'
        },
        {
            key: 'signout',
            text: 'Keluar',
            value: 'signout'
        }
    ]

    // event handling
    const handleCollapse = () => {
        setCollapse(!collapse);
    }

    const handleMenuOnChange = (e, s) => {
        console.log({e, s})
        console.log(s.value)
    }

    const handleBreadCrumbOnClick = (e, s) => {
        console.log({e, s});
    }

    // render
    const renderBreadCrumb = (breadcrumb) => {
        let bread = [];
        for(let i = 0; i < breadcrumb.length ; i++){
            let item = breadcrumb[i];
            if(i < breadcrumb.length - 1){
                bread.push(
                    <Breadcrumb.Section link key={i}>
                        <Link to={item.path}>{item.label}</Link>
                    </Breadcrumb.Section>
                )
                bread.push(<Breadcrumb.Divider icon="right chevron" />);
            } else {
                bread.push(
                    <Breadcrumb.Section key={i}>
                        {item.label}
                    </Breadcrumb.Section>
                )
            }
        };
        return(
            <Breadcrumb>
                {/* {bread.join(divider).split(divider)} */}
                {bread}
            </Breadcrumb>
        );
    }

    return(
        <div className="wrapper-layout" style={{
            gridTemplateColumns: collapse ? '75px auto' : '250px auto'
        }}>
            <Sider handleCollapse={handleCollapse} collapse={collapse} />
            <div className="main-page">
                <div className="main-headers">
                    <h2 style={{display: 'inline-block'}}>StockU</h2>
                    <div className="headers-tools">
                        <Dropdown trigger={trigger} options={options} onChange={handleMenuOnChange} />
                    </div>
                    {props.breadcrumb ? <div>{renderBreadCrumb(props.breadcrumb)}</div> : null}
                </div>
                <div style={{
                    marginTop: props.breadcrumb ? '2em' : '0'
                }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}