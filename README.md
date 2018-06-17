# react-typescript-boilerplate
This is my boilerplate for react + TypeScript. 
It is a minimal way to use react + TypeScript + redux.
Maybe I'll maintain it.

# Todo
- Add redux
  + Good example: https://kapeli.com/dash_share?docset_file=Redux&docset_name=Redux&path=redux/docs/advanced/ExampleRedditAPI.html&platform=usercontribRedux&repo=User%20Contributed&version=3.6.0-du.1
  + display vehicles from redux store
  + Async requests:
    { type: 'FETCH_SOMETHING', status: 'pending' }
    { type: 'FETCH_SOMETHING', status: 'success', response: {} }
    { type: 'FETCH_SOMETHING', status: 'error', error: '' }
  + Feature: Filter
  - Add sentry as middleware: 
    - See redux middleware: https://kapeli.com/dash_share?docset_file=Redux&docset_name=Redux&path=redux/docs/advanced/Middleware.html&platform=usercontribRedux&repo=User%20Contributed&version=3.6.0-du.1
    - Sentry: https://docs.sentry.io/clients/javascript/

# References
- https://reactjs.org/
- https://github.com/TypeStrong/ts-loader
- https://webpack.js.org/guides/
- https://spin.atomicobject.com/2017/10/31/react-typescript-basics/
- https://redux.js.org/
    - http://jakesidsmith.com/blog/post/2017-11-18-redux-and-react-an-introduction/
