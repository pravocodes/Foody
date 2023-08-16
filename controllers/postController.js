import postmodel from "../models/postmodel.js";
import usermodel from "../models/usermodel.js";

export const createpostController = async (req, res) => {
    try{
        const {content, description} = req.body;
        if (!content){
            return res.send({
                message: "Please enter an Image/Video",
            });
        }
        const id = req.user._id;
        const post = await new postmodel({
            content: content,
            description: description,
            createdBy: id,
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
            (p) => p._id
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

export const getpostbyIdController = async (req,res) => {
    try{
        const Id=req.user._id;
        const posts = await postmodel.find({ createdBy: Id }).sort({createdAt:-1});
        const allposts = posts.map(
            (p) => p._id
        )
        return res.status(200).send({
            success:true,
            message:"Posts fetched successfully",
            allposts
        })
    }
    catch(e){
        res.status(400).send({
            success:false,
            message:"Coudn't fetch posts",
            e
        })
    }
}