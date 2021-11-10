const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.home = catchAsyncErrors(async (req, res) => {
  res.status(200).json({
    message: 'welcome',
  });
});
