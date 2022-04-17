import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaRunner } from '../src';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'test');

  stack.node.setContext('gitlab-url', 'gitlab.com');
  stack.node.setContext('runner-token', 'Token123');
  new LambdaRunner(stack, 'TestRunner');

  Template.fromStack(stack);
});
