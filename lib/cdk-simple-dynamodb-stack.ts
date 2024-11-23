import * as cdk from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class CdkSimpleDynamodbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a DynamoDB table
    const table = new Table(this, 'MoviesTable', {
      tableName: 'MoviesTable',
      partitionKey: { name: 'PK', type: AttributeType.STRING },
      sortKey: { name: 'SK', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    // Add a Global Secondary Index (GSI) for querying by year
    table.addGlobalSecondaryIndex({
      indexName: 'YearIndex',
      partitionKey: { name: 'year', type: AttributeType.NUMBER },
      projectionType: cdk.aws_dynamodb.ProjectionType.ALL, // Include all attributes in the index
    });
  }
}
