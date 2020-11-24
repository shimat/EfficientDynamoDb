using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Threading.Tasks;
using EfficientDynamoDb.Context.Operations.PutItem;
using EfficientDynamoDb.DocumentModel.AttributeValues;
using EfficientDynamoDb.DocumentModel.ReturnDataFlags;
using EfficientDynamoDb.Internal.Core;
using EfficientDynamoDb.Internal.Extensions;
using EfficientDynamoDb.Internal.Operations.Shared;

namespace EfficientDynamoDb.Internal.Operations.PutItem
{
    public class PutItemHttpContent : DynamoDbHttpContent
    {
        private readonly string _tableName;
        private readonly PutItemRequest _request;

        public PutItemHttpContent(PutItemRequest request, string tableName) : base("DynamoDB_20120810.PutItem")
        {
            _request = request;
            _tableName = tableName;
        }

        protected override ValueTask WriteDataAsync(Utf8JsonWriter writer, PooledByteBufferWriter bufferWriter)
        {
            writer.WriteStartObject();

            WriteItem(writer);
            
            writer.WriteString("TableName", _tableName);
            
            if (_request.ConditionExpression != null)
                writer.WriteString("ConditionExpression", _request.ConditionExpression);
            
            if (_request.ExpressionAttributeNames?.Count > 0)
                writer.WriteExpressionAttributeNames(_request.ExpressionAttributeNames);
            
            if (_request.ExpressionAttributeValues?.Count > 0)
                writer.WriteExpressionAttributeValues(_request.ExpressionAttributeValues);

            if (_request.ReturnConsumedCapacity != ReturnConsumedCapacity.None)
                writer.WriteReturnConsumedCapacity(_request.ReturnConsumedCapacity);

            if (_request.ReturnItemCollectionMetrics != ReturnItemCollectionMetrics.None)
                WriteReturnItemCollectionMetrics(writer);
            
            if (_request.ReturnValues != ReturnValues.None)
                WriteReturnValues(writer);

            writer.WriteEndObject();

            return default;
        }

        private void WriteItem(Utf8JsonWriter writer)
        {
            writer.WritePropertyName("Item");

            writer.WriteAttributesDictionary(_request.Item!);
        }
        
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private void WriteReturnValues(Utf8JsonWriter writer)
        {
            writer.WriteString("ReturnValues", _request.ReturnValues switch
            {
                ReturnValues.None => "NONE",
                ReturnValues.AllOld => "ALL_OLD",
                ReturnValues.UpdatedOld => "UPDATED_OLD",
                ReturnValues.AllNew => "ALL_NEW",
                ReturnValues.UpdatedNew => "UPDATED_NEW",
                _ => "NONE"
            });
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private void WriteReturnItemCollectionMetrics(Utf8JsonWriter writer)
        {
            writer.WriteString("ReturnItemCollectionMetrics", _request.ReturnItemCollectionMetrics switch
            {
                ReturnItemCollectionMetrics.None => "NONE",
                ReturnItemCollectionMetrics.Size => "SIZE",
                _ => "NONE"
            });
        }
    }
}