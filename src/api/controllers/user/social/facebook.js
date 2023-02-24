import { User } from '../../../../models/index.js';
import { FBId, FBSecret, SiteUrl } from '../../../../config/index.js';

import { errorHelper, generateRandomCode, sendCodeToEmail, logger, getText, turkishToEnglish, signConfirmCodeToken } from '../../../../utils/index.js';


import passport from 'passport';
import FacebookStrategy from "passport-facebook";

export default () => { passport.use(new FacebookStrategy({
    clientID: FBId,
    clientSecret: FBSecret,
    callbackURL: `${SiteUrl}`
  },
  async function(accessToken, refreshToken, profile, cb) {



	const emailCode = generateRandomCode(4);
		
			const confirmCodeToken = signConfirmCodeToken(profile.id, emailCode);

			const exists = await User.exists({ fb_id: profile.id })
		if (exists) {
		return res.status(200).json({
    resultMessage: { 
			en: getText('en', '00047'), tr: getText('tr', '00047'),
	ar: getText('ar', '00047'), },
    resultCode: '00047', user, accessToken, refreshToken
  });
}else {
			
	let user = new User({
		fb_id: profile.id,
		email: profile.email,
		password: hashed,
		name: profile.displyName,
		username: profile.name,
		language: "en",
		//true for development only
		isVerified: true,
		lastLogin: Date.now()
	});

	user = await user.save().catch((err) => {
		return res.status(500).json(errorHelper('00034', req, err.message));
	});
			
return res.status(200).json({
		resultMessage: { 
			en: getText('en', '00035'), 
			tr: getText('tr', '00035'),
		  ar: getText('ar', '00035')
		},
		resultCode: '00035', user, confirmToken: confirmCodeToken
	});
}
		   

  }
));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});						 






											

										 }

/**
 * @swagger
 * /social/facebook:
 *    get:
 *      summary: Get User Info
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *          description: Put access token here
 *      tags:
 *        - User
 *      responses:
 *        "200":
 *          description: The user information has gotten successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          resultMessage:
 *                              $ref: '#/components/schemas/ResultMessage'
 *                          resultCode:
 *                              $ref: '#/components/schemas/ResultCode'
 *                          user:
 *                              $ref: '#/components/schemas/User'
 *        "401":
 *          description: Invalid token.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 *        "500":
 *          description: An internal server error occurred, please try again.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 */