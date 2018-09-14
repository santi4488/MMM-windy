Module.register('MMM-windy', {
  defaults: {
    initLoadDelay: 50,
    apiKey: '',
  },
  getScripts: function() {
    return [
      'https://unpkg.com/leaflet@0.7.7/dist/leaflet.js',
    ];
  },
  getDom: function() {
    var self = this;
    var wrapper = document.createElement('div');
    if (self.config.apiKey === '') {
      wrapper.innerHTML = 'Please set the windy.com <i>apiKey</i> in the config for module: ' + this.name + '.';
      wrapper.className = 'dimmed light small';
      return wrapper;
    }

    if (!self.loaded) {
      wrapper.innerHTML = this.translate('LOADING');
      wrapper.innerClassName = 'dimmed light small';
      return wrapper;
    }
    var mapDiv = document.createElement('div');
    mapDiv.id = 'windy';
    wrapper.appendChild(mapDiv);
    console.log(wrapper);

    return wrapper;
  },
  start: function() {
    let self = this;
    Log.info('Starting module: ' + this.name);
    self.loaded = false;
    var scripts = [
      'https://api4.windy.com/assets/libBoot.js'
    ];
    var loadScripts = function(scripts) {
      var script = scripts.shift();
      var el = document.createElement('script');
      el.type = 'text/javascript';
      el.src = script;
      el.setAttribute('defer', '');
      el.setAttribute('async', '');

      el.onload = function() {
        if (scripts.length) {
          loadScripts(scripts);
        } else {
          self.loaded = true;
          self.updateDom();
          self.scheduleInit(self.config.initLoadDelay);
        }
      };
      document.querySelector('body').appendChild(el);
    };
    loadScripts(scripts);
  },
  scheduleInit: function(delay) {
    var self = this;
    setTimeout(() => {
      const options = {
        key: self.config.apiKey,
      };
      windyInit(options, windyAPI => {
        console.log(windyAPI);
      });
    }, delay);
  },
  getStyles: function() {
    return [
      'MMM-windy.css'
    ];
  }
})
