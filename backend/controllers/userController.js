import asyncHandler from "express-async-handler";

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler((req, res) => {
	res.status(200).json({ msg: "user Auth" });
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler((req, res) => {
	res.status(200).json({ msg: "user Registered" });
});

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler((req, res) => {
	res.status(200).json({ msg: "Logout User" });
});

// @desc    Get user profule
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler((req, res) => {
	res.status(200).json({ msg: "User Profile" });
});

// @desc    Update user profule
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler((req, res) => {
	res.status(200).json({ msg: "User Profile updated" });
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
};
