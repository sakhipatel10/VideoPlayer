import axios from 'axios';

const KEY = 'AIzaSyCuUMP5pYqD9xCLYG9U_21vsau4HGO2iXY';

export default axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params : {
		part: 'snippet',
		maxResults : 5,
		key : KEY
	}
}
);