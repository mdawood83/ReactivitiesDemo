import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header, Image, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';
import FacebookLogin, { FailResponse, SuccessResponse } from '@greatsumini/react-facebook-login';

export default observer(function HomePage() {
  const {userStore, modalStore} = useStore();

  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}} />
          Reactivities
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as='h2' inverted content='Welcome to Reactivities' />
            <Button as={Link} to='/activities' size='huge' inverted>
              Go to Activities!
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
              Login!
            </Button>
            <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>
              Register
            </Button>
            <Divider horizontal inverted>Or</Divider>
            <FacebookLogin
              appId='1270455164141858'
              onSuccess={(response: SuccessResponse) => {
                // console.log('Login success!', response)
                userStore.faceBookLogin(response.accessToken);
              }}
              onFail={(response: FailResponse) => {
                console.log('Login failed!', response)
              }}
              className={`ui button facebook huge inverted ${userStore.fbLoading && 'Loading'}`}
            />
          </>
        )}
        
      </Container>
    </Segment>
    // <Container style={{marginTop: '7em'}}>
    //     <h1>Home Page</h1>
    //     <h3>Go to <Link to='/activities'>Activities</Link></h3>
    // </Container>
  )
})