const openai = require("../config/openai");

module.exports = {
  async sentText(req, res) {
    const openaiAPI = openai.configuration();

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion("css para iniciantes")
      );

      return res.status(200).json({
        success: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response
          : "there was an inssue on the server",
      });
    }
  },
};
