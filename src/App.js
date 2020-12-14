import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import classes from './App.module.css';
import { CSSTransition } from 'react-transition-group';


export default class App extends Component {

  render() {

    return (
      <>
        <div className={classes.container}>
          <CSSTransition
            in={true}
            classNames="logo"
            timeout={250}
            appear={true}
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
          <h2>Contacts</h2>

          <Filter />

          <ContactList />
          {/* <CSSTransition
            in={isVisible}
            timeout={250}
            unmountOnExit
            classNames="answer"
          >
            <AnswerError answer={answer} />
          </CSSTransition> */}
        </div>
      </>
    );
  }
}
