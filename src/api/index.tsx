class Api {
  
    getAll = async () => {
      const r = await fetch(`https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description`);
      return await r.json();
    };
  
    getOne = async (description: string) => {
      const r = await fetch(`https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description&refine.description=${description}`);
      return await r.json();
    }
  }
  
  export default Api;
  