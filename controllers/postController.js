import postmodel from "../models/postmodel.js";
import usermodel from "../models/usermodel.js";

export const createpostController = async (req, res) => {
    try{
        const {content, description, createdBy} = req.body;
        if (!content){
            return res.send({
                message: "Please enter an Image/Video",
            });
        }
        if (!createdBy){
            return res.send({
                message: "Please log in",
            })
        }
        const userExists = await usermodel.exists({ _id: createdBy });
        if (!userExists) {
            return res.send({
                message: "User not found",
            });
        }
        const post = await new postmodel({
            content,
            description,
            createdBy,
        }).save();
        res.status(200).send({
            success: true,
            message: "Posted Successfully",
            post,
        })
    }
    catch(e){
        res.status(400).send({
            success: false,
            message: "failed to post",
            e,
        })
    }
}

export const getpostController = async (req,res) => {
    try{
        const posts = await postmodel.find().sort({ likes: -1});
        const allposts = posts.map(
            (p) => posts._id
        );
        return res.status(200).send({
            success: true,
            message: "Posts fetched successfully",
            allposts,
        })
    }
    catch(e){
        res.status(400).send({
            success:false,
            message:"Couldn't fetch posts",
            e
        })
    }
}