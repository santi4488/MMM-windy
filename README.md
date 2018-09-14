# MMM-Windy

### Introduction
This is a module for [MagicMirror](https://github.com/MichMich/MagicMirror) that adds the [Windy](https://www.windy.com/) weather map. This module uses the [Windy API](https://api4.windy.com) to add the map.

You will need to get your own API key which can be obtained [here](https://api4.windy.com/api-key).

### Configuration
To use the module, add the following to the modules array in your `config/config.js` file:
```
{
	module: "MMM-windy",
	position: 'fullscreen_above', // this must be set to 'fullscreen_above'
	config: {
		apiKey: 'YOUR_API_KEY',
    initLoadDelay: 50, // optional, default is 50 milliseconds
	}
}
```
