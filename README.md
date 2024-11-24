# DynamoDB stack

Very simple CDK stack that creates a DynamoDB table called `MoviesTable` for our [nestjs-testing](https://github.com/ddewaele/nestjs-testing) repository.

Creates a table with a `PK` and `SK` as partition key and sort key.

Also creates a globla secondary index for the `year` attribute.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
