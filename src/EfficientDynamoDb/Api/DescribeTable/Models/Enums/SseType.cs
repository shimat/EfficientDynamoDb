using System;

namespace EfficientDynamoDb.Api.DescribeTable.Models.Enums
{
    public enum SseType
    {
        _UNKNOWN = 0,
        KMS = 10,
        [Obsolete("Not supported according to DDB docs")]
        AES256 = 20
    }
}