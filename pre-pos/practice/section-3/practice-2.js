function create_updated_collection(collection_a, object_b) {
  
  for(var i = 0;i < collection_a.length;i++)
   {
        for(var k = 0;k < object_b.value.length;k++)
        {
            if(collection_a[i].key === object_b.value[k])

               collection_a[i].count = collection_a[i].count - Math.floor(collection_a[i].count/3);
        }
   }
   return collection_a;
}
