import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
import ProductsContainers from './containers/ProductsContainers';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainers />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;