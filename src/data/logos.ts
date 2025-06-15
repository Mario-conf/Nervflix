
const imageFiles = import.meta.glob<{ default: string }>('/src/data/movies/screenpng/logos/*', { eager: true });

const logos: { id: string; name: string; imageUrl: string }[] = Object.entries(imageFiles).map(([path, module], index) => {
    const nameWithSpaces = path.split('/').pop()?.replace(/\..+$/, '').replace(/[-_]/g, ' ') ?? `Logo ${index + 1}`;
    const name = nameWithSpaces.charAt(0).toUpperCase() + nameWithSpaces.slice(1);
    
    return {
        id: `logo-${index}`,
        name,
        imageUrl: module.default,
    };
});

export default logos;
