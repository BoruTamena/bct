// customHooks.js

import { useState, useEffect } from 'react';

const useFetchCourses = (jsonFilePath) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch data (status: ${response.status})`);
        }

        const data = await response.json();
        setCourses(data.courses);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [jsonFilePath]);

  return { courses, loading, error };
};

export default useFetchCourses;
