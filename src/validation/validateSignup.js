export const userEntry = (data) => {

    const {firstName ,lastName,email, password, con_password, gender,jobRole,department,address} = data
    
    const userData = {
        firstName,
        lastName,
        email, 
        password,
        con_password,
        gender,
        jobRole,
        department,
        address
    }


 return userData;

}

export const validateUser = (allDetails) => {
const user =  userEntry(allDetails);

if(!user.firstName || !/^[a-zA-Z]{3,}$/.test(user.firstName) ){
    return {
        status: true,
        message: 'invalid first name'
    }
}

if(!user.lasName || !/^[a-zA-Z]{3,}$/.test(user.lastName) ){
    return {
        status: true,
        message: 'invalid last name'
    }
}


if(!user.email || !/^[a-zA-Z].+@+.\...$/.test(user.email) ){
    return {
        status: true,
        message: 'invalid email'
    }
}

if(!!/^(?=.\d)(?=.[a-z])(?=.\W)(?=.[A-Z])[0-9a-zA-Z\W]{8,}$/.test(user.password)){
    return {
        status: false,
        message: 'invalid password',
    }
}
    
if(! user.gender) {
    return {
        status: false,
        message: 'Please enter a gender',
    }
}

  
if(! user.department) {
    return {
        status: false,
        message: 'Department can not be empty',
    }

}
  
if(! user.address) {
    return {
        status: false,
        message: 'Address cannot be empty',
    }
}

}