import { useEffect, useState } from 'react';

function useFetch(url, setBooks) {

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                return response.json();
            })
            .then(data => {
                setBooks(data);
                setError(null); // Reset error if fetch is successful
            })
            .catch(error => {
                setError(error.message); // Set error message
                setBooks(null); // Reset books
            });
    }, [setBooks]);

    return { error };
}

export default useFetch;