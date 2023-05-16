// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = (req, res) => {
	res.status(200).json({ msg: "user Auth" });
};

export { authUser };
