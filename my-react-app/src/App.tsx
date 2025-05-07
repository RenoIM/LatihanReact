import './App.css'
// import { UserCard } from './UserCard'
import Helloworld from './Helloworld'
import { PropNama } from './Helloworlddto';
import Button from './button';

function App() {
  const props : PropNama = {
    name : 'Reno',
    gender : 'pria',
    age : 20
  }

  return (
    // <UserCard name="Razif Akbar" job="UI Tester" avatarUrl="http://localhost:5173/vite.svg"/>
    // <UserCard name="Reno Ikhmal Maulana" job="Web Developer" avatarUrl="http://localhost:5173/vite.svg"/>
    <>
    <h1>Hello</h1>
    <h2>Nyoba Nyoba react</h2>
    <Helloworld {...props}/>
    <Button Flag='Hello'/>
    </>
  );
}

export default App
