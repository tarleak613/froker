const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://ayushbhagat1213:HCPwdX7EdpY9HyFy@cluster0.3fqlwub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PostSchema = new mongoose.Schema({
  image: String,
  author: String,
  title: String,
  body: String,
  likes: { type: Number, default: 0 } // Added field
});

const Post = mongoose.model('Post', PostSchema);

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

const Newsletter = mongoose.model('Newsletter', NewsletterSchema);

// Route to get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a specific post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to handle newsletter subscriptions
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  
  try {
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(409).json({ message: 'Already subscribed' }); // Conflict status for already subscribed
    }
    
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to like a post
app.post('/api/posts/:id/like', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Increment or decrement likes based on request body
    const liked = req.body.liked;
    if (liked) {
      post.likes += 1;
    } else {
      post.likes = Math.max(post.likes - 1, 0); // Prevent negative likes
    }

    await post.save();
    res.json({ likes: post.likes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
