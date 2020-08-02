import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style/transition.css';

// Container
import ItemContainer from './containers/Item-container';
import NavbarContainer from './containers/Navbar-container';
import CheckoutContainer from './containers/Checkout-container';
import CartContainer from './containers/Cart-container';
import HomepageContainer from './containers/Homepage-container';
import ItemsListContainer from './containers/Items-list-container';
import AdminContainer from './containers/Admin-container';

// Components
import Footer from './components/SF/Footer';
import Empty from './components/Empty';
import ItemsListGenderHomepage from './components/Item/Items-list-gender-homepage';
import Secret from './components/Secret';
import Login from './auth/Login';

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/productslist" component={ItemsListContainer} />
      <Route exact path="/item/:id/:item" component={ItemContainer} />
      <Route exact path="/checkout" component={CheckoutContainer} />
      <Route exact path="/cart" component={CartContainer} />
      <Route
        exact
        path="/productslist/:gender"
        component={ItemsListContainer}
      />
      <Route
        exact
        path="/category/:gender"
        component={ItemsListGenderHomepage}
      />
      <Route exact path="/admin" component={AdminContainer} />
      <Route exact path="/dashboard" component={Secret} />
      <Route exact path="/login" component={Login} />
      <Route component={Empty} />
    </Switch>
    <Footer />
  </div>
);

export default App;
