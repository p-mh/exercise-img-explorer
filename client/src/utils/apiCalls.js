import axios from 'axios';

export const getImagesLinks = async path => {
  const { data } = await axios.get('/api/getDatas/', { params: { path } });
  return data;
};
