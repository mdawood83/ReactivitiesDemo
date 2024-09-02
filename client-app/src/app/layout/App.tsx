import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
// import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/homePage';

function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{marginTop: '7em'}}>
            {/* <ActivityDashboard /> */}
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default observer(App);
