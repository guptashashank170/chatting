import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/messenger';
import AccountProvider from './context/AccountProvider';
function App() {
  const ClientId = '589574726428-3rjpjjmgl7tq1e3vm8lhs36dds77vekn.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
