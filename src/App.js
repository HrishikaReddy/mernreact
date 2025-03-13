import './App.css';
import App1 from "./App1"
import App2 from "./App2"
function App(props) {
  const flg = props.flag;
  console.log(props.flag);
       {/* <App1/>
       <hr></hr>
       <App2 name="Mike" age={25}/> */}

       if (flg) {
        return <App2 name="Mike" age={25}/>;
       }
       else {
        return <App1/>;
       }
}

export default App;

// if your remove classname="App" then it will not link with app.css 
// so does not come in center 
// instead of <div> and </div> we can use <> and </> - these are called fragments 