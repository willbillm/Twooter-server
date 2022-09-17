import PostData from '../models/post.js';

export const getPosts = async (req, res) => {

    try {

        const allPosts = await PostData.find();

        res.status(200).json(allPosts);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = new PostData(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const deletePost = async (req, res) => {

    const id = req.params.id;

    try {
        await UserPost.findByIdAndRemove(id).exec();
        res.send('Succesfully deleted!')
    } catch (error) {
        console.log(error);
    }
}