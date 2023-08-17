import usermodel from "../models/usermodel.js";
export const followController = async (req, res) => {
    try {
      const id = req.user._id;
      const { followid } = req.body;
      const userid = await usermodel.findOne({ username: followid });
      if (!userid) {
        return res.status(200).send({
          success: false,
          message: "Invalid user"
        })
      }
      if (userid.followers.includes(id)) {
        return res.status(200).send({
          success: false,
          message: "You are already following the user"
        })
      }
      userid.followers.push(id);
      userid.numberoffollowers = userid.followers.length;
      await userid.save();
      res.status(200).send({
        success: true,
        message: "You are now following the user"
      })
    }
    catch (e) {
      res.status(400).send({
        success: false,
        message: "Follow error",
        e
      })
    }
  }
  
  export const followingController = async(req,res) => {
    try{
      const { searchid } = req.body;
      const id = await usermodel.findOne({ username: searchid });
      if (!id) {
        return res.status(200).send({
          success:false,
          message:"no such user",
        })
      }
      const followers = id.followers;
      return res.status(200).send({
        success:true,
        message:"all followers fetched",
        followers
      })
    }
    catch(e){
      res.status(200).send({
        success:false,
        messsage:"error in getting following",
        e
      })
    }
  }
  
  export const removefollowController = async(req,res) => {
    
  }