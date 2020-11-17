import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import ContactsList from "./components/contacts-list/contacts-list.component";
import { Configuration } from "./configuration";
import { setContactsList } from "./redux/contacts-list/contacts-list.actions";

function App({ setContactsList }) {
  useEffect(() => {
    let fetchData = async () => {
      let contacts = await fetch(Configuration.API_URL).then((res) => {
        return res.json();
      });

      setContactsList(contacts);
    };

    fetchData();
  }, [setContactsList]);

  return (
    <div className="App">
      <ContactsList />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setContactsList: (contacts) => dispatch(setContactsList(contacts)),
});

export default connect(null, mapDispatchToProps)(App);
