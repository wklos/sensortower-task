export const AttributeName = {
  OS: 'os',
  COMPARISON_ATTRIBUTE: 'comparison_attribute',
  TIME_RANGE: 'time_range',
  MEASURE: 'measure',
  DEVICE_TYPE: 'device_type',
  CATEGORY: 'category',
  DATE: 'date',
  END_DATE: 'end_date',
  COUNTRY: 'country',
  LIMIT: 'limit',
  OFFSET: 'offset',
  CUSTOM_FIELDS_FILTER_ID: 'custom_fields_filter_id',
  CUSTOM_TAGS_MODE: 'custom_tags_mode',
};

export const OperatingSystem = {
  ANDROID: 'android',
  IOS: 'ios',
  UNIFIED: 'unified',
};

export const ComparisonAttribute = {
  ABSOLUTE: 'absolute',
  DELTA: 'delta',
  TRANSFORMED_DELTA: 'transformed_delta',
};

export const Measure = {
  REVENUE: 'revenue',
  UNITS: 'units',
};

export const TimeRange = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  QUARTER: 'quarter',
  YEAR: 'year',
};

export const DeviceType = {
  TOTAL: 'total',
};

export const Categories_IOS = {
  0: 'All Categories',
  6000: 'Business',
  6001: 'Weather',
  6002: 'Utilities',
  6003: 'Travel',
  6004: 'Sports',
  6005: 'Social Networking',
  6006: 'Reference',
  6007: 'Productivity',
  6008: 'Photo & Video',
  6009: 'News',
  6010: 'Navigation',
  6011: 'Music',
  6012: 'Lifestyle',
  6013: 'Health & Fitness',
  6014: 'Games',
  6015: 'Finance',
  6016: 'Entertainment',
  6017: 'Education',
  6018: 'Books',
  6020: 'Medical',
  6021: 'Newsstand',
  6022: 'Catalogs',
  6023: 'Food & Drink',
  6024: 'Shopping',
  6025: 'Stickers',
  6026: 'Developer Tools',
  6027: 'Graphics & Design',
  7001: 'Games/Action',
  7002: 'Games/Adventure',
  7003: 'Games/Casual',
  7004: 'Games/Board',
  7005: 'Games/Card',
  7006: 'Games/Casino',
  7007: 'Games/Dice',
  7008: 'Games/Educational',
  7009: 'Games/Family',
  7011: 'Games/Music',
  7012: 'Games/Puzzle',
  7013: 'Games/Racing',
  7014: 'Games/Role Playing',
  7015: 'Games/Simulation',
  7016: 'Games/Sports',
  7017: 'Games/Strategy',
  7018: 'Games/Trivia',
  7019: 'Games/Word',
  9007: 'Kids',
  10000: 'Kids/Ages 5 & Under',
  10001: 'Kids/Ages 6-8',
  10002: 'Kids/Ages 9-11',
  13001: 'Newsstand/News & Politics',
  13002: 'Newsstand/Fashion & Style',
  13003: 'Newsstand/Home & Garden',
  13004: 'Newsstand/Outdoors & Nature',
  13005: 'Newsstand/Sports & Leisure',
  13006: 'Newsstand/Automotive',
  13007: 'Newsstand/Arts & Photography',
  13008: 'Newsstand/Brides & Weddings',
  13009: 'Newsstand/Business & Investing',
  13010: "Newsstand/Children's Magazines",
  13011: 'Newsstand/Computers & Internet',
  13012: 'Newsstand/Cooking Food & Drink',
  13013: 'Newsstand/Crafts & Hobbies',
  13014: 'Newsstand/Electronics & Audio',
  13015: 'Newsstand/Entertainment',
  13017: 'Newsstand/Health Mind & Body',
  13018: 'Newsstand/History',
  13019: 'Newsstand/Literary Magazines & Journals',
  13020: "Newsstand/Men's Interest",
  13021: 'Newsstand/Movies & Music',
  13023: 'Newsstand/Parenting & Family',
  13024: 'Newsstand/Pets',
  13025: 'Newsstand/Professional & Trade',
  13026: 'Newsstand/Regional News',
  13027: 'Newsstand/Science',
  13028: 'Newsstand/Teens',
  13029: 'Newsstand/Travel & Regional',
  13030: "Newsstand/Women's Interest",
  16001: 'Stickers/Emoji & Expressions',
  16003: 'Stickers/Animals & Nature',
  16005: 'Stickers/Art',
  16006: 'Stickers/Celebrations',
  16007: 'Stickers/Celebrities',
  16008: 'Stickers/Comics & Cartoons',
  16009: 'Stickers/Eating & Drinking',
  16010: 'Stickers/Gaming',
  16014: 'Stickers/Movies & TV',
  16015: 'Stickers/Music',
  16017: 'Stickers/People',
  16019: 'Stickers/Places & Objects',
  16021: 'Stickers/Sports & Activities',
  16025: 'Stickers/Kids & Family',
  16026: 'Stickers/Fashion',
};

export const Categories_Android = {
  all: 'Overall',
  app_wallpaper: 'App Wallpaper',
  app_widgets: 'App Widgets',
  application: 'Application',
  art_and_design: 'Art & Design',
  auto_and_vehicles: 'Auto & Vehicles',
  beauty: 'Beauty',
  books_and_reference: 'Books & Reference',
  business: 'Business',
  comics: 'Comics',
  communication: 'Communication',
  dating: 'Dating',
  education: 'Education',
  entertainment: 'Entertainment',
  events: 'Events',
  family: 'Family',
  family_action: 'Family/Action & Adventure',
  family_braingames: 'Family/Brain Games',
  family_create: 'Family/Creativity',
  family_education: 'Family/Education',
  family_musicvideo: 'Family/Music & Video',
  family_pretend: 'Family/Pretend Play',
  finance: 'Finance',
  food_and_drink: 'Food & Drink',
  game: 'Game',
  game_action: 'Action',
  game_adventure: 'Adventure',
  game_arcade: 'Arcade',
  game_board: 'Board',
  game_card: 'Card',
  game_casino: 'Casino',
  game_casual: 'Casual',
  game_educational: 'Educational',
  game_family: 'Family',
  game_music: 'Music',
  game_puzzle: 'Puzzle',
  game_racing: 'Racing',
  game_role_playing: 'Role Playing',
  game_simulation: 'Simulation',
  game_sports: 'Sports',
  game_strategy: 'Strategy',
  game_trivia: 'Trivia',
  game_wallpaper: 'Wallpaper',
  game_widgets: 'Widgets',
  game_word: 'Word',
  health_and_fitness: 'Health & Fitness',
  house_and_home: 'House & Home',
  libraries_and_demo: 'Libraries & Demo',
  lifestyle: 'Lifestyle',
  maps_and_navigation: 'Maps & Navigation',
  media_and_video: 'Media & Video',
  medical: 'Medical',
  music_and_audio: 'Music & Audio',
  news_and_magazines: 'News & Magazines',
  parenting: 'Parenting',
  personalization: 'Personalization',
  photography: 'Photography',
  productivity: 'Productivity',
  shopping: 'Shopping',
  social: 'Social',
  sports: 'Sports',
  tools: 'Tools',
  transportation: 'Transportation',
  travel_and_local: 'Travel & Local',
  video_players: 'Video Players & Editors',
  weather: 'Weather',
};
