export const searchController = (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Searching for ${keyword}`);
};

export const usernameController = (req, res) => {
  const username = req.params.username;
  res.send(`Welcome ${username}`);
};

export const userLogin = (req, res) => {
  res.send("This is user login");
};

export const userSignup = (req, res) => {
  res.send("This is user signup");
};
