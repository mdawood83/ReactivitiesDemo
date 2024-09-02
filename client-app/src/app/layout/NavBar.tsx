import { Button, Container, Menu } from 'semantic-ui-react'
// import { useStore } from '../stores/store'
import { NavLink } from 'react-router-dom';

// interface Props {
//   openForm: () => void;
// }

export default function NavBar() {

  // const {activityStore} = useStore();

  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item as={NavLink} to='/' header>
                <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px' }} />
                Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name='Activities' />
            <Menu.Item>
                {/* <Button onClick={() => activityStore.openForm()} positive content='Create Activity' /> */}
                <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
            </Menu.Item>
        </Container>
    </Menu>
  )
}
