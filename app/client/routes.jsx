const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const routes = (
  <Route path="/" component={AppLoading}>
    <Route path="/add_player" component={AddPlayer} />
    <Route path="*" component={AppNotFound} />
  </Route>
);

const router = (
  <App history={createHistory()} >
    {routes}
  </App>
);

Meteor.startup(function () {
  if (Meteor.isClient) {
    window.setTimeout( function () {
      var domNode = document.getElementById("root");
      ReactDOM.render(<App >
          </App>,
          domNode);
    }, 1000)
  }
});
