import React, {Component} from 'react';

class SignUp extends Component {
    
    constructor(props){
        super(props)
    }

    render() { 


        return (
            
    <div>
        <form > 
            <h1> Sign up </h1> 
            <p> 
                <label for="firstName" name = "firstName">firstName</label>
                <input  type="text" placeholder="enter your firstName" required="required" />
            </p>
           
            <p>
            <label for="lastName" name = "lastName">lastName</label>
            <input  type="text" placeholder="enter your firstName" required="required" />
            </p>
            
            <p> 
                <label for="email" >email</label>
                <input required="required" type="email" placeholder="mysupermail@mail.com"/> 
            </p>
            
            <p> 
                <label for="password" >Your password </label>
                <input  type="password"  name="password" required="required" placeholder="eg. X8df!90EO"/>
            </p>

            <p> 
                <label for="password" class="ypasswd" >Please confirm your password </label>
                <input name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
            </p>

            
            <p> 
            <label for="gender" class="gender" >enter a gender</label>
            <select name="gender" value ="" ><option value="Male">Male</option>
            <option value = "female">female</option>
            </select>
        </p>
        
        <p>
        <label for="jobRole" name = "jobRole">jobRole</label>
        <input  type="text" placeholder="enter your jobRole" required="required" />
        </p>

        <p>
        <label for="departmnent" name = "Address">department</label>
        <input  type="text" placeholder="enter your department" required="required" />
        </p>

        <p>
        <label for="address" name = "address">address</label>
        <input  type="text" placeholder="enter your department" required="required" />
        </p>
        
         <p class="signin button"> 
                <input type="submit" value="Sign up"/> 
            </p>
            <p class="change_link">  
                Already a member ?
                <a href="#tologin" class="to_register"> login here </a>
            </p>
        </form>
    </div>
    
        )
        }
    }
export default SignUp;