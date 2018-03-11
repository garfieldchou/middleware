const config = require('./config');

if (config.env === 'development') {
  console.log('development');
} else {
  console.log('not development');
}
