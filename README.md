# MMM-Windy

### Introduction
This is a module for [MagicMirror](https://github.com/MichMich/MagicMirror) that adds the [Windy](https://www.windy.com/) weather map.

![alt text](https://github.com/santi4488/MMM-windy/blob/master/windy.PNG)

### Configuration
You will need to get your own API key which can be obtained [here](https://api4.windy.com/api-key).
To use the module, add the following to the modules array in your `config/config.js` file:
```
{
	module: "MMM-windy",
	position: 'fullscreen_above', // this must be set to 'fullscreen_above'
	config: {
		apiKey: 'YOUR_API_KEY',
    initLoadDelay: 50, // optional, default is 50 milliseconds
		location: {	// optional location in latitude and longitude
			lat: 29.629633,	
			lng: -98.495894,
		},
		zoom: 5,	// optional zoom level, default is 5.  Bigger numbers zoom closer
		particlesAnim: 'on',	// optional, turns particles animation on or off, default 'on'
		graticule: false,	// optional
		englishLabels: false, // optional
		hourFormat: '12h' // optional
	}
}
```

For more information on the different options you can view them [here](https://api4.windy.com/examples/parameters)