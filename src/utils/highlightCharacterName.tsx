const highlightCharacterName = (name: string, query: string) => {
  if (query.trim() !== '' && name.toLowerCase().includes(query.toLowerCase())) {
    const index = name.toLowerCase().indexOf(query.toLowerCase());
    return (
      <>
        <span>{name.substring(0, index)}</span>
        <span style={{ color: 'red' }}>{name.substring(index, index + query.length)}</span>
        <span>{name.substring(index + query.length)}</span>
      </>
    );
  } else {
    return <span>{name}</span>;
  }
};

export default highlightCharacterName;
