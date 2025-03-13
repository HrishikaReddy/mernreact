import './App.css';

function App() {
  return (
    <div className="App"> 
      <h1>My Application</h1>
      <p>This is Home Page</p>
      <hr></hr>
      <p>This is Footer</p>
    </div>
  );
}

export default App;

// if your remove classname="App" then it will not link with app.css 
// so does not come in center 
// instead of <div> and </div> we can use <> and </> - these are called fragments 