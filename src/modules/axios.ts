import axios from "axios";

export const getCategories = () => {
  return new Promise(async (res, rej) => {
    try {
      const respData = await axios.get(
        "https://rpback.com/api/games/test_categories?project_id=2"
      );
      return res(respData);
    } catch (e) {
      rej(e);
    }
  });
};

export const getMinutes = () => {
  return new Promise(async (res, rej) => {
    try {
      const respData = await axios.get(
        "https://rpback.com/api/games/test_minutes?project_id=2"
      );
      return res(respData);
    } catch (e) {
      rej(e);
    }
  });
};

export const getBlocks = () => {
  return new Promise(async (res, rej) => {
    try {
      const respData = await axios.get(
        "https://rpback.com/api/games/test_blocks?project_id=2"
      );
      return res(respData);
    } catch (e) {
      rej(e);
    }
  });
};
