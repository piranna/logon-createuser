const createReadStream = require('fs').createReadStream
const join = require('path').join

const extract = require('tar-fs').extract
const gunzip  = require('gunzip-maybe')


function inituser(userpath, callback)
{
  // extract the home directory default contents
  createReadStream(join(__dirname, 'home_dir.tar.gz'))
  .pipe(gunzip())
  .pipe(extract(userpath))
  .on('finish', callback)
}


module.exports = inituser
