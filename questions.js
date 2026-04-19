const questionSets = [
  // Food
  { type: "word", category: "Food", real: "Pizza" },
  { type: "word", category: "Food", real: "Burger" },
  { type: "word", category: "Food", real: "Fries" },
  { type: "word", category: "Food", real: "Hot Dog" },
  { type: "word", category: "Food", real: "Tacos" },
  { type: "word", category: "Food", real: "Burrito" },
  { type: "word", category: "Food", real: "Quesadilla" },
  { type: "word", category: "Food", real: "Nachos" },
  { type: "word", category: "Food", real: "Chicken Nuggets" },
  { type: "word", category: "Food", real: "Fried Chicken" },

  { type: "word", category: "Food", real: "Steak" },
  { type: "word", category: "Food", real: "Pasta" },
  { type: "word", category: "Food", real: "Spaghetti" },
  { type: "word", category: "Food", real: "Lasagna" },
  { type: "word", category: "Food", real: "Mac and Cheese" },
  { type: "word", category: "Food", real: "Ramen" },
  { type: "word", category: "Food", real: "Sushi" },
  { type: "word", category: "Food", real: "Dumplings" },
  { type: "word", category: "Food", real: "Spring Rolls" },
  { type: "word", category: "Food", real: "Fried Rice" },



  { type: "word", category: "Food", real: "Salad" },
  { type: "word", category: "Food", real: "Soup" },
  { type: "word", category: "Food", real: "Sandwich" },
  { type: "word", category: "Food", real: "Wrap" },
  { type: "word", category: "Food", real: "Bagel" },
  { type: "word", category: "Food", real: "Toast" },
  { type: "word", category: "Food", real: "Pancakes" },
  { type: "word", category: "Food", real: "Waffles" },
  { type: "word", category: "Food", real: "Omelette" },
  { type: "word", category: "Food", real: "Scrambled Eggs" },

  { type: "word", category: "Food", real: "Ice Cream" },
  { type: "word", category: "Food", real: "Cake" },
  { type: "word", category: "Food", real: "Brownies" },
  { type: "word", category: "Food", real: "Cookies" },
  { type: "word", category: "Food", real: "Donuts" },
  { type: "word", category: "Food", real: "Cupcakes" },
  { type: "word", category: "Food", real: "Cheesecake" },
  { type: "word", category: "Food", real: "Chocolate" },
  { type: "word", category: "Food", real: "Candy" },
  { type: "word", category: "Food", real: "Milkshake" },

  { type: "word", category: "Food", real: "Apple" },
  { type: "word", category: "Food", real: "Banana" },
  { type: "word", category: "Food", real: "Strawberries" },
  { type: "word", category: "Food", real: "Grapes" },
  { type: "word", category: "Food", real: "Watermelon" },
  { type: "word", category: "Food", real: "Pineapple" },
  { type: "word", category: "Food", real: "Mango" },
  { type: "word", category: "Food", real: "Orange" },
  { type: "word", category: "Food", real: "Blueberries" },
  { type: "word", category: "Food", real: "Peach" },

  // Places
  { type: "word", category: "Places", real: "Beach" },
{ type: "word", category: "Places", real: "Park" },
{ type: "word", category: "Places", real: "School" },
{ type: "word", category: "Places", real: "Mall" },
{ type: "word", category: "Places", real: "Restaurant" },
{ type: "word", category: "Places", real: "Movie Theater" },
{ type: "word", category: "Places", real: "Airport" },
{ type: "word", category: "Places", real: "Hotel" },
{ type: "word", category: "Places", real: "Gym" },
{ type: "word", category: "Places", real: "Library" },

{ type: "word", category: "Places", real: "Hospital" },
{ type: "word", category: "Places", real: "Doctor’s Office" },
{ type: "word", category: "Places", real: "Gas Station" },
{ type: "word", category: "Places", real: "Supermarket" },
{ type: "word", category: "Places", real: "Coffee Shop" },
{ type: "word", category: "Places", real: "Bakery" },
{ type: "word", category: "Places", real: "Pharmacy" },
{ type: "word", category: "Places", real: "Post Office" },
{ type: "word", category: "Places", real: "Bank" },
{ type: "word", category: "Places", real: "Barbershop" },

{ type: "word", category: "Places", real: "Hair Salon" },
{ type: "word", category: "Places", real: "Police Station" },
{ type: "word", category: "Places", real: "Fire Station" },
{ type: "word", category: "Places", real: "Stadium" },
{ type: "word", category: "Places", real: "Amusement Park" },
{ type: "word", category: "Places", real: "Zoo" },
{ type: "word", category: "Places", real: "Aquarium" },
{ type: "word", category: "Places", real: "Museum" },
{ type: "word", category: "Places", real: "Art Gallery" },
{ type: "word", category: "Places", real: "Concert Hall" },

{ type: "word", category: "Places", real: "Subway Station" },
{ type: "word", category: "Places", real: "Train Station" },
{ type: "word", category: "Places", real: "Bus Stop" },
{ type: "word", category: "Places", real: "Highway" },
{ type: "word", category: "Places", real: "Bridge" },
{ type: "word", category: "Places", real: "Tunnel" },
{ type: "word", category: "Places", real: "Parking Lot" },
{ type: "word", category: "Places", real: "Office" },
{ type: "word", category: "Places", real: "Classroom" },
{ type: "word", category: "Places", real: "Dorm Room" },

{ type: "word", category: "Places", real: "Apartment" },
{ type: "word", category: "Places", real: "House" },
{ type: "word", category: "Places", real: "Backyard" },
{ type: "word", category: "Places", real: "Playground" },
{ type: "word", category: "Places", real: "Basketball Court" },
{ type: "word", category: "Places", real: "Soccer Field" },
{ type: "word", category: "Places", real: "Swimming Pool" },
{ type: "word", category: "Places", real: "Lake" },
{ type: "word", category: "Places", real: "Mountain" },
{ type: "word", category: "Places", real: "Forest" },

  // Animals
 { type: "word", category: "Animals", real: "Dog" },
{ type: "word", category: "Animals", real: "Cat" },
{ type: "word", category: "Animals", real: "Elephant" },
{ type: "word", category: "Animals", real: "Tiger" },
{ type: "word", category: "Animals", real: "Lion" },
{ type: "word", category: "Animals", real: "Giraffe" },
{ type: "word", category: "Animals", real: "Zebra" },
{ type: "word", category: "Animals", real: "Bear" },
{ type: "word", category: "Animals", real: "Wolf" },
{ type: "word", category: "Animals", real: "Fox" },

{ type: "word", category: "Animals", real: "Kangaroo" },
{ type: "word", category: "Animals", real: "Koala" },
{ type: "word", category: "Animals", real: "Panda" },
{ type: "word", category: "Animals", real: "Monkey" },
{ type: "word", category: "Animals", real: "Gorilla" },
{ type: "word", category: "Animals", real: "Chimpanzee" },
{ type: "word", category: "Animals", real: "Sloth" },
{ type: "word", category: "Animals", real: "Leopard" },
{ type: "word", category: "Animals", real: "Cheetah" },
{ type: "word", category: "Animals", real: "Hyena" },

{ type: "word", category: "Animals", real: "Deer" },
{ type: "word", category: "Animals", real: "Moose" },
{ type: "word", category: "Animals", real: "Horse" },
{ type: "word", category: "Animals", real: "Cow" },
{ type: "word", category: "Animals", real: "Pig" },
{ type: "word", category: "Animals", real: "Sheep" },
{ type: "word", category: "Animals", real: "Goat" },
{ type: "word", category: "Animals", real: "Chicken" },
{ type: "word", category: "Animals", real: "Duck" },
{ type: "word", category: "Animals", real: "Turkey" },

{ type: "word", category: "Animals", real: "Eagle" },
{ type: "word", category: "Animals", real: "Hawk" },
{ type: "word", category: "Animals", real: "Owl" },
{ type: "word", category: "Animals", real: "Parrot" },
{ type: "word", category: "Animals", real: "Penguin" },
{ type: "word", category: "Animals", real: "Flamingo" },
{ type: "word", category: "Animals", real: "Peacock" },
{ type: "word", category: "Animals", real: "Swan" },
{ type: "word", category: "Animals", real: "Crow" },
{ type: "word", category: "Animals", real: "Seagull" },

{ type: "word", category: "Animals", real: "Shark" },
{ type: "word", category: "Animals", real: "Dolphin" },
{ type: "word", category: "Animals", real: "Whale" },
{ type: "word", category: "Animals", real: "Octopus" },
{ type: "word", category: "Animals", real: "Crab" },
{ type: "word", category: "Animals", real: "Lobster" },
{ type: "word", category: "Animals", real: "Jellyfish" },
{ type: "word", category: "Animals", real: "Starfish" },
{ type: "word", category: "Animals", real: "Seal" },
{ type: "word", category: "Animals", real: "Otter" },

  // Objects
  { type: "word", category: "Objects", real: "Phone" },
  { type: "word", category: "Objects", real: "Laptop" },

  // Entertainment
  { type: "word", category: "Entertainment", real: "Netflix" },
  { type: "word", category: "Entertainment", real: "TikTok" },

  // Sports
  { type: "word", category: "Sports", real: "Basketball" },
{ type: "word", category: "Sports", real: "Soccer" },
{ type: "word", category: "Sports", real: "Tennis" },
{ type: "word", category: "Sports", real: "Swimming" },
{ type: "word", category: "Sports", real: "Volleyball" },

{ type: "word", category: "Sports", real: "Baseball" },
{ type: "word", category: "Sports", real: "Softball" },
{ type: "word", category: "Sports", real: "Football" },
{ type: "word", category: "Sports", real: "Rugby" },
{ type: "word", category: "Sports", real: "Cricket" },

{ type: "word", category: "Sports", real: "Golf" },
{ type: "word", category: "Sports", real: "Hockey" },
{ type: "word", category: "Sports", real: "Field Hockey" },
{ type: "word", category: "Sports", real: "Lacrosse" },
{ type: "word", category: "Sports", real: "Badminton" },

{ type: "word", category: "Sports", real: "Table Tennis" },
{ type: "word", category: "Sports", real: "Ping Pong" },
{ type: "word", category: "Sports", real: "Squash" },
{ type: "word", category: "Sports", real: "Racquetball" },
{ type: "word", category: "Sports", real: "Bowling" },

{ type: "word", category: "Sports", real: "Boxing" },
{ type: "word", category: "Sports", real: "Wrestling" },
{ type: "word", category: "Sports", real: "MMA" },
{ type: "word", category: "Sports", real: "Judo" },
{ type: "word", category: "Sports", real: "Karate" },

{ type: "word", category: "Sports", real: "Taekwondo" },
{ type: "word", category: "Sports", real: "Fencing" },
{ type: "word", category: "Sports", real: "Archery" },
{ type: "word", category: "Sports", real: "Shooting" },
{ type: "word", category: "Sports", real: "Cycling" },

{ type: "word", category: "Sports", real: "BMX" },
{ type: "word", category: "Sports", real: "Skateboarding" },
{ type: "word", category: "Sports", real: "Surfing" },
{ type: "word", category: "Sports", real: "Snowboarding" },
{ type: "word", category: "Sports", real: "Skiing" },

{ type: "word", category: "Sports", real: "Ice Skating" },
{ type: "word", category: "Sports", real: "Figure Skating" },
{ type: "word", category: "Sports", real: "Speed Skating" },
{ type: "word", category: "Sports", real: "Track" },
{ type: "word", category: "Sports", real: "Cross Country" },

{ type: "word", category: "Sports", real: "Marathon" },
{ type: "word", category: "Sports", real: "Triathlon" },
{ type: "word", category: "Sports", real: "Rowing" },
{ type: "word", category: "Sports", real: "Kayaking" },
{ type: "word", category: "Sports", real: "Canoeing" },

{ type: "word", category: "Sports", real: "Rock Climbing" },
{ type: "word", category: "Sports", real: "Weightlifting" },
{ type: "word", category: "Sports", real: "Powerlifting" },
{ type: "word", category: "Sports", real: "Gymnastics" },
{ type: "word", category: "Sports", real: "Diving" },
{ type: "word", category: "Movies", real: "Spider-Man" },
{ type: "word", category: "Movies", real: "Avengers" },
{ type: "word", category: "Movies", real: "Iron Man" },
{ type: "word", category: "Movies", real: "Batman" },
{ type: "word", category: "Movies", real: "Superman" },

{ type: "word", category: "Movies", real: "Black Panther" },
{ type: "word", category: "Movies", real: "Thor" },
{ type: "word", category: "Movies", real: "Captain America" },
{ type: "word", category: "Movies", real: "Doctor Strange" },
{ type: "word", category: "Movies", real: "Guardians of the Galaxy" },

{ type: "word", category: "Movies", real: "Frozen" },
{ type: "word", category: "Movies", real: "Moana" },
{ type: "word", category: "Movies", real: "Tangled" },
{ type: "word", category: "Movies", real: "The Lion King" },
{ type: "word", category: "Movies", real: "Aladdin" },

{ type: "word", category: "Movies", real: "Toy Story" },
{ type: "word", category: "Movies", real: "Finding Nemo" },
{ type: "word", category: "Movies", real: "Cars" },
{ type: "word", category: "Movies", real: "Incredibles" },
{ type: "word", category: "Movies", real: "Up" },

{ type: "word", category: "Movies", real: "Shrek" },
{ type: "word", category: "Movies", real: "Madagascar" },
{ type: "word", category: "Movies", real: "Kung Fu Panda" },
{ type: "word", category: "Movies", real: "Despicable Me" },
{ type: "word", category: "Movies", real: "Minions" },

{ type: "word", category: "Movies", real: "Harry Potter" },
{ type: "word", category: "Movies", real: "Star Wars" },
{ type: "word", category: "Movies", real: "Jurassic Park" },
{ type: "word", category: "Movies", real: "Avatar" },
{ type: "word", category: "Movies", real: "Titanic" },

{ type: "word", category: "Movies", real: "The Dark Knight" },
{ type: "word", category: "Movies", real: "Joker" },
{ type: "word", category: "Movies", real: "Inception" },
{ type: "word", category: "Movies", real: "Interstellar" },
{ type: "word", category: "Movies", real: "The Matrix" },

{ type: "word", category: "Movies", real: "Fast and Furious" },
{ type: "word", category: "Movies", real: "Mission Impossible" },
{ type: "word", category: "Movies", real: "John Wick" },
{ type: "word", category: "Movies", real: "Transformers" },
{ type: "word", category: "Movies", real: "Pirates of the Caribbean" },

{ type: "word", category: "Movies", real: "The Hunger Games" },
{ type: "word", category: "Movies", real: "Twilight" },
{ type: "word", category: "Movies", real: "The Maze Runner" },
{ type: "word", category: "Movies", real: "Divergent" },
{ type: "word", category: "Movies", real: "Jumanji" },

{ type: "word", category: "Movies", real: "Home Alone" },
{ type: "word", category: "Movies", real: "The Grinch" },
{ type: "word", category: "Movies", real: "Elf" },

{ type: "word", category: "Objects", real: "Phone" },
{ type: "word", category: "Objects", real: "Laptop" },
{ type: "word", category: "Objects", real: "Tablet" },
{ type: "word", category: "Objects", real: "Headphones" },
{ type: "word", category: "Objects", real: "Charger" },

{ type: "word", category: "Objects", real: "Backpack" },
{ type: "word", category: "Objects", real: "Wallet" },
{ type: "word", category: "Objects", real: "Keys" },
{ type: "word", category: "Objects", real: "Sunglasses" },
{ type: "word", category: "Objects", real: "Watch" },

{ type: "word", category: "Objects", real: "Water Bottle" },
{ type: "word", category: "Objects", real: "Coffee Mug" },
{ type: "word", category: "Objects", real: "Plate" },
{ type: "word", category: "Objects", real: "Bowl" },
{ type: "word", category: "Objects", real: "Spoon" },

{ type: "word", category: "Objects", real: "Fork" },
{ type: "word", category: "Objects", real: "Knife" },
{ type: "word", category: "Objects", real: "Pan" },
{ type: "word", category: "Objects", real: "Pot" },
{ type: "word", category: "Objects", real: "Blender" },

{ type: "word", category: "Objects", real: "Microwave" },
{ type: "word", category: "Objects", real: "Fridge" },
{ type: "word", category: "Objects", real: "Oven" },
{ type: "word", category: "Objects", real: "Toaster" },
{ type: "word", category: "Objects", real: "Kettle" },

{ type: "word", category: "Objects", real: "Chair" },
{ type: "word", category: "Objects", real: "Table" },
{ type: "word", category: "Objects", real: "Desk" },
{ type: "word", category: "Objects", real: "Couch" },
{ type: "word", category: "Objects", real: "Bed" },

{ type: "word", category: "Objects", real: "Lamp" },
{ type: "word", category: "Objects", real: "Fan" },
{ type: "word", category: "Objects", real: "Clock" },
{ type: "word", category: "Objects", real: "Mirror" },
{ type: "word", category: "Objects", real: "Picture Frame" },

{ type: "word", category: "Objects", real: "Book" },
{ type: "word", category: "Objects", real: "Notebook" },
{ type: "word", category: "Objects", real: "Pencil" },
{ type: "word", category: "Objects", real: "Pen" },
{ type: "word", category: "Objects", real: "Marker" },

{ type: "word", category: "Objects", real: "Eraser" },
{ type: "word", category: "Objects", real: "Scissors" },
{ type: "word", category: "Objects", real: "Tape" },
{ type: "word", category: "Objects", real: "Stapler" },
{ type: "word", category: "Objects", real: "Calculator" },

{ type: "word", category: "Objects", real: "Remote" },
{ type: "word", category: "Objects", real: "TV" },
{ type: "word", category: "Objects", real: "Speaker" },
{ type: "word", category: "Objects", real: "Game Controller" },
{ type: "word", category: "Objects", real: "Camera" },

{ type: "word", category: "Athletes", real: "LeBron James" },
{ type: "word", category: "Athletes", real: "Michael Jordan" },
{ type: "word", category: "Athletes", real: "Kobe Bryant" },
{ type: "word", category: "Athletes", real: "Stephen Curry" },
{ type: "word", category: "Athletes", real: "Kevin Durant" },

{ type: "word", category: "Athletes", real: "Tom Brady" },
{ type: "word", category: "Athletes", real: "Patrick Mahomes" },
{ type: "word", category: "Athletes", real: "Peyton Manning" },
{ type: "word", category: "Athletes", real: "Aaron Rodgers" },
{ type: "word", category: "Athletes", real: "Lamar Jackson" },

{ type: "word", category: "Athletes", real: "Lionel Messi" },
{ type: "word", category: "Athletes", real: "Cristiano Ronaldo" },
{ type: "word", category: "Athletes", real: "Neymar" },
{ type: "word", category: "Athletes", real: "Kylian Mbappe" },
{ type: "word", category: "Athletes", real: "Erling Haaland" },

{ type: "word", category: "Athletes", real: "Serena Williams" },
{ type: "word", category: "Athletes", real: "Venus Williams" },
{ type: "word", category: "Athletes", real: "Roger Federer" },
{ type: "word", category: "Athletes", real: "Rafael Nadal" },
{ type: "word", category: "Athletes", real: "Novak Djokovic" },

{ type: "word", category: "Athletes", real: "Usain Bolt" },
{ type: "word", category: "Athletes", real: "Michael Phelps" },
{ type: "word", category: "Athletes", real: "Simone Biles" },
{ type: "word", category: "Athletes", real: "Katie Ledecky" },
{ type: "word", category: "Athletes", real: "Allyson Felix" },

{ type: "word", category: "Athletes", real: "Tiger Woods" },
{ type: "word", category: "Athletes", real: "Rory McIlroy" },
{ type: "word", category: "Athletes", real: "Phil Mickelson" },
{ type: "word", category: "Athletes", real: "Dustin Johnson" },
{ type: "word", category: "Athletes", real: "Brooks Koepka" },

{ type: "word", category: "Athletes", real: "Conor McGregor" },
{ type: "word", category: "Athletes", real: "Khabib Nurmagomedov" },
{ type: "word", category: "Athletes", real: "Jon Jones" },
{ type: "word", category: "Athletes", real: "Ronda Rousey" },
{ type: "word", category: "Athletes", real: "Israel Adesanya" },

{ type: "word", category: "Athletes", real: "Shohei Ohtani" },
{ type: "word", category: "Athletes", real: "Mike Trout" },
{ type: "word", category: "Athletes", real: "Derek Jeter" },
{ type: "word", category: "Athletes", real: "Babe Ruth" },
{ type: "word", category: "Athletes", real: "Mookie Betts" },

{ type: "word", category: "Athletes", real: "Lewis Hamilton" },
{ type: "word", category: "Athletes", real: "Max Verstappen" },
{ type: "word", category: "Athletes", real: "Sebastian Vettel" },
{ type: "word", category: "Athletes", real: "Fernando Alonso" },
{ type: "word", category: "Athletes", real: "Michael Schumacher" },

{ type: "word", category: "Athletes", real: "Wayne Gretzky" },
{ type: "word", category: "Athletes", real: "Sidney Crosby" },
{ type: "word", category: "Athletes", real: "Alex Ovechkin" },
{ type: "word", category: "Athletes", real: "Connor McDavid" },
{ type: "word", category: "Athletes", real: "Patrick Kane" },

{ type: "word", category: "Video Games", real: "Minecraft" },
{ type: "word", category: "Video Games", real: "Fortnite" },
{ type: "word", category: "Video Games", real: "Call of Duty" },
{ type: "word", category: "Video Games", real: "Grand Theft Auto" },
{ type: "word", category: "Video Games", real: "Roblox" },

{ type: "word", category: "Video Games", real: "Among Us" },
{ type: "word", category: "Video Games", real: "Valorant" },
{ type: "word", category: "Video Games", real: "Apex Legends" },
{ type: "word", category: "Video Games", real: "Overwatch" },
{ type: "word", category: "Video Games", real: "Counter Strike" },

{ type: "word", category: "Video Games", real: "League of Legends" },
{ type: "word", category: "Video Games", real: "Dota 2" },
{ type: "word", category: "Video Games", real: "Rocket League" },
{ type: "word", category: "Video Games", real: "Fall Guys" },
{ type: "word", category: "Video Games", real: "Rainbow Six Siege" },

{ type: "word", category: "Video Games", real: "FIFA" },
{ type: "word", category: "Video Games", real: "NBA 2K" },
{ type: "word", category: "Video Games", real: "Madden NFL" },
{ type: "word", category: "Video Games", real: "MLB The Show" },
{ type: "word", category: "Video Games", real: "WWE 2K" },

{ type: "word", category: "Video Games", real: "Super Mario Bros" },
{ type: "word", category: "Video Games", real: "Mario Kart" },
{ type: "word", category: "Video Games", real: "Super Smash Bros" },
{ type: "word", category: "Video Games", real: "The Legend of Zelda" },
{ type: "word", category: "Video Games", real: "Animal Crossing" },

{ type: "word", category: "Video Games", real: "Pokemon" },
{ type: "word", category: "Video Games", real: "Tetris" },
{ type: "word", category: "Video Games", real: "Pac Man" },
{ type: "word", category: "Video Games", real: "Sonic the Hedgehog" },
{ type: "word", category: "Video Games", real: "Donkey Kong" },

{ type: "word", category: "Video Games", real: "Halo" },
{ type: "word", category: "Video Games", real: "Destiny" },
{ type: "word", category: "Video Games", real: "The Last of Us" },
{ type: "word", category: "Video Games", real: "Uncharted" },
{ type: "word", category: "Video Games", real: "God of War" },

{ type: "word", category: "Video Games", real: "Elden Ring" },
{ type: "word", category: "Video Games", real: "Dark Souls" },
{ type: "word", category: "Video Games", real: "Sekiro" },
{ type: "word", category: "Video Games", real: "Bloodborne" },
{ type: "word", category: "Video Games", real: "Assassin's Creed" },

{ type: "word", category: "Video Games", real: "Far Cry" },
{ type: "word", category: "Video Games", real: "Red Dead Redemption" },
{ type: "word", category: "Video Games", real: "Cyberpunk 2077" },
{ type: "word", category: "Video Games", real: "The Witcher 3" },
{ type: "word", category: "Video Games", real: "Skyrim" },

{ type: "word", category: "Video Games", real: "Terraria" },
{ type: "word", category: "Video Games", real: "Clash of Clans" },
{ type: "word", category: "Video Games", real: "Clash Royale" },
{ type: "word", category: "Video Games", real: "Brawl Stars" },
{ type: "word", category: "Video Games", real: "Subway Surfers" },

{ type: "word", category: "Brands", real: "Nike" },
{ type: "word", category: "Brands", real: "Adidas" },
{ type: "word", category: "Brands", real: "Puma" },
{ type: "word", category: "Brands", real: "Under Armour" },
{ type: "word", category: "Brands", real: "New Balance" },

{ type: "word", category: "Brands", real: "Apple" },
{ type: "word", category: "Brands", real: "Samsung" },
{ type: "word", category: "Brands", real: "Google" },
{ type: "word", category: "Brands", real: "Microsoft" },
{ type: "word", category: "Brands", real: "Sony" },

{ type: "word", category: "Brands", real: "Amazon" },
{ type: "word", category: "Brands", real: "eBay" },
{ type: "word", category: "Brands", real: "Walmart" },
{ type: "word", category: "Brands", real: "Target" },
{ type: "word", category: "Brands", real: "Costco" },

{ type: "word", category: "Brands", real: "Coca Cola" },
{ type: "word", category: "Brands", real: "Pepsi" },
{ type: "word", category: "Brands", real: "Starbucks" },
{ type: "word", category: "Brands", real: "McDonald's" },
{ type: "word", category: "Brands", real: "Burger King" },

{ type: "word", category: "Brands", real: "KFC" },
{ type: "word", category: "Brands", real: "Subway" },
{ type: "word", category: "Brands", real: "Chipotle" },
{ type: "word", category: "Brands", real: "Domino's" },
{ type: "word", category: "Brands", real: "Pizza Hut" },

{ type: "word", category: "Brands", real: "Gucci" },
{ type: "word", category: "Brands", real: "Louis Vuitton" },
{ type: "word", category: "Brands", real: "Prada" },
{ type: "word", category: "Brands", real: "Versace" },
{ type: "word", category: "Brands", real: "Chanel" },

{ type: "word", category: "Brands", real: "Rolex" },
{ type: "word", category: "Brands", real: "Casio" },
{ type: "word", category: "Brands", real: "Ray Ban" },
{ type: "word", category: "Brands", real: "Oakley" },
{ type: "word", category: "Brands", real: "Levi's" },

{ type: "word", category: "Brands", real: "Zara" },
{ type: "word", category: "Brands", real: "H&M" },
{ type: "word", category: "Brands", real: "Uniqlo" },
{ type: "word", category: "Brands", real: "Forever 21" },
{ type: "word", category: "Brands", real: "Gap" },

{ type: "word", category: "Brands", real: "Tesla" },
{ type: "word", category: "Brands", real: "BMW" },
{ type: "word", category: "Brands", real: "Mercedes" },
{ type: "word", category: "Brands", real: "Toyota" },
{ type: "word", category: "Brands", real: "Honda" },

{ type: "word", category: "Brands", real: "Netflix" },
{ type: "word", category: "Brands", real: "YouTube" },
{ type: "word", category: "Brands", real: "TikTok" },
{ type: "word", category: "Brands", real: "Spotify" },
{ type: "word", category: "Brands", real: "Disney" },

{ type: "word", category: "Countries", real: "United States" },
{ type: "word", category: "Countries", real: "Canada" },
{ type: "word", category: "Countries", real: "Mexico" },
{ type: "word", category: "Countries", real: "Brazil" },
{ type: "word", category: "Countries", real: "Argentina" },

{ type: "word", category: "Countries", real: "United Kingdom" },
{ type: "word", category: "Countries", real: "France" },
{ type: "word", category: "Countries", real: "Germany" },
{ type: "word", category: "Countries", real: "Italy" },
{ type: "word", category: "Countries", real: "Spain" },

{ type: "word", category: "Countries", real: "Portugal" },
{ type: "word", category: "Countries", real: "Netherlands" },
{ type: "word", category: "Countries", real: "Belgium" },
{ type: "word", category: "Countries", real: "Switzerland" },
{ type: "word", category: "Countries", real: "Austria" },

{ type: "word", category: "Countries", real: "Sweden" },
{ type: "word", category: "Countries", real: "Norway" },
{ type: "word", category: "Countries", real: "Denmark" },
{ type: "word", category: "Countries", real: "Finland" },
{ type: "word", category: "Countries", real: "Poland" },

{ type: "word", category: "Countries", real: "Russia" },
{ type: "word", category: "Countries", real: "Ukraine" },
{ type: "word", category: "Countries", real: "Greece" },
{ type: "word", category: "Countries", real: "Turkey" },
{ type: "word", category: "Countries", real: "Egypt" },

{ type: "word", category: "Countries", real: "South Africa" },
{ type: "word", category: "Countries", real: "Nigeria" },
{ type: "word", category: "Countries", real: "Kenya" },
{ type: "word", category: "Countries", real: "Morocco" },
{ type: "word", category: "Countries", real: "Ethiopia" },

{ type: "word", category: "Countries", real: "India" },
{ type: "word", category: "Countries", real: "China" },
{ type: "word", category: "Countries", real: "Japan" },
{ type: "word", category: "Countries", real: "South Korea" },
{ type: "word", category: "Countries", real: "Thailand" },

{ type: "word", category: "Countries", real: "Vietnam" },
{ type: "word", category: "Countries", real: "Indonesia" },
{ type: "word", category: "Countries", real: "Philippines" },
{ type: "word", category: "Countries", real: "Malaysia" },
{ type: "word", category: "Countries", real: "Singapore" },

{ type: "word", category: "Countries", real: "Australia" },
{ type: "word", category: "Countries", real: "New Zealand" },
{ type: "word", category: "Countries", real: "Saudi Arabia" },
{ type: "word", category: "Countries", real: "United Arab Emirates" },
{ type: "word", category: "Countries", real: "Israel" },

{ type: "word", category: "Countries", real: "Pakistan" },
{ type: "word", category: "Countries", real: "Bangladesh" },
{ type: "word", category: "Countries", real: "Nepal" },
{ type: "word", category: "Countries", real: "Sri Lanka" },
{ type: "word", category: "Countries", real: "Afghanistan" },

{ type: "word", category: "Sports Team", real: "Los Angeles Lakers" },
{ type: "word", category: "Sports Team", real: "Golden State Warriors" },
{ type: "word", category: "Sports Team", real: "Chicago Bulls" },
{ type: "word", category: "Sports Team", real: "Boston Celtics" },
{ type: "word", category: "Sports Team", real: "Miami Heat" },
{ type: "word", category: "Sports Team", real: "New York Knicks" },
{ type: "word", category: "Sports Team", real: "Brooklyn Nets" },
{ type: "word", category: "Sports Team", real: "Milwaukee Bucks" },
{ type: "word", category: "Sports Team", real: "Dallas Mavericks" },
{ type: "word", category: "Sports Team", real: "Phoenix Suns" },

{ type: "word", category: "Sports Team", real: "New England Patriots" },
{ type: "word", category: "Sports Team", real: "Dallas Cowboys" },
{ type: "word", category: "Sports Team", real: "Kansas City Chiefs" },
{ type: "word", category: "Sports Team", real: "Green Bay Packers" },
{ type: "word", category: "Sports Team", real: "San Francisco 49ers" },
{ type: "word", category: "Sports Team", real: "Philadelphia Eagles" },
{ type: "word", category: "Sports Team", real: "Pittsburgh Steelers" },
{ type: "word", category: "Sports Team", real: "Baltimore Ravens" },
{ type: "word", category: "Sports Team", real: "Buffalo Bills" },
{ type: "word", category: "Sports Team", real: "Denver Broncos" },

{ type: "word", category: "Sports Team", real: "New York Yankees" },
{ type: "word", category: "Sports Team", real: "Boston Red Sox" },
{ type: "word", category: "Sports Team", real: "Los Angeles Dodgers" },
{ type: "word", category: "Sports Team", real: "Chicago Cubs" },
{ type: "word", category: "Sports Team", real: "San Francisco Giants" },
{ type: "word", category: "Sports Team", real: "Houston Astros" },
{ type: "word", category: "Sports Team", real: "Atlanta Braves" },
{ type: "word", category: "Sports Team", real: "St. Louis Cardinals" },
{ type: "word", category: "Sports Team", real: "New York Mets" },
{ type: "word", category: "Sports Team", real: "Philadelphia Phillies" },

{ type: "word", category: "Sports Team", real: "Manchester United" },
{ type: "word", category: "Sports Team", real: "Manchester City" },
{ type: "word", category: "Sports Team", real: "Real Madrid" },
{ type: "word", category: "Sports Team", real: "FC Barcelona" },
{ type: "word", category: "Sports Team", real: "Liverpool FC" },
{ type: "word", category: "Sports Team", real: "Chelsea FC" },
{ type: "word", category: "Sports Team", real: "Arsenal FC" },
{ type: "word", category: "Sports Team", real: "Bayern Munich" },
{ type: "word", category: "Sports Team", real: "Paris Saint-Germain" },
{ type: "word", category: "Sports Team", real: "Juventus" },

{ type: "word", category: "Sports Team", real: "Toronto Raptors" },
{ type: "word", category: "Sports Team", real: "Chicago Blackhawks" },
{ type: "word", category: "Sports Team", real: "Detroit Red Wings" },
{ type: "word", category: "Sports Team", real: "New York Rangers" },
{ type: "word", category: "Sports Team", real: "Pittsburgh Penguins" },
{ type: "word", category: "Sports Team", real: "Tampa Bay Lightning" },
{ type: "word", category: "Sports Team", real: "Vegas Golden Knights" },
{ type: "word", category: "Sports Team", real: "Los Angeles Kings" },
{ type: "word", category: "Sports Team", real: "Edmonton Oilers" },
{ type: "word", category: "Sports Team", real: "Colorado Avalanche" },
{ type: "word", category: "Profession", real: "Doctor" },
{ type: "word", category: "Profession", real: "Nurse" },
{ type: "word", category: "Profession", real: "Teacher" },
{ type: "word", category: "Profession", real: "Engineer" },
{ type: "word", category: "Profession", real: "Lawyer" },
{ type: "word", category: "Profession", real: "Accountant" },
{ type: "word", category: "Profession", real: "Pharmacist" },
{ type: "word", category: "Profession", real: "Dentist" },
{ type: "word", category: "Profession", real: "Architect" },
{ type: "word", category: "Profession", real: "Scientist" },

{ type: "word", category: "Profession", real: "Software Developer" },
{ type: "word", category: "Profession", real: "Data Scientist" },
{ type: "word", category: "Profession", real: "Mechanical Engineer" },
{ type: "word", category: "Profession", real: "Civil Engineer" },
{ type: "word", category: "Profession", real: "Electrician" },
{ type: "word", category: "Profession", real: "Plumber" },
{ type: "word", category: "Profession", real: "Carpenter" },
{ type: "word", category: "Profession", real: "Construction Worker" },
{ type: "word", category: "Profession", real: "Pilot" },
{ type: "word", category: "Profession", real: "Flight Attendant" },

{ type: "word", category: "Profession", real: "Police Officer" },
{ type: "word", category: "Profession", real: "Firefighter" },
{ type: "word", category: "Profession", real: "Paramedic" },
{ type: "word", category: "Profession", real: "Psychologist" },
{ type: "word", category: "Profession", real: "Therapist" },
{ type: "word", category: "Profession", real: "Social Worker" },
{ type: "word", category: "Profession", real: "Journalist" },
{ type: "word", category: "Profession", real: "Photographer" },
{ type: "word", category: "Profession", real: "Graphic Designer" },
{ type: "word", category: "Profession", real: "Animator" },

{ type: "word", category: "Profession", real: "Chef" },
{ type: "word", category: "Profession", real: "Waiter" },
{ type: "word", category: "Profession", real: "Barista" },
{ type: "word", category: "Profession", real: "Hairdresser" },
{ type: "word", category: "Profession", real: "Makeup Artist" },
{ type: "word", category: "Profession", real: "Fashion Designer" },
{ type: "word", category: "Profession", real: "Real Estate Agent" },
{ type: "word", category: "Profession", real: "Marketing Manager" },
{ type: "word", category: "Profession", real: "Salesperson" },
{ type: "word", category: "Profession", real: "Entrepreneur" },

{ type: "word", category: "Profession", real: "Farmer" },
{ type: "word", category: "Profession", real: "Veterinarian" },
{ type: "word", category: "Profession", real: "Biologist" },
{ type: "word", category: "Profession", real: "Chemist" },
{ type: "word", category: "Profession", real: "Physicist" },
{ type: "word", category: "Profession", real: "Historian" },
{ type: "word", category: "Profession", real: "Librarian" },
{ type: "word", category: "Profession", real: "Translator" },
{ type: "word", category: "Profession", real: "Interpreter" },
{ type: "word", category: "Profession", real: "Consultant" },
{ type: "word", category: "Tool", real: "Hammer" },
{ type: "word", category: "Tool", real: "Screwdriver" },
{ type: "word", category: "Tool", real: "Wrench" },
{ type: "word", category: "Tool", real: "Pliers" },
{ type: "word", category: "Tool", real: "Drill" },
{ type: "word", category: "Tool", real: "Saw" },
{ type: "word", category: "Tool", real: "Level" },
{ type: "word", category: "Tool", real: "Tape Measure" },
{ type: "word", category: "Tool", real: "Utility Knife" },
{ type: "word", category: "Tool", real: "Chisel" },

{ type: "word", category: "Tool", real: "Socket Wrench" },
{ type: "word", category: "Tool", real: "Allen Key" },
{ type: "word", category: "Tool", real: "Crowbar" },
{ type: "word", category: "Tool", real: "Mallet" },
{ type: "word", category: "Tool", real: "Clamp" },
{ type: "word", category: "Tool", real: "Vice" },
{ type: "word", category: "Tool", real: "Sander" },
{ type: "word", category: "Tool", real: "Angle Grinder" },
{ type: "word", category: "Tool", real: "Staple Gun" },
{ type: "word", category: "Tool", real: "Caulking Gun" },

{ type: "word", category: "Tool", real: "Paint Brush" },
{ type: "word", category: "Tool", real: "Paint Roller" },
{ type: "word", category: "Tool", real: "Ladder" },
{ type: "word", category: "Tool", real: "Shovel" },
{ type: "word", category: "Tool", real: "Rake" },
{ type: "word", category: "Tool", real: "Hoe" },
{ type: "word", category: "Tool", real: "Trowel" },
{ type: "word", category: "Tool", real: "Wheelbarrow" },
{ type: "word", category: "Tool", real: "Leaf Blower" },
{ type: "word", category: "Tool", real: "Hedge Trimmer" },

{ type: "word", category: "Tool", real: "Chainsaw" },
{ type: "word", category: "Tool", real: "Lawn Mower" },
{ type: "word", category: "Tool", real: "Pressure Washer" },
{ type: "word", category: "Tool", real: "Multimeter" },
{ type: "word", category: "Tool", real: "Soldering Iron" },
{ type: "word", category: "Tool", real: "Wire Stripper" },
{ type: "word", category: "Tool", real: "Crimping Tool" },
{ type: "word", category: "Tool", real: "Flashlight" },
{ type: "word", category: "Tool", real: "Headlamp" },
{ type: "word", category: "Tool", real: "Heat Gun" },

{ type: "word", category: "Tool", real: "Glue Gun" },
{ type: "word", category: "Tool", real: "Dremel" },
{ type: "word", category: "Tool", real: "Router" },
{ type: "word", category: "Tool", real: "Planer" },
{ type: "word", category: "Tool", real: "Nail Gun" },
{ type: "word", category: "Tool", real: "Air Compressor" },
{ type: "word", category: "Tool", real: "Torque Wrench" },
{ type: "word", category: "Tool", real: "Pipe Cutter" },
{ type: "word", category: "Tool", real: "Bolt Cutter" },
{ type: "word", category: "Tool", real: "Tile Cutter" },
{ type: "word", category: "Vehicle", real: "Car" },
{ type: "word", category: "Vehicle", real: "Truck" },
{ type: "word", category: "Vehicle", real: "Bus" },
{ type: "word", category: "Vehicle", real: "Motorcycle" },
{ type: "word", category: "Vehicle", real: "Bicycle" },
{ type: "word", category: "Vehicle", real: "Scooter" },
{ type: "word", category: "Vehicle", real: "Van" },
{ type: "word", category: "Vehicle", real: "Taxi" },
{ type: "word", category: "Vehicle", real: "Limousine" },
{ type: "word", category: "Vehicle", real: "Pickup Truck" },

{ type: "word", category: "Vehicle", real: "Fire Truck" },
{ type: "word", category: "Vehicle", real: "Ambulance" },
{ type: "word", category: "Vehicle", real: "Police Car" },
{ type: "word", category: "Vehicle", real: "Garbage Truck" },
{ type: "word", category: "Vehicle", real: "Tow Truck" },
{ type: "word", category: "Vehicle", real: "Cement Mixer" },
{ type: "word", category: "Vehicle", real: "Forklift" },
{ type: "word", category: "Vehicle", real: "Bulldozer" },
{ type: "word", category: "Vehicle", real: "Excavator" },
{ type: "word", category: "Vehicle", real: "Tractor" },

{ type: "word", category: "Vehicle", real: "Train" },
{ type: "word", category: "Vehicle", real: "Subway" },
{ type: "word", category: "Vehicle", real: "Tram" },
{ type: "word", category: "Vehicle", real: "Monorail" },
{ type: "word", category: "Vehicle", real: "High-Speed Train" },
{ type: "word", category: "Vehicle", real: "Airplane" },
{ type: "word", category: "Vehicle", real: "Helicopter" },
{ type: "word", category: "Vehicle", real: "Private Jet" },
{ type: "word", category: "Vehicle", real: "Glider" },
{ type: "word", category: "Vehicle", real: "Hot Air Balloon" },

{ type: "word", category: "Vehicle", real: "Boat" },
{ type: "word", category: "Vehicle", real: "Ship" },
{ type: "word", category: "Vehicle", real: "Yacht" },
{ type: "word", category: "Vehicle", real: "Submarine" },
{ type: "word", category: "Vehicle", real: "Jet Ski" },
{ type: "word", category: "Vehicle", real: "Canoe" },
{ type: "word", category: "Vehicle", real: "Kayak" },
{ type: "word", category: "Vehicle", real: "Ferry" },
{ type: "word", category: "Vehicle", real: "Cargo Ship" },
{ type: "word", category: "Vehicle", real: "Sailboat" },

{ type: "word", category: "Vehicle", real: "Skateboard" },
{ type: "word", category: "Vehicle", real: "Hoverboard" },
{ type: "word", category: "Vehicle", real: "Segway" },
{ type: "word", category: "Vehicle", real: "ATV" },
{ type: "word", category: "Vehicle", real: "Snowmobile" },
{ type: "word", category: "Vehicle", real: "Golf Cart" },
{ type: "word", category: "Vehicle", real: "RV" },
{ type: "word", category: "Vehicle", real: "Camper Van" },
{ type: "word", category: "Vehicle", real: "Food Truck" },
{ type: "word", category: "Vehicle", real: "Delivery Van" },

{ type: "word", category: "Fear", real: "Heights" },
{ type: "word", category: "Fear", real: "Spiders" },
{ type: "word", category: "Fear", real: "Snakes" },
{ type: "word", category: "Fear", real: "Darkness" },
{ type: "word", category: "Fear", real: "Flying" },
{ type: "word", category: "Fear", real: "Public Speaking" },
{ type: "word", category: "Fear", real: "Crowds" },
{ type: "word", category: "Fear", real: "Small Spaces" },
{ type: "word", category: "Fear", real: "Open Spaces" },
{ type: "word", category: "Fear", real: "Water" },

{ type: "word", category: "Fear", real: "Drowning" },
{ type: "word", category: "Fear", real: "Fire" },
{ type: "word", category: "Fear", real: "Thunder" },
{ type: "word", category: "Fear", real: "Lightning" },
{ type: "word", category: "Fear", real: "Storms" },
{ type: "word", category: "Fear", real: "Dogs" },
{ type: "word", category: "Fear", real: "Insects" },
{ type: "word", category: "Fear", real: "Needles" },
{ type: "word", category: "Fear", real: "Blood" },
{ type: "word", category: "Fear", real: "Hospitals" },

{ type: "word", category: "Fear", real: "Failure" },
{ type: "word", category: "Fear", real: "Rejection" },
{ type: "word", category: "Fear", real: "Loneliness" },
{ type: "word", category: "Fear", real: "Abandonment" },
{ type: "word", category: "Fear", real: "Judgment" },
{ type: "word", category: "Fear", real: "Embarrassment" },
{ type: "word", category: "Fear", real: "Change" },
{ type: "word", category: "Fear", real: "Uncertainty" },
{ type: "word", category: "Fear", real: "Loss" },
{ type: "word", category: "Fear", real: "Death" },

{ type: "word", category: "Fear", real: "Aging" },
{ type: "word", category: "Fear", real: "Illness" },
{ type: "word", category: "Fear", real: "Pain" },
{ type: "word", category: "Fear", real: "Injury" },
{ type: "word", category: "Fear", real: "Being Alone" },
{ type: "word", category: "Fear", real: "Being Watched" },
{ type: "word", category: "Fear", real: "Clowns" },
{ type: "word", category: "Fear", real: "Ghosts" },
{ type: "word", category: "Fear", real: "The Supernatural" },
{ type: "word", category: "Fear", real: "Silence" },

{ type: "word", category: "Fear", real: "Loud Noises" },
{ type: "word", category: "Fear", real: "Failure at School" },
{ type: "word", category: "Fear", real: "Speaking Up" },
{ type: "word", category: "Fear", real: "Responsibility" },
{ type: "word", category: "Fear", real: "Commitment" },
{ type: "word", category: "Fear", real: "Success" },
{ type: "word", category: "Fear", real: "Technology" },
{ type: "word", category: "Fear", real: "The Unknown" },
{ type: "word", category: "Fear", real: "Being Ignored" },
{ type: "word", category: "Fear", real: "Being Trapped" },
{ type: "word", category: "City", real: "New York City" },
{ type: "word", category: "City", real: "Los Angeles" },
{ type: "word", category: "City", real: "Chicago" },
{ type: "word", category: "City", real: "Houston" },
{ type: "word", category: "City", real: "Miami" },
{ type: "word", category: "City", real: "San Francisco" },
{ type: "word", category: "City", real: "Las Vegas" },
{ type: "word", category: "City", real: "Seattle" },
{ type: "word", category: "City", real: "Boston" },
{ type: "word", category: "City", real: "Washington DC" },

{ type: "word", category: "City", real: "Toronto" },
{ type: "word", category: "City", real: "Vancouver" },
{ type: "word", category: "City", real: "Montreal" },
{ type: "word", category: "City", real: "Mexico City" },
{ type: "word", category: "City", real: "Cancun" },
{ type: "word", category: "City", real: "London" },
{ type: "word", category: "City", real: "Paris" },
{ type: "word", category: "City", real: "Berlin" },
{ type: "word", category: "City", real: "Madrid" },
{ type: "word", category: "City", real: "Rome" },

{ type: "word", category: "City", real: "Barcelona" },
{ type: "word", category: "City", real: "Amsterdam" },
{ type: "word", category: "City", real: "Dublin" },
{ type: "word", category: "City", real: "Prague" },
{ type: "word", category: "City", real: "Vienna" },
{ type: "word", category: "City", real: "Budapest" },
{ type: "word", category: "City", real: "Athens" },
{ type: "word", category: "City", real: "Istanbul" },
{ type: "word", category: "City", real: "Dubai" },
{ type: "word", category: "City", real: "Doha" },

{ type: "word", category: "City", real: "Mumbai" },
{ type: "word", category: "City", real: "Delhi" },
{ type: "word", category: "City", real: "Bangalore" },
{ type: "word", category: "City", real: "Tokyo" },
{ type: "word", category: "City", real: "Osaka" },
{ type: "word", category: "City", real: "Seoul" },
{ type: "word", category: "City", real: "Beijing" },
{ type: "word", category: "City", real: "Shanghai" },
{ type: "word", category: "City", real: "Hong Kong" },
{ type: "word", category: "City", real: "Singapore" },

{ type: "word", category: "City", real: "Sydney" },
{ type: "word", category: "City", real: "Melbourne" },
{ type: "word", category: "City", real: "Auckland" },
{ type: "word", category: "City", real: "Cape Town" },
{ type: "word", category: "City", real: "Johannesburg" },
{ type: "word", category: "City", real: "Rio de Janeiro" },
{ type: "word", category: "City", real: "Sao Paulo" },
{ type: "word", category: "City", real: "Buenos Aires" },
{ type: "word", category: "City", real: "Lima" },
{ type: "word", category: "City", real: "Santiago" },
{ type: "word", category: "Education", real: "Classroom" },
{ type: "word", category: "Education", real: "Teacher" },
{ type: "word", category: "Education", real: "Student" },
{ type: "word", category: "Education", real: "Homework" },
{ type: "word", category: "Education", real: "Exam" },
{ type: "word", category: "Education", real: "Quiz" },
{ type: "word", category: "Education", real: "Grade" },
{ type: "word", category: "Education", real: "Report Card" },
{ type: "word", category: "Education", real: "Assignment" },

{ type: "word", category: "Education", real: "Lecture" },
{ type: "word", category: "Education", real: "Syllabus" },
{ type: "word", category: "Education", real: "Curriculum" },
{ type: "word", category: "Education", real: "Textbook" },
{ type: "word", category: "Education", real: "Notebook" },
{ type: "word", category: "Education", real: "Pencil" },
{ type: "word", category: "Education", real: "Pen" },
{ type: "word", category: "Education", real: "Backpack" },
{ type: "word", category: "Education", real: "Locker" },
{ type: "word", category: "Education", real: "Desk" },

{ type: "word", category: "Education", real: "Whiteboard" },
{ type: "word", category: "Education", real: "Chalkboard" },
{ type: "word", category: "Education", real: "Projector" },
{ type: "word", category: "Education", real: "Presentation" },
{ type: "word", category: "Education", real: "Research" },
{ type: "word", category: "Education", real: "Essay" },
{ type: "word", category: "Education", real: "Thesis" },
{ type: "word", category: "Education", real: "Library" },
{ type: "word", category: "Education", real: "Study" },
{ type: "word", category: "Education", real: "Review" },

{ type: "word", category: "Education", real: "Schedule" },
{ type: "word", category: "Education", real: "Semester" },
{ type: "word", category: "Education", real: "Finals" },
{ type: "word", category: "Education", real: "Midterm" },
{ type: "word", category: "Education", real: "Attendance" },
{ type: "word", category: "Education", real: "Participation" },
{ type: "word", category: "Education", real: "Discussion" },
{ type: "word", category: "Education", real: "Group Project" },
{ type: "word", category: "Education", real: "Lab" },
{ type: "word", category: "Education", real: "Experiment" },

{ type: "word", category: "Education", real: "Graduation" },
{ type: "word", category: "Education", real: "Diploma" },
{ type: "word", category: "Education", real: "Degree" },
{ type: "word", category: "Education", real: "Major" },
{ type: "word", category: "Education", real: "Minor" },
{ type: "word", category: "Education", real: "Advisor" },
{ type: "word", category: "Education", real: "Tuition" },
{ type: "word", category: "Education", real: "Scholarship" },
{ type: "word", category: "Education", real: "Internship" },
{ type: "word", category: "Education", real: "Campus" },

  // 🔥 NEW RANGE QUESTIONS
  {
    type: "range",
    category: "Personal",
    prompt: "How many siblings do you wish you had?",
    imposterPrompt: "Give a number from 0 to 6"
  },
  {
  type: "range",
  category: "Personal",
  prompt: "How many siblings do you wish you had?",
  imposterPrompt: "Give a number from 0 to 6"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hours of sleep do you ideally want each night?",
  imposterPrompt: "Give a number from 4 to 12"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many close friends do you think is the perfect amount?",
  imposterPrompt: "Give a number from 1 to 15"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many times a week would you like to go out?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many vacations would you take per year if you could?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hours a day do you wish you spent on your phone?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many pets would you ideally have?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many times a week would you work out in your ideal life?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hours would you study per day in your ideal routine?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hobbies would you like to have?",
  imposterPrompt: "Give a number from 1 to 10"
},

{
  type: "range",
  category: "Personal",
  prompt: "How many concerts would you go to each year if you could?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hours of free time do you wish you had daily?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many times a week would you eat out in your ideal life?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many countries would you want to visit in your lifetime?",
  imposterPrompt: "Give a number from 1 to 50"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hours would you spend gaming per week ideally?",
  imposterPrompt: "Give a number from 0 to 40"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many classes would you take per semester in your ideal schedule?",
  imposterPrompt: "Give a number from 2 to 8"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many times would you travel per year in your ideal life?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many hours would you spend watching shows per day ideally?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many people would be in your ideal friend group?",
  imposterPrompt: "Give a number from 2 to 20"
},
{
  type: "range",
  category: "Personal",
  prompt: "How many days a week would you relax with no responsibilities?",
  imposterPrompt: "Give a number from 0 to 7"
},
  {
    type: "range",
    category: "Food",
    prompt: "How many slices of pizza can you eat?",
    imposterPrompt: "Give a number from 1 to 10"
  },
  {
  type: "range",
  category: "Food",
  prompt: "How many slices of pizza would you eat in your ideal meal?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Food",
  prompt: "How many tacos could you eat in one sitting?",
  imposterPrompt: "Give a number from 1 to 12"
},
{
  type: "range",
  category: "Food",
  prompt: "How many chicken wings would you eat at once?",
  imposterPrompt: "Give a number from 5 to 30"
},
{
  type: "range",
  category: "Food",
  prompt: "How many scoops of ice cream would you want?",
  imposterPrompt: "Give a number from 1 to 5"
},
{
  type: "range",
  category: "Food",
  prompt: "How many burgers could you eat in one meal?",
  imposterPrompt: "Give a number from 1 to 5"
},
{
  type: "range",
  category: "Food",
  prompt: "How many plates of pasta would you eat if you were really hungry?",
  imposterPrompt: "Give a number from 1 to 4"
},
{
  type: "range",
  category: "Food",
  prompt: "How many donuts could you eat in one sitting?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Food",
  prompt: "How many sushi rolls would you order for yourself?",
  imposterPrompt: "Give a number from 1 to 8"
},
{
  type: "range",
  category: "Food",
  prompt: "How many cups of coffee would you drink in a day if you could?",
  imposterPrompt: "Give a number from 0 to 8"
},
{
  type: "range",
  category: "Food",
  prompt: "How many snacks do you eat in a typical day?",
  imposterPrompt: "Give a number from 0 to 10"
},

{
  type: "range",
  category: "Food",
  prompt: "How many times a week would you eat fast food ideally?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Food",
  prompt: "How many desserts would you have per week in your ideal life?",
  imposterPrompt: "Give a number from 0 to 14"
},
{
  type: "range",
  category: "Food",
  prompt: "How many glasses of soda would you drink per day if you could?",
  imposterPrompt: "Give a number from 0 to 8"
},
{
  type: "range",
  category: "Food",
  prompt: "How many meals would you eat per day ideally?",
  imposterPrompt: "Give a number from 2 to 6"
},
{
  type: "range",
  category: "Food",
  prompt: "How many different cuisines would you eat in a week?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Food",
  prompt: "How many times a week would you cook at home?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Food",
  prompt: "How many fruits would you eat in a day ideally?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Food",
  prompt: "How many vegetables would you include in a meal ideally?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Food",
  prompt: "How many times a week would you eat sweets?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Food",
  prompt: "How many cheat meals would you have per week?",
  imposterPrompt: "Give a number from 0 to 7"
},
  {
    type: "range",
    category: "School",
    prompt: "How many hours did you study this week?",
    imposterPrompt: "Give a number from 0 to 30"
  },
  {
  type: "range",
  category: "School",
  prompt: "How many hours would you ideally study in a week?",
  imposterPrompt: "Give a number from 0 to 30"
},
{
  type: "range",
  category: "School",
  prompt: "How many classes would you take in your ideal semester?",
  imposterPrompt: "Give a number from 2 to 8"
},
{
  type: "range",
  category: "School",
  prompt: "How many hours a day would you spend on homework ideally?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many assignments do you think is manageable per week?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "School",
  prompt: "How many exams would you be okay having in one week?",
  imposterPrompt: "Give a number from 0 to 5"
},
{
  type: "range",
  category: "School",
  prompt: "How many hours would you want your school day to be?",
  imposterPrompt: "Give a number from 4 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many group projects would you prefer per semester?",
  imposterPrompt: "Give a number from 0 to 5"
},
{
  type: "range",
  category: "School",
  prompt: "How many hours would you spend studying for a big exam?",
  imposterPrompt: "Give a number from 1 to 20"
},
{
  type: "range",
  category: "School",
  prompt: "How many classes do you think is too many in one day?",
  imposterPrompt: "Give a number from 3 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many days a week would you go to school in your ideal schedule?",
  imposterPrompt: "Give a number from 1 to 7"
},

{
  type: "range",
  category: "School",
  prompt: "How many hours of free time would you want after school each day?",
  imposterPrompt: "Give a number from 0 to 8"
},
{
  type: "range",
  category: "School",
  prompt: "How many clubs would you join in your ideal school life?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many presentations would you be okay doing per semester?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many hours would you spend on campus daily?",
  imposterPrompt: "Give a number from 2 to 12"
},
{
  type: "range",
  category: "School",
  prompt: "How many study breaks would you take in one session?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many hours would you study the night before an exam?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "School",
  prompt: "How many teachers would you want to have in a day?",
  imposterPrompt: "Give a number from 2 to 8"
},
{
  type: "range",
  category: "School",
  prompt: "How many times a week would you go to office hours ideally?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "School",
  prompt: "How many hours would you spend on one assignment ideally?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "School",
  prompt: "How many late nights per week would you tolerate for school?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many days a week would you work out in your ideal routine?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many hours would you spend at the gym per session?",
  imposterPrompt: "Give a number from 0 to 3"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many exercises would you include in one workout?",
  imposterPrompt: "Give a number from 3 to 12"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many reps do you think is ideal per set?",
  imposterPrompt: "Give a number from 5 to 20"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many sets would you do for one exercise?",
  imposterPrompt: "Give a number from 2 to 6"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many minutes would you spend doing cardio?",
  imposterPrompt: "Give a number from 0 to 60"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many rest days would you take per week?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many steps would you aim for in a day?",
  imposterPrompt: "Give a number from 2000 to 20000"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many hours of sleep do you aim for to recover?",
  imposterPrompt: "Give a number from 4 to 10"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many days would you dedicate to strength training weekly?",
  imposterPrompt: "Give a number from 0 to 7"
},

{
  type: "range",
  category: "Fitness",
  prompt: "How many days would you do cardio per week?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many minutes would your ideal workout last?",
  imposterPrompt: "Give a number from 20 to 120"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many calories would you burn in a workout ideally?",
  imposterPrompt: "Give a number from 100 to 1000"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many exercises would you do for one muscle group?",
  imposterPrompt: "Give a number from 2 to 8"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many times a week would you stretch or do mobility work?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many minutes would you spend warming up?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many minutes would you spend cooling down after a workout?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many workouts would you skip in a month realistically?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many hours per week would you spend being active?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Fitness",
  prompt: "How many different workouts would you rotate through weekly?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many sports would you play in your ideal life?",
  imposterPrompt: "Give a number from 0 to 5"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many hours would you spend practicing a sport each week?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many games would you want to play in a season?",
  imposterPrompt: "Give a number from 1 to 30"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many times a week would you train for a sport?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many sports games would you watch per week?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many hours would you spend watching sports in a week?",
  imposterPrompt: "Give a number from 0 to 30"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many positions would you try in a sport?",
  imposterPrompt: "Give a number from 1 to 5"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many teammates would you prefer on your team?",
  imposterPrompt: "Give a number from 3 to 20"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many championships would you want to win in your career?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many hours would you practice before a big game?",
  imposterPrompt: "Give a number from 0 to 10"
},

{
  type: "range",
  category: "Sports",
  prompt: "How many sports highlights would you watch in a day?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many different sports would you follow regularly?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many hours would you spend at a live sports event?",
  imposterPrompt: "Give a number from 1 to 6"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many practices would you have per week ideally?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many sports-related injuries would you expect in a season?",
  imposterPrompt: "Give a number from 0 to 5"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many days would you rest during a sports season?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many hours would you train in the offseason weekly?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many sports events would you attend per year?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many skills would you want to master in a sport?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Sports",
  prompt: "How many minutes would your ideal game last?",
  imposterPrompt: "Give a number from 10 to 120"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you game in a day ideally?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you game in a week?",
  imposterPrompt: "Give a number from 0 to 40"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many games would you play regularly at once?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you spend on one game per session?",
  imposterPrompt: "Give a number from 0 to 8"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many matches would you play in one sitting?",
  imposterPrompt: "Give a number from 1 to 20"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many new games would you try each month?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you spend grinding in a game?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many friends would you play with regularly?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you spend watching gaming content?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many times would you rage quit in a week?",
  imposterPrompt: "Give a number from 0 to 20"
},

{
  type: "range",
  category: "Gaming",
  prompt: "How many controllers or devices would you own ideally?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you spend customizing your setup?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many games would you finish in a year?",
  imposterPrompt: "Give a number from 0 to 30"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many in-game purchases would you make in a month?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would you spend trying to rank up?",
  imposterPrompt: "Give a number from 0 to 30"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many different genres would you play regularly?",
  imposterPrompt: "Give a number from 1 to 10"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many times would you restart a level before giving up?",
  imposterPrompt: "Give a number from 1 to 20"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many hours would your longest gaming session be?",
  imposterPrompt: "Give a number from 1 to 24"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many days in a row could you game if you had no responsibilities?",
  imposterPrompt: "Give a number from 1 to 14"
},
{
  type: "range",
  category: "Gaming",
  prompt: "How many games would you keep installed at once?",
  imposterPrompt: "Give a number from 1 to 20"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many dates would you go on per month in an ideal relationship?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many times a week would you want to see your partner?",
  imposterPrompt: "Give a number from 0 to 7"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many hours a day would you spend talking to your partner?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many vacations would you take together per year?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many months would you date before becoming official?",
  imposterPrompt: "Give a number from 0 to 12"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many anniversaries would you celebrate in a year?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many arguments would you expect in a month?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many close friends should your partner have?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many hours of alone time would you want daily in a relationship?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many times a week would you text your partner?",
  imposterPrompt: "Give a number from 0 to 100"
},

{
  type: "range",
  category: "Relationships",
  prompt: "How many times a month would you go out on dates?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many years would you want to wait before getting married?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many kids would you want ideally?",
  imposterPrompt: "Give a number from 0 to 6"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many times a week would you call your partner?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many shared hobbies would you want with your partner?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many surprises would you give your partner per month?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many hours a week would you spend together in person?",
  imposterPrompt: "Give a number from 0 to 50"
},
{
  type: "range",
  category: "Relationships",
  prompt: "How many trips would you take together in a year?",
  imposterPrompt: "Give a number from 0 to 10"
},

  {
    type: "range",
    category: "Travel",
    prompt: "How many states have you visited?",
    imposterPrompt: "Give a number from 1 to 20"
  },
  {
  type: "range",
  category: "Travel",
  prompt: "How many countries have you visited?",
  imposterPrompt: "Give a number from 0 to 30"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many flights have you taken?",
  imposterPrompt: "Give a number from 0 to 50"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many times have you been on a road trip?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many national parks have you visited?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many hotels have you stayed in?",
  imposterPrompt: "Give a number from 1 to 25"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many beaches have you been to?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many times have you traveled out of state?",
  imposterPrompt: "Give a number from 0 to 40"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many cities have you visited?",
  imposterPrompt: "Give a number from 1 to 50"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many cruises have you been on?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many times have you flown internationally?",
  imposterPrompt: "Give a number from 0 to 20"
},

{
  type: "range",
  category: "Travel",
  prompt: "How many landmarks have you visited?",
  imposterPrompt: "Give a number from 0 to 25"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many road trips have you taken this year?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many airports have you been to?",
  imposterPrompt: "Give a number from 1 to 30"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many times have you stayed at a resort?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many theme parks have you visited?",
  imposterPrompt: "Give a number from 0 to 10"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many train rides have you taken?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many times have you traveled with friends?",
  imposterPrompt: "Give a number from 0 to 20"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many solo trips have you taken?",
  imposterPrompt: "Give a number from 0 to 15"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many vacation days do you take per year?",
  imposterPrompt: "Give a number from 0 to 30"
},
{
  type: "range",
  category: "Travel",
  prompt: "How many times have you gone on a weekend trip?",
  imposterPrompt: "Give a number from 0 to 25"
}
];