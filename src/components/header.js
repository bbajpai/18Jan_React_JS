import React, {Component} from 'react';

// const Header = ()=>{
//     return <div> This is Header</div>
// }

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            title:'User Entered Text:: ',
            keyword:''
        }
    }

    inputChange(event){
        console.log('Hiiii  ',event.target.value);
        //setting state
        this.setState({keyword:event.target.value});
        this.props.newsSearch(event.target.value);
    }

    render(){
        // const styles ={
        //     header:{
        //         background:'#457899'
        //     },
        //     logo:{
        //         color:'#ffffff',
        //         fontSize:'40px',
        //         textAlign:'center'
        //     }
        // }

        return(
            <header>
                <div className="logo" onClick={()=>{console.log('Logo Clicked')}}>
                    Logo
                </div>
                <input onChange={this.inputChange.bind(this)}/>
                <div>{this.state.title}</div>
                <div>{this.state.keyword}</div>
            </header>
        )
    }

}

export default Header;