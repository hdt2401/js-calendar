const homePage = (req, res) => {
  return res.send('Welcome to calendar');
}
// const homePageRedirect = (req, res) => {
//   res.send('homePageRedirect');
// }

module.exports = {
  homePage,
  // homePageRedirect,
}