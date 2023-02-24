import en from './en.js';
import tr from './tr.js';
import ar from './ar.js'
export default (lang, key) => {
  if (lang == 'tr') {
    return tr[key];
  } else if (lang == 'ar') {
    return ar[key];
	} else {
    return en[key];
  }
};
