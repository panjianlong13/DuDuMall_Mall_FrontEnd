import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import "antd/dist/antd.css";
require('./index.scss');

const loading = function () {
  return <div id="root"><div className="loader-wrapper"><div className="loader"></div></div></div>;
}

const HomePage = Loadable({ loader: () => import('./page/homePage'), loading });

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
    }
    //this.isAuthenrized = !!cookie.load('userid')
  }

  componentDidMount() {
  }

//   getPage(props, page) {
//     return this.isAuthenrized ?
//       React.createElement(page, props) :
//       <Redirect to={{
//         pathname: "/login",
//         state: Object.assign({ redirectTo: props.location.pathname }, window.history.state)
//       }} />
//   }

  render() {

    return (
      <div className="mall">

        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export const InitApp = () => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    ReactDOM.render(<Root />, rootElement);
  }

};

export default InitApp;

InitApp();
