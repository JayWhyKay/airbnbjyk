import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Spots from "./components/Spots";
import SpotByID from "./components/SpotByID";
import MyReviews from "./components/MyReviews";
import MyListings from "./components/MyListings";
import BookingConfirmation from "./components/BookingConfirmation";
import ManageBookingList from "./components/ManageBookingList";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path={["/", "/listings"]}>
          <Spots />
        </Route>
        <Route exact path="/listings/:id">
          <SpotByID />
        </Route>
        {/* <Route path='/users/:id/bookings'>
          <ManageBookingList />
        </Route> */}
        <Route path="/users/:id/listings">
          <MyListings />
        </Route>
        <Route path="/users/:id/reviews">
          <MyReviews />
        </Route>
        {/* <Route path='/spots/:spotId/bookings/:id'>
          <BookingConfirmation />
        </Route> */}
        <Route>Sorry resource not found. Please check url</Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
