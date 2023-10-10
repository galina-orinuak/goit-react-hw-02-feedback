import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { NotificationMesage } from './Notification/Notification.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  
  countTotalFeedback =() => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad};
    
  countPositiveFeedbackPercentage =() => {
    const total= this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100)}

  render() {

  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.LeaveFeedback}
        />

        <Section title="Statistics" />
        {good > 1 || neutral > 1 || bad > 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <NotificationMesage message="There is no feedback" />
        )}
      </div>
    );
  }
}
