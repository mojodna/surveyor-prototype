import hyperlog from 'hyperlog';
import level from 'react-native-level';
import osmdb from 'osm-p2p-db';

export default function osmp2p (opts) {
  if (!opts) opts = {};
  const logdb = level(opts.logName || 'log');
  const log = hyperlog(logdb, { valueEncoding: 'json' });

  return osmdb({
    log: log,
    db: level(opts.indexName || 'index')
  });
}
