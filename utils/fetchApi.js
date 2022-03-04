import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ea6bb27cc5msh46a1312ef7a3ac6p1d2905jsnf5bc5dc47102' ,
    },
  });
    
  return data;
}