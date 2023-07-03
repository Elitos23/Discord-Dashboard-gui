import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MainButton } from '../utils/styles';
import { HomePageStile } from '../utils/styles';

export const LoginPage = () =>{
  const redirect = () => {
window.location.href = 'http://localhost:3001/api/auth/login'

  }
  return (

   <HomePageStile>
        <div></div>
        <div>
            <MainButton onClick ={redirect}>
                <FaDiscord size={50} />
                <p style={{marginLeft: '20px'}}>Login with Discord</p>
                </MainButton>
                <MainButton>
                <FaTwitter size={50} />

                <p style={{marginLeft: '20px'}}>Login with Twitter </p>
                </MainButton>

        </div>

        <div
            style={{
                display: 'flex',
                width: '300px',
                justifyContent: 'space-between'
            }}>
            <span>Discord </span>
            <span>Privacy Policy </span>
            <span>Twitter </span>

        </div>

</HomePageStile>
);}
