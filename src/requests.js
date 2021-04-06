const APIKEY = "ed9dcda6722e1d146110916677d025fb";



const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchAdventureMovies: `/discover/movie?api_key=${APIKEY}&with_genres=12`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;