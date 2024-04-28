const fetchData = async (query: string, setResults: Function, setError: Function, setLoading: Function) => {
    setLoading(true);
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        if (!response.ok) {
            throw new Error('Bağlantı ile ilgili bir sorun var.');
        }
        const data = await response.json();
        setResults(data.results);
        setError('');
    } catch (error) {
        setError('Böyle bir karakter bulunmamaktadır');
        setResults([]);
    } finally {
        setLoading(false);
    }
};

export default fetchData;