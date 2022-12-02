import './App.css';
import Navbar from './MyComponents/Navbar';
import TextForm from './MyComponents/TextForm';

function App() {
  return (
    <>  
<Navbar title="TextUtils"/>
<div className='container my-3'>

<TextForm heading="Enter the text"/>
</div>
    </>
  );
}

export default App;
