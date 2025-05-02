import React from "react"
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);

    
    this.state={
        userInfo:{
            name:"Dummy",
            location:"Default",
        }
        
    }
}
 async componentDidMount()
 {
    const data=await fetch("https://api.github.com/users/Sreenivasulu-Kalluru")
    const json= await data.json();
    this.setState({
        userInfo:json,
    })
 }
 componentDidUpdate()
 {

 }
 componentWillUnmount()
 {

 }
    render()
    {
        const {name,location, avatar_url}=this.state.userInfo;
        return(
        
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}
export default UserClass;