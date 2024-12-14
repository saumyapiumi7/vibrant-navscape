import { useState } from "react";

const Memo = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);  // Save the generated URL of the image
    }
  };

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts([
        { id: Date.now(), content: newPost, image: image },
        ...posts,
      ]);
      setNewPost("");
      setImage(null);  // Reset image after posting
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-6 animate-fade-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Memo
          </h1>
          <p className="text-xl text-gray-600">
            Share your thoughts with images and comments.
          </p>
        </div>

        {/* Post creation */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
          <div className="flex flex-col space-y-4">
            {/* Image upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded-md p-2"
            />

            {/* Text input */}
            <textarea
              value={newPost}
              onChange={handlePostChange}
              className="w-full h-32 p-4 border rounded-lg"
              placeholder="What's on your mind?"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddPost}
                className="bg-primary text-white py-2 px-6 rounded-md"
              >
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Display posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              {/* Image display */}
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Image"
                  className="w-[2.5cm] h-[2.5cm] object-cover rounded-md"
                />
              )}

              {/* Text display */}
              <div className="flex-1">
                <p className="text-gray-800 text-xs">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memo;
