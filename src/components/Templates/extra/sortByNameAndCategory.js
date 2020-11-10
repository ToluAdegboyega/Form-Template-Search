//First sort by category then sort by name

export const sortByNameAZ = arr => {
    // eslint-disable-next-line
    return arr.sort((item1, item2) => {
      if (item1.category > item2.category) return 1;
      if (item1.category < item2.category) return -1;
      if (item1.name > item2.name) return 1;
      if (item1.name < item2.name) return -1;
    });
  };
  
  export const sortByNameZA = arr => {
    // eslint-disable-next-line
    return arr.sort((item1, item2) => {
      if (item1.category > item2.category) return 1;
      if (item1.category < item2.category) return -1;
      if (item1.name > item2.name) return -1;
      if (item1.name < item2.name) return 1;
    });
  };

  export const sortByDateAZ = arr => {
    // eslint-disable-next-line
    return arr.sort((item1, item2) => {
     
      if (item1.created > item2.created) return 1;
      if (item1.created < item2.created) return -1;
    });
  };
  
  export const sortByDateZA = arr => {
    // eslint-disable-next-line
    return arr.sort((item1, item2) => {
      
      if (item1.created > item2.created) return -1;
      if (item1.created < item2.created) return 1;
    });
  };