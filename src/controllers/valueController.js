import Value from "../models/Value.js";
import logger from "../utils/Logger.js";

export const getAllValues = async (req, res) => {
  try {
    const data = await Value.find();
    logger.info(`Fetched all Previous from DB - ${data}`);
    res.json(data);
  } catch (err) {
    logger.infor("Error: " + err.message);
    return res.status(400).json({ message: err });
  }
};

export const storeAllValues = async (req, res) => {
  try {
    const { values, answers } = req.body;
    logger.info("Received values from Frontend");
    const valueObject = { values, answers };

    const value = await Value.create(valueObject);

    if (value) {
      logger.info("Stored all Values to DB");

      return res.status(200).json({ message: `Value Stored` });
    } else {
      return res.status(400).json({ message: "Something Went wrong" });
    }
  } catch (err) {
    logger.infor("Error: " + err.message);
    return res.status(400).json({ message: err });
  }
};
