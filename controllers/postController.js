import postmodel from "../models/postmodel";

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