import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <NavStyle>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link> </li>
            </ul>
        </NavStyle>
    )
}

const NavStyle = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 1000;
    @media (max-width: 1300px)
    {
        flex-direction: column;
        li{
            padding-left: 1px;
        }
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    ul{
        display: flex;
        list-style:none;
    }
    #logo{
        font-size:1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 5rem;
        position: relative;
    }
`

export default Nav
