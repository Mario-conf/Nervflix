interface Logo {
  id: string;
  name: string;
  imageUrl: string;
}

import rawLogosData from './movies/logos.json';

const processedLogos: Logo[] = (rawLogosData as Logo[]).map((logo, index) => {
    const nameFromUrl = logo.imageUrl.split('/').pop()?.replace(/\..+$/, '').replace(/[-_]/g, ' ') ?? `Logo ${index + 1}`;
    const formattedName = nameFromUrl.charAt(0).toUpperCase() + nameFromUrl.slice(1);
    
    return {
        id: logo.id || `logo-${index}`, 
        name: logo.name || formattedName, 
        imageUrl: logo.imageUrl, 
    };
});

export const logos: Logo[] = processedLogos;
export default processedLogos;