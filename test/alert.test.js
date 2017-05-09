import rp from 'request-promise';
import { expect } from 'chai';
import Weather from '../lib/weatherFetch';

describe('Alerts:', () => {
  describe('alerts sent to slack', () => {
    it('should authenticate successfully', () => {
      //expect 200 OK
    });

    it('should know when a channel is the target', () => {
      //expect slackChannel() to be called
    });

    it('should know when a user is the target', () => {
      //expect slackDirect() to be called
    });
  });

  describe('alerts sent straight to a twitter user -', () => {
    it('should authenticate successfully', () => {
      //expect 200 OK
    });

    it('should call the appropriate method', () => {
      //expect tweetDM() to be called
    });
  });

  describe('alerts sent to a bot twitter account -', () => {
    it('should authenticate successfully', () => {
      //expect 200 OK
    });

    it('should call the appropriate method', () => {
      //expect tweetPublic() to be called
    });
  });
});
