import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg'></img>
            </div>
            <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return (
        <div className='res-card'>
            <img  className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/195876a3181ef63f76e45e3a7b49b585'></img>
            <h3>Megana foods</h3>
            <h4>Biriyani</h4>
            <h4>4.4 stars</h4>
            <h4>30 miniuts</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className='body'>
            <div className='search'>search  </div>
            <div className='res-container'>
                <RestaurantCard/>
            </div>
        </div>
    )
}
const AppComponent = () =>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent/>);