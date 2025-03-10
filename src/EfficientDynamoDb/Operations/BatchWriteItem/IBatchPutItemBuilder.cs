﻿namespace EfficientDynamoDb.Operations.BatchWriteItem
{
    public interface IBatchPutItemBuilder : IBatchWriteBuilder
    {
        internal IBatchPutItemBuilder WithTableName(string tableName);
    }
}