const INITIAL_STATE = {
  sections: [
    {
      title: "Rice",
      imageUrl: "https://media.istockphoto.com/photos/asian-chinese-fried-rice-with-vegetable-and-egg-with-chopsticks-picture-id172789635?k=6&m=172789635&s=612x612&w=0&h=GUfEQ5u-iQaAJ5QeOE7vpRioRu8KSwsAAPuD4175YCc=",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "Sweets",
      imageUrl: "https://media.istockphoto.com/photos/indian-sweets-picture-id523041362?k=6&m=523041362&s=612x612&w=0&h=Mxn6KJDWy31EPN2gIZLJTtM-IkxpCESUiH_5uYfrTAk=",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "Daal",
      imageUrl: "https://media.istockphoto.com/photos/indian-dal-food-traditional-indian-soup-lentils-indian-dhal-spicy-in-picture-id1130228935?k=6&m=1130228935&s=612x612&w=0&h=LzDSEhEbXSgatq0_2ewQhgQGlDkeHBqoR5-0NyF_Xro=",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Breads",
      imageUrl: "https://media.istockphoto.com/photos/indian-bread-chapati-fulka-gehu-roti-with-wheat-grains-in-background-picture-id900220822?k=6&m=900220822&s=612x612&w=0&h=gcV0zd4u6ID3Ii4hklqkUnHn_NtA53J70uqT6bcrp5U=",
      size: "large",
      id: 4,
      linkUrl: "shop/women",
    },
    {
      title: "Curry",
      imageUrl: "https://www.livemorezone.com/wp-content/uploads/places-to-eat-in-noida-live-more-zone-dbs.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/men",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
