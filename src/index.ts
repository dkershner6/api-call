import getCurrentScript from './lib/getCurrentScript';
import getParameters from './lib/getParameters';

const currentScript = getCurrentScript();

const { url, init } = getParameters(currentScript);

fetch(url, init);
