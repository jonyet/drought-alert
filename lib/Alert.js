import inbox from 'inbox';
import twitter from 'twitter';
import slack from 'slack';

class Alert {

	slack(target, message) {
		//send a slack message to target
		//target can be a DM with a user
		//target can be a channel
		if (target.includes('#')) {
			this.slackChannel(target, message)
		} else {
			this.slackDirect(target, message)
		}
	};

	slackChannel(channel, message) {
		//do stuff
	}

	slackDirect(user, message) {
		//do stuff discretely
	}

	tweet(message) {
		//post a tweet to a bot er account
	};

	tweetPublic(user, message) {
		//send a tweet to user
	};

	tweetDM(user, message) {
		//send a DM to er user
	};

	text(email, message) {
		//send an email to phoneNumber@mms.att.net with inbox library
	};

	email(email, message) {
		//send an email to email account with inbox library
	};

};

export default new Alert();
