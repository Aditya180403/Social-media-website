import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { 
      firstname,
      lastname,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ error: 'Firstname, lastname, email, and password are required' });
    }



   const salt = await bcrypt.genSalt();
   const passwordHash = await bcrypt.hash(password ,  salt);

   const newUser = new User({
    firstname,
    lastname,
    email,
    password: passwordHash,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile: Math.floor(Math.random()*1000),
    impressions: Math.floor(Math.random()*1000),
   })
   const savedUser = await  newUser.save();
   res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};


export const login = async(req,res) =>{
    try {
        const{email, password } = req.body;
       const user = await User.findOne({email:email});
       if(!user)  return res.status(400).json({msg:'User does not exist'});

       const isMatch = await bcrypt.compare(password,user.password);
       if(!isMatch) return  res.status(400).json({msg:'invalid credentials'});

       const token = jwt.sign({id : user._id}, process.env.KEY);
       delete user.password;
       res.status(200).json({token,user});

    } catch (error) {
        res.status(500).json({error: err.msg});
    }
};