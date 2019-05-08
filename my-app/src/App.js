import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,  } from 'fundamental-react/lib/Button';
import { Alert } from 'fundamental-react';
import { Icon } from 'fundamental-react';
import { SideNav } from 'fundamental-react/lib/SideNavigation';
import { ActionBar } from 'fundamental-react/lib/ActionBar';

function App() {
  return (
    <div>
      <div className="left">
        <SideNav selectedId="item-2">
          <SideNav.List>
            <SideNav.ListItem
              id="item-1"
              name="Link Item"
              url="#"
            />
            <SideNav.ListItem
              id="item-2"
              name="Link Item"
              url="#"
            />
            <SideNav.ListItem
              id="item-3"
              name="Link Item"
              url="#"
            />
            <SideNav.ListItem
              id="item-4"
              name="Link Item"
              url="#"
            />
            <SideNav.ListItem
              id="item-5"
              name="Link Item"
              url="#"
            />
          </SideNav.List>
        </SideNav>
      </div>
      <div className="App">
        <ActionBar>
          <ActionBar.Back onClick={function w(){}} />
          <ActionBar.Header
            className="App-Bar"
            description="Action Bar Description"
            title="Page Title"
          />
          <ActionBar.Actions>
            <Button>
              Button
            </Button>
            <Button option="emphasized">
              Button
            </Button>
          </ActionBar.Actions>
        </ActionBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button
            onClick={function w(){}}
          >
            Button
          </Button>
          <Alert
            dismissible
            type="success"
          >
            <Icon glyph="message-success" />
            Welcome to Fundamentals. 
            <Button option="light" className="fd-link" href="#" >
              Learn More
            </Button>
          </Alert>
        </header>
      </div>
    </div>
  );
}

export default App;
