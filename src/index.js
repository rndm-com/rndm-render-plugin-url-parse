import { use } from '@rndm/render';
import methods from './methods';

const plugin = {
  key: 'url-parse',
  methods,
};

use(plugin);

export default plugin;
