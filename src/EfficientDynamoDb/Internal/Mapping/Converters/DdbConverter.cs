using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text.Json;
using EfficientDynamoDb.DocumentModel.AttributeValues;

namespace EfficientDynamoDb.Internal.Mapping.Converters
{
    public abstract class DdbConverter
    {
        internal abstract DdbPropertyInfo CreateDdbPropertyInfo(PropertyInfo propertyInfo, string attributeName);
    }
    
    public abstract class DdbConverter<T> : DdbConverter
    {
        public abstract T Read(in AttributeValue attributeValue);

        public abstract AttributeValue Write(ref T value);

        public virtual void Write(Utf8JsonWriter writer, string attributeName, ref T value)
        {
            var attributeValue = Write(ref value);
            if (attributeValue.IsNull)
                return;
            
            writer.WritePropertyName(attributeName);
            attributeValue.Write(writer);
        }

        internal sealed override DdbPropertyInfo CreateDdbPropertyInfo(PropertyInfo propertyInfo, string attributeName) => new DdbPropertyInfo<T>(propertyInfo, attributeName, this);
    }
}