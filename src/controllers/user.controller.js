import * as services from "../services";

export const userList = async (req, res) => {
  try {
    const response = await services.getUserList();
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: 'Iternal Server Error'
    });
  }
} 