import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzQzY2Y5MDU2YmJiNDUxNGRjNjI3NTU5YTRmZTA2ZiIsIm5iZiI6MTc1Njc2ODcwOC42MjYsInN1YiI6IjY4YjYyOWM0ZWNjNzJmNjg5ZDNjZDg0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zjjdcvRlIS6GrOTJRAZRhI03W62Z6KYCgouQuVSbgVo`
    }
});

export default api;


