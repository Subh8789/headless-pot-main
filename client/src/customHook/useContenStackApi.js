
import ContentStack from 'contentstack';
import { useState ,useEffect} from "react";

export default function useContentStackApi( pageInfo, entrypoint) {
  const [contentData, setContentData] = useState([]);
  //Initialize the Contentstack Stack for react
  const Stack = ContentStack.Stack(
    "blt8cf7fa06f3654267",
    "cs11432c464beca575ef07a998",
    "preview"
  );
  //Get a Single Entry
 useEffect(() => {
  const Query = Stack.ContentType(pageInfo)
  .Entry(entrypoint)
  .toJSON()
  .fetch()
  .then(
    function success(entry) {
      setContentData(entry.components);
    
      // Retrieve field value by providing a field's uid
      //console.log(entry.toJSON);
      // Convert the entry result object to JSON
    },
    function error(err) {
      // err object
      console.log(err);
    }
  );
  }, [Stack]);
  return contentData;
}
