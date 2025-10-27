import validator from "validator"

const validateSignupInput = (req) => {
    const { username , email , password  } = req.body;

    if(!username){
        throw new Error("Username is required");
    }else if(!validator.isEmail(email)){
        throw new Error("Invalid email address");
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Make a strong password")
    }
};

const validateProfileInput = (req) => {

    const allowedUpdates = [
        "username",
        "profilePicture"
    ];

    const isEditable = Object.keys(req.body).every((key) => 
        allowedUpdates.includes(key)
    )
    
    if(!isEditable){
        throw new Error("You cannot update some fields");
    }
}

export  { validateSignupInput , validateProfileInput };