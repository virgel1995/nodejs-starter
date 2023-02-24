import { Router } from 'express';
const router = Router();
import passport from "passport";

router.get('/facebook',
	passport.authenticate('facebook', {
		scope: [
			'user_friends'
		]
	}));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
	function(req, res) {
		// Successful authentication, redirect home.
		console.log("facebook done")
		//res.redirect('/');
	});


export default router

