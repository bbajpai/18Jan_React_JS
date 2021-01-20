import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//Components
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            news:JSON
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

// const App = () =>{
//     // return <h1>Hii !! This is React Component</h1>; Single Line

//     console.log(JSON);
//     return(
//         <div>
//             <Header/>
//             <h1>Hii !! This is React Component</h1>
//         </div>
//     )
// }

ReactDOM.render(<App/>,document.querySelector('#root'));