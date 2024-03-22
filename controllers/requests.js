const getAllRequest = (req, res) => {
  const { index } = req.body;

  const delay = Math.floor(Math.random() * 1000) + 1;
  setTimeout(() => {
    res.json({ index });
  }, delay);
};

module.exports = getAllRequest;
