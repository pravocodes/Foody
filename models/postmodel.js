import mongoose from "mongoose";
const postschema = new mongoose.Schema(
    {
        content : {
            type: String,
            required: true,
        },
        description:{
            type: String,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        comment: {
            type: Map,
            default: {},
        },
        commentsCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Posts",postschema);