import * as services from "../services";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({
        err: -1,
        mes: 'Missing payload'
      })
    }
    const response = await services.register(req.body);
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: 'Iternal Server Error'
    });
  }
} 