import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './authentication.js'

class BPALApp extends Component{
    render(){
        return(
            <div className="BPALApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/display" component = {FullCollection}/>
                        <Route path = "/" exact component={LoginComponent}/>
                        <Route path = "/login" component={LoginComponent}/>
                        <Route path = "/welcome/:name" component={WelcomeComponent}/>
                        <Route path = "/logout" component = {LogoutComponent}/>
                        <Route component = {ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/* <WelcomeComponent/>
                <LoginComponent/> */}
            </div>
        )
    }
}
class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(
            <header>
                <nav className = 'navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href = "http://localhost:3000/" className = "navbar-brand">  Home!</a></div>
                    <ul className = 'navbar-nav'>
                        <li className = "nav-link"> <Link to = "/welcome/:name">Home</Link></li>
                        <li className = "nav-link"> <Link to = "/display">Collection</Link></li>
                    </ul>
                    <ul className = 'navbar-nav navbar-collapse jusify-content-end'>
                        <li className = "nav-link"> <Link to = "/login">Login</Link></li>
                        <li className = "nav-link"> <Link to = "/logout" onClick ={AuthenticationService.logout}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )

    }
}
class FooterComponent extends Component{
    render(){
        return(
            <footer className = "footer">
                 <span className = "text-muted"> This app brought to you by Blind Panic Industries, LLC (c) 2021</span>
            </footer>
        )
    }
}
class LogoutComponent extends Component{
    render(){
        return(
            <div>
            <h1> You have logged out.</h1>

              Come back soon! <br/>
              To log in again, go <Link to = "/login">here.</Link>
            </div>
        )
    }
}
class FullCollection extends Component{
         constructor(props){
        super(props)
        this.state = {
            collection:[
                {id: 1, name: "Aeval", discont: true, size: "bottle", limited: false, group:"Diabolus"},
                {id: 2, name: "Dorian", discont: false, size: "bottle", limited: false, group:"Sin and Salvation"},
                {id: 3, name: "Blue Moon 2020", discont: true, size: "bottle", limited: true, group: "A Little Lunacy"}
            ]
        }
    }
    render(){
        return (<div><h1>Here is your perfume collection in all its glory!</h1>
        <div className = "container">

        <table class = "table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Discontinued?</th>
                    <th>Size</th>
                    <th>Limited Edition?</th>
                    <th>Collection?</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.collection.map(
                    collection =>
                    <tr>
                        <td>{collection.id}</td>
                        <td>{collection.name}</td>
                        <td>{collection.discont.toString()}</td>
                        <td>{collection.size}</td>
                        <td>{collection.limited.toString()}</td>
                        <td>{collection.group}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
        </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
        <div className = "container">
            <h1>Welcome to You Have Too Much Perfume, {this.props.match.params.name}!</h1>
             <h3>
             Of course, you don't actually have too much perfume, it just needs to be managed better.<br/>
             You can see your collection <Link to="/display">here</Link>.
             </h3>
             </div>
        )
    }
}

function ErrorComponent(){
    return <div>This is not the page you're looking for</div>
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }
    handleChange(event){
        console.log(event.target.name);
        this.setState({
            [event.target.name]
                :event.target.value
            })
    }

    loginClicked() {
        //diana,dummy
        if(this.state.username ==='diana' && this.state.password ==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push (`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
            console.log("successful");
        }

        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log("fail");
        }

        console.log(this.state);
    }
    render(){
        return(

            <div>
                <h1>Login</h1>
                <div class = "container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Credentials</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>  */}
                {this.state.showSuccessMessage && <div>Login Successful!</div>}
            User Name: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
            Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
            <button className = "btn btn-login" onClick = {this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default BPALApp;
