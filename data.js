/*
1. Use a JavaScript or JSON file to describe your store's items, and each
item's details.  For example, the price, title, description, image URL, etc.
should all be properties on an Object, and these Objects should all be stored
in one or more Arrays, for example:
*/

window.tourData = [
  {
    name: 'Rock Japan Experience',
    description: 'Join us at a local concert featuring various local bands.',
    price: 2500, // NOTE: prices are often done in whole cents and then formatted to dollars/cents
    category: 'night life', // category of this item
    bottomImageUrl: './images/pexels-martin-lopez-2240763.jpg', // relative URL to image of this item
    bottomImageAlt: 'Girls taking selfies at at a concert.',
    bottomImageCredit: 'Photo by Martin Lopez from Pexels',
    topImageUrl: './images/pexels-nichole-sebastian-3361381.jpg', // relative URL to image of this item
    topImageAlt: 'Close-up of guitarist.',
    topImageCredit: 'Photo by Nichole Sebastian from Pexels'
  },
  {
    name: 'Lost In Translation Experience',
    description: 'Relive the party experience from the movie.',
    price: 4000,
    category: 'night life',
    bottomImageUrl: './images/pexels-life-of-wu-3380920.jpg',
    bottomImageAlt: 'Arial shot of the Shibuya crosswalk.',
    bottomImageCredit: 'Photo by Life of Wu from Pexels',
    topImageUrl: './images/alex-knight-xX6BOQ0fJvk-unsplash.jpg',
    topImageAlt: 'Shot of city night scene at the Shibuya crosswalk',
    topImageCredit: 'Photo by Alex Knight on Unsplash'
  },
  {
    name: 'Local Food Stall Tour',
    description: 'Get cozy with food and stories at local food stalls.',
    price: 6500,
    category: 'food & drinks',
    bottomImageUrl: './images/alexandre-chambon-zxmSX2-GQBc-unsplash.jpg',
    bottomImageAlt: 'Man walk through street with food stalls.',
    bottomImageCredit: 'Photo by Alexandre Chambon on Unsplash',
    topImageUrl: './images/chris-yang-P_2MCw_fyss-unsplash.jpg',
    topImageAlt: 'Food stalls and people.',
    topImageCredit: 'Photo by Chris Yang on Unsplash'
  },
  {
    name: 'Beer Brewery Tour',
    description: "Learn and taste beer at Japan's biggest brewery.",
    price: 2000,
    category: 'food & drinks',
    bottomImageUrl: './images/factory-1518504_1920.jpg',
    bottomImageAlt: 'Fermentation Tanks.',
    bottomImageCredit: 'Image by Tibor Janosi Mozes from Pixabay',
    topImageUrl: './images/elevate-gcw5lBiduyM-unsplash.jpg',
    topImageAlt: 'Two people drinking various samples of beer outside.',
    topImageCredit: 'Photo by Elevate on Unsplash'
  },
  {
    name: 'Saki Brewery Tour',
    description: 'Learn and taste saki at local breweries in Tokyo.',
    price: 4500,
    category: 'food & drinks',
    bottomImageUrl: './images/crystal-kay-zgTqSzUQw6k-unsplash.jpg',
    bottomImageAlt: 'Saki containers stacked on top of each other.',
    bottomImageCredit: 'Photo by Crystal Kay on Unsplash',
    topImageUrl: './images/japanese-2358861_1920.jpg',
    topImageAlt: 'Two bottles of Saki in a restaurant setting.',
    topImageCredit: 'Image by Alice Cheung from Pixabay'
  },
  {
    name: 'Local Festival Tour',
    description: 'Experience a festival like a local.',
    price: 1000,
    category: 'city walk',
    bottomImageUrl: './images/local_matsur_square.jpg',
    bottomImageAlt: 'Festival with floats and people in a river.',
    bottomImageCredit: 'Photo by Ivan Ha',
    topImageUrl: './images/dance_square.jpg',
    topImageAlt: 'Women dancing in traditional clothes.',
    topImageCredit: 'Photo by Ivan Ha'
  },
  {
    name: 'City Lights Tour',
    description: 'Night walk with secret spots from Tokyo Station to Ginza.',
    price: 3000,
    category: 'city walk',
    bottomImageUrl: './images/night_shrine_square.jpg',
    bottomImageCredit: 'Photo by Ivan Ha',
    bottomImageAlt: 'A lit up tori gate with people walking through.',
    topImageUrl: './images/night_buddha_square.jpg',
    topImageAlt: 'A lit up statue of a Buddha in resting position',
    topImageCredit: 'Photo by Ivan Ha'
  },
  {
    name: 'Cherry Blossom Tour',
    description: 'Stroll past wonderful spots to view Cherry Blossoms.',
    price: 4500,
    category: 'city walk',
    bottomImageUrl: './images/sora-sagano-8sOZJ8JF0S8-unsplash.jpg',
    bottomImageCredit: 'Photo by Sora Sagano on Unsplash',
    bottomImageAlt: 'Night shot of cherry blossoms at Meguro River.',
    topImageUrl: './images/IMG_2983.jpg',
    topImageAlt: '',
    topImageCredit: 'Photo by Ivan Ha'
  },
  {
    name: 'Conquer Mt. Fuji Experience',
    description: 'Climb to the top of Mount Fuji to see the sun rise at the top of Japan.',
    price: 10000,
    category: 'adventure',
    bottomImageUrl: './images/raise-3338589_640.jpg',
    bottomImageCredit: 'Image by mohamed Hassan from Pixabay',
    bottomImageAlt: 'Silhouette of woman with arms raised facing Mount Fuji',
    topImageUrl: './images/P1230035.jpg',
    topImageAlt: 'Man standing above the clouds on Mount Fuji.',
    topImageCredit: 'Photo by Ivan Ha'
  },
  {
    name: 'Asakusa and Sensoji Temple Tour',
    description: 'Learn about the amazing history of Bunkyo Ward by bike',
    price: 5000,
    category: 'adventure',
    bottomImageUrl: './images/skytree-4757038_1920.jpg',
    bottomImageAlt: 'Skyline with Tokyo Skytree and buildings around Asakusa',
    bottomImageCredit: 'Image by hogadnama from Pixabay',
    topImageUrl: './images/1986-0125-MgbmImpjbmE-unsplash.jpg',
    topImageAlt: 'Front gate of Asakusa.',
    topImageCredit: 'Photo by 1986 0125 on Unsplash'
  }
];
