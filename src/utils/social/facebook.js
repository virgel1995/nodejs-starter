import * as Facebook from 'fb-sdk-wrapper';
import { FBId, FBSecret } from '../../config/index.js';

export const FacebookInit = async () => {
 Facebook.load()
  .then(async () => {
  await Facebook.init({
      appId: "533165382288679"
    });
		console.log("Facebook done")
  });
	/*
Facebook.api('/168546367204_10155245614532205', 'get', {
    fields: 'created_time,id,message,message_tags'
  })
  .then((res) => {
    // data's here!
				console.log(res)
  });
*/

}



export const FacebookAuth = () => {
	
}