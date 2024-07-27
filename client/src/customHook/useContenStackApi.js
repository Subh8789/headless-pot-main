import ContentStack from 'contentstack';
import { useState, useEffect } from 'react';

// Define Stack outside the component to prevent it from being recreated on every render
const Stack = ContentStack.Stack(
  "blt8cf7fa06f3654267",
  "cs11432c464beca575ef07a998",
  "preview"
);

export default function useContentStackApi(pageInfo, entrypoint) {
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entry = await Stack.ContentType(pageInfo)
          .Entry(entrypoint)
          .toJSON()
          .fetch();
        setContentData(entry.components);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [pageInfo, entrypoint]); // Only re-run if pageInfo or entrypoint change

  return contentData;
}
