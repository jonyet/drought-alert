//import inbox from 'inbox';
//import twitter from 'twitter';
import {IncomingWebhook} from '@slack/client/index';
import dotenv from 'dotenv';

dotenv.config();

class Alert {
  
  slack(target, message) {
    //send a slack message to target
    //target can be a DM with a user
    //target can be a channel
    
    if (target.includes('#')) {
      this.slackChannel(target, message);
    } else {
      this.slackDirect(target, message);
    }
  };
  
  slackChannel(channel, message) {
    let webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL || '');
    
    webhook.send(message, (err, res) => {
      if (err) {
        console.log('ERROR ::> ', rej);
      } else {
        console.log('Message delivered successfully!');
      }
    });
    
    
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
  
}

export default new Alert();
