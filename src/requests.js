const APIKEY = "ed9dcda6722e1d146110916677d025fb";

const requests = {
  fetchTrending: `/tranding/all/week?api_key=${APIKEY}$language=en-U`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-U`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with-genres=20`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with-genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with-genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with-genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with-genres=99`,
};

export default requests;